import { useMutation } from 'react-query';

import { api } from 'api/client';
import { parseCookies } from 'nookies';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

export async function createCard(card: any) {
  try {
    const { userData: userDataFromCookies, '@digitalmoney:token': token } =
      parseCookies();
    const userData = JSON.parse(userDataFromCookies);
    const response = await api.post(
      `/api/accounts/${userData.account_id.id}/cards`,
      card,
      {
        headers: { Authorization: token },
      },
    );
    console.log(response);
    return response;
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useCreateCard() {
  return useMutation(createCard);
}
