import { UserDataResponse } from 'hooks/useUser/useLoginUser/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  user: UserDataResponse;
  setUser: (user: UserDataResponse) => void;
};

export const useUserStore = create(
  persist<User>(
    (set) => ({
      user: {} as UserDataResponse,
      setUser: (user: UserDataResponse) => set(() => ({ user })),
    }),
    {
      name: 'user',
    },
  ),
);
