import { TransferenceResponse } from 'hooks/useTransferences/useCreateDeposit/types';
import { create } from 'zustand';

type ChargeValueStoreType = {
  value: number;
  setChargeValue: (value: number) => void;
  transferenceResult: TransferenceResponse;
  setTransferenceResult: (transferenceResult: TransferenceResponse) => void;
};

export const useChargeValueStore = create<ChargeValueStoreType>((set) => ({
  value: 0,
  setChargeValue: (value) => set(() => ({ value })),
  transferenceResult: {} as TransferenceResponse,
  setTransferenceResult: (transferenceResult: TransferenceResponse) =>
    set(() => ({ transferenceResult })),
}));
