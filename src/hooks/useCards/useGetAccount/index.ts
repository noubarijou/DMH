import { useQuery } from 'react-query';

import { api } from 'api/client';

import { Account } from './types';

const QUERY_KEY_GET_ACCOUNT = 'get-account';

export async function getAccount(userId: number | undefined) {
  try {
    const { data } = await api.get('/api/account', {
      params: { user_id: userId },
    });

    return data as Account;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      Promise.reject(err);
    }
  }
}

export function useGetAccount(userId: number | undefined) {
  return useQuery([QUERY_KEY_GET_ACCOUNT], () => getAccount(userId));
}
