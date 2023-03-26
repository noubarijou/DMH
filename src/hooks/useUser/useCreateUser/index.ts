import { useMutation } from 'react-query';

import { api } from 'api/client';

import { SignUpPayload, SignUpResponse } from './types';

export async function postUser(user: Omit<SignUpPayload, 'confirmPassword'>) {
  if (!user || Object.keys(user).length === 0) {
    return Promise.reject(new Error('Invalid user object'));
  }
  const parsedUser = { ...user, dni: Number(user.dni) };
  try {
    const { data } = await api.post<SignUpResponse>('/api/users', parsedUser);
    return data;
  } catch (e) {
    if (e instanceof Error) {
      return Promise.reject(e);
    }
  }
}

export function usePostUser() {
  return useMutation(postUser);
}
