import { useMutation, MutationFunction } from 'react-query';

import { api } from 'api/client';
import { setCookie, destroyCookie } from 'nookies';

import {
  decryptToken,
  LoginPayload,
  LoginResponse,
  UserDataResponse,
} from './types';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

const decryptJwt = (token: string): decryptToken => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = JSON.parse(
    Buffer.from(base64, 'base64').toString('utf-8'),
  );

  return jsonPayload;
};

export async function loginUser(user: Omit<LoginPayload, 'login'>) {
  if (!user || Object.keys(user).length === 0) {
    return Promise.reject(new Error('Invalid user object'));
  }
  try {
    const { data: loginData } = await api.post<LoginResponse>(
      '/api/login',
      user,
    );
    console.log(loginData);
    const decryptToken = decryptJwt(loginData.token);
    const { data: userData } = await api.get<UserDataResponse>(
      `/api/users/${decryptToken.username}`,
      {
        headers: {
          Authorization: loginData.token,
        },
      },
    );

    const { data: accountId } = await api.get<UserDataResponse>(
      `/api/account`,
      {
        headers: {
          Authorization: loginData.token,
        },
      },
    );

    setCookie(
      null,
      'userData',
      JSON.stringify({ ...userData, account_id: accountId }),
    );
    return userData;
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export const logoutUser: MutationFunction<unknown, {}> = async () => {
  try {
    await api.post('/api/logout');
    destroyCookie(null, '@digitalmoney:token');
    destroyCookie(null, 'userData');
    api.defaults.headers.common['Authorization'] = '';
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
};

export const useLogoutUser = () => {
  const { mutate, status } = useMutation(logoutUser);
  return { mutate, status };
};

export function useLoginUser() {
  return useMutation(loginUser);
}
