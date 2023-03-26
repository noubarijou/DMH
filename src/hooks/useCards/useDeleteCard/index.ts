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

export async function deleteCard(cardNumber: any) {
  try {
    const { userData: userDataFromCookies, '@digitalmoney:token': token } =
      parseCookies();

    const userData = JSON.parse(userDataFromCookies);
    await api.delete(
      `/api/accounts/${userData.account_id.id}/cards/${cardNumber}`,
      {
        headers: { Authorization: token },
      },
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useDeleteCard() {
  return useMutation(deleteCard);
}
