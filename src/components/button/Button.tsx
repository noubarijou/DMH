import React from 'react';

import * as s from './button.styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
  size?: 'xsmall' | 'medium' | 'large' | 'wallet';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  type,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <s.ButtonWrapper
      type={type}
      variant={variant}
      size={size}
      onClick={onClick}
      {...rest}
    >
      {children}
    </s.ButtonWrapper>
  );
};

export { Button };
