import { useMutation } from 'react-query';

import { api } from 'api/client';

import { CreateTransactionParam, CreateTransactionResponse } from './types';

export const QUERY_KEY_CREATE_TRANSACTION = 'create-transaction';

export async function createTransaction(payload: CreateTransactionParam) {
  if (Object.keys(payload).length === 0) return;
  try {
    const { data } = await api.post<CreateTransactionResponse>(
      `api/accounts/${payload.account_id}/transactions`,
      { data: JSON.stringify(payload.payload) },
    );

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

export function useCreateTransaction() {
  return useMutation(createTransaction);
}
