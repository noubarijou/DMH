import { InputHTMLAttributes } from 'react';
import { Controller } from 'react-hook-form';

import * as s from './input-text.styles';

export type InputTextProps = {
  name: string;
  label?: string;
  type?: string;
  control?: any;
  className?: string;
  placeholder: string;
  variant?: 'outOfFocus' | 'focusWithin' | 'validationError';
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({
  name,
  label,
  type = 'text',
  variant = 'outOfFocus',
  control,
  placeholder,
  className,
  ...rest
}: InputTextProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
      <s.Wrapper aria-label="FieldText component">
        {!!label && (
          <s.LabelWrapper aria-label="FieldText component">
            <s.Label>{label}</s.Label>
          </s.LabelWrapper>
        )}
        <s.InputWrapper>
          <s.InputText
            type={type}
            name={name}
            placeholder={placeholder}
            variant={variant}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            className={className}
            {...rest}
          />
          {error && <s.Error>{error?.message}</s.Error>}
        </s.InputWrapper>
      </s.Wrapper>
    )}
  />
);

export { InputText };
