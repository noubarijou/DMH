import { Account } from 'hooks/useAccount/useGetAcctData/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AccountStoreType = {
  account_info: Account;
  setAccountInfo: (account: Account) => void;
};

export const useAccountStore = create(
  persist<AccountStoreType>(
    (set) => ({
      account_info: {} as Account,
      setAccountInfo: (account) => set(() => ({ account_info: account })),
    }),
    { name: 'accountInfo' },
  ),
);
