import { create } from 'zustand';

export type Field = 'email' | 'name' | 'dni' | 'phone' | 'password' | '';

type StepsStoreType = {
  step: number;
  setNextStep: () => void;
  setPreviousStep: () => void;
  setStep: (step: number) => void;
};

const LAST_STEP = 5;

export const useStepsStore = create<StepsStoreType>((set) => ({
  step: 0,
  setNextStep: () =>
    set((state) => ({ step: Math.min(state.step + 1, LAST_STEP) })),
  setPreviousStep: () =>
    set((state) => ({ step: Math.max(state.step - 1, 0) })),
  setStep: (step) => set(() => ({ step })),
}));
