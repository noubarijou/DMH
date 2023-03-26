import { useRef } from 'react';
import { MdEdit } from 'react-icons/md';

import { useTheme } from 'styled-components';

import { Field, useEditStore } from 'store/editing';

import * as s from './styles';

import { InputEditProps } from './types';

export function InputEdit({ info, type, register, name }: InputEditProps) {
  const { colors } = useTheme();
  const field = useEditStore((state) => state.field);
  const setField = useEditStore((state) => state.setField);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditingToggle = () => {
    if (field === '') {
      setField(name as Field);
    }
  };

  return (
    <s.InputEditContainer>
      {field === name ? (
        <s.InputEdit ref={inputRef} type={type} {...register(name)} />
      ) : (
        <s.Info>{info}</s.Info>
      )}
      {field === name ? (
        <button type="submit">
          <MdEdit
            size={24}
            color={field === name ? colors.primary : colors.secondaryGray}
          />
        </button>
      ) : (
        <MdEdit
          size={24}
          onClick={handleEditingToggle}
          color={field === name ? colors.primary : colors.secondaryGray}
        />
      )}
    </s.InputEditContainer>
  );
}
