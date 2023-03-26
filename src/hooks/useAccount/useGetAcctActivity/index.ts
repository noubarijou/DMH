import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { api } from 'api/client';

import { useGetAccount } from '../useGetAcctData';
import { AcctActivity } from './types';

const QUERY_KEY_GET_ACCOUNT_ACTIVITY = 'get-account-activity';

export async function getAcctActivity(accountId: number | undefined) {
  if (!accountId) return;
  try {
    const { data } = await api.get(`/api/accounts/${accountId}/activity`, {
      params: { account_id: accountId },
    });

    return data as AcctActivity[];
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      Promise.reject(err);
    }
  }
}

export function useGetAcctActivity(userId: number | undefined) {
  const { data: account } = useGetAccount(userId);

  return useQuery([QUERY_KEY_GET_ACCOUNT_ACTIVITY, account?.id], () =>
    getAcctActivity(account?.id),
  );
}
