import styled, { css, DefaultTheme } from 'styled-components';

import { InputTextProps } from '../Input';

const InputModifiers = {
  outOfFocus: (theme: DefaultTheme) => css`
    border: 1px solid #d2ffec;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    &::placeholder {
      color: ${theme.colors.secondaryBlack};
      font-weight: ${theme.font.bold};
      opacity: 0.5;
    }
  `,
  focusWithin: (theme: DefaultTheme) => css`
    &:focus-within {
      outline: none;
      box-shadow: 0 0 0.5rem ${theme.colors.secondaryBlack};
      font-weight: ${theme.font.normal};
    }
  `,
  validationError: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.error};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    font-weight: ${theme.font.bold};
  `,
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const LabelWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 0.8rem;
    transition: ${theme.transition.default};
    /* @media (max-width: ${theme.screen.desktopXL}) {
      width: 635px;
    } */
  `}
`;

export const InputText = styled.input<InputTextProps>`
  ${({ theme, variant }) => css`
    background: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    border-radius: 10px;
    padding: 1.25rem 0.875rem;
    width: 18.5rem;

    @media (min-width: ${theme.screen.tablet}) {
      width: 22.5rem;
    }

    /* @media (max-width: ${theme.screen.desktopXXL}) {
      width: 1602.72px;
      height: 120px;
    }
    @media (max-width: ${theme.screen.desktopXL}) {
      width: 892px;
      height: 60px;
    }

    @media (max-width: ${theme.screen.desktop}) {
      width: 635px;
    }
    @media (max-width: ${theme.screen.tablet768w}) {
      width: 400px;
      height: 50px;
      margin-bottom: 10px;
    }
    @media (max-width: ${theme.screen.mobile425w}) {
      width: 400px;
    }
    @media (max-width: ${theme.screen.mobile375w}) {
      width: 350px;
    }
    @media (max-width: 320px) {
      width: 18.438rem;
    } */
    ${!!variant && InputModifiers[variant](theme)};
  `}
`;

export const Error = styled.p`
  color: red;
`;
