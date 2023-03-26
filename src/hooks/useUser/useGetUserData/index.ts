import { useQuery } from 'react-query';

import { api } from 'api/client';

import { UserData } from './types';

const QUERY_KEY_GET_USER_DATA = 'get-user-data';

export async function getUserData(userId: number | undefined) {
  if (!userId) return;
  try {
    const { data } = await api.get(`/api/users/${userId}`);

    return data as UserData;
  } catch (err: unknown) {
    if (err instanceof Error) console.log(err);
    return Promise.reject(err);
  }
}

export function useGetUserData(userId: number | undefined) {
  return useQuery([QUERY_KEY_GET_USER_DATA, userId], () => getUserData(userId));
}
