import { useQuery } from 'react-query';

import { api } from 'api/client';
import { parseCookies } from 'nookies';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

export const QUERY_KEY_GET_TRANSACTION = 'get-transaction';

export async function getTransaction(transactionId: any) {
  try {
    const { userData: userDataFromCookies, '@digitalmoney:token': token } =
      parseCookies();

    const userData = JSON.parse(userDataFromCookies);

    const response = await api.get(
      `/api/accounts/${userData.account_id.id}/transactions/${transactionId}`,
      { headers: { Authorization: token } },
    );

    return response.data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;

      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useGetAcctTransaction(transactionId: number | undefined) {
  return useQuery([QUERY_KEY_GET_TRANSACTION], () =>
    getTransaction(transactionId),
  );
}
