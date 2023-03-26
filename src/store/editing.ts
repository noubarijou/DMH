import { create } from 'zustand';

export type Field = 'email' | 'name' | 'dni' | 'phone' | 'password' | '';

type EditStoreType = {
  field: Field;
  setField: (newField: Field) => void;
};

export const useEditStore = create<EditStoreType>((set) => ({
  field: '',
  setField: (field) => set(() => ({ field })),
}));
