import { useMutation } from 'react-query';

import { api } from 'api/client';
import { parseCookies } from 'nookies';

import { User } from './types';

export async function updateUser(user: User) {
  if (Object.keys(user).length === 0) return;
  try {
    const { userData: userDataFromCookies } = parseCookies();
    const parsedUser = JSON.parse(userDataFromCookies);
    const { data } = await api.patch(`/api/users/${parsedUser.id}`, {
      ...user,
    });

    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

export function useUpdateUser() {
  return useMutation(updateUser);
}
