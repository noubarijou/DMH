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
export const QUERY_KEY_GET_CARDS = 'get-cards';

export async function getCardsList() {
  try {
    const { userData: userDataFromCookies, '@digitalmoney:token': token } =
      parseCookies();

    const userData = JSON.parse(userDataFromCookies);
    const response = await api.get(
      `/api/accounts/${userData.account_id.id}/cards`,
      {
        headers: { Authorization: token },
      },
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

export function useGetCards() {
  return useQuery([QUERY_KEY_GET_CARDS], getCardsList);
}
