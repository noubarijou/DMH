import { useMutation } from 'react-query';

import { api } from 'api/client';

import { TransferenceRequest, TransferenceResponse } from './types';

export async function createDeposit(payload: TransferenceRequest) {
  const { account_id, ...rest } = payload;
  try {
    const { data } = await api.post<TransferenceResponse>(
      `api/accounts/${payload.account_id}/deposits`,
      rest,
    );

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

export function useCreateDeposit() {
  return useMutation(createDeposit);
}
