import styled, { css, DefaultTheme } from 'styled-components';

type CreditCardProps = {
  variant: 'disabled' | 'valid';
};

const CreditCardModifiers = {
  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondaryWhite};
    color: ${theme.colors.gray};
  `,
  valid: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondaryBlack};
    color: ${theme.colors.white};
  `,
};

export const CreditCardContainer = styled.div<CreditCardProps>`
  ${({ theme, variant }) => css`
    width: 100%;
    max-width: 18.5rem;
    height: 11rem;
    border-radius: 0.5rem;
    padding: 1.25rem;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    left: 50%;
    transform: translate(-50%);

    ${!!variant && CreditCardModifiers[variant](theme)};
  `}
`;

export const NumberContainer = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  `}
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > span,
  p {
    font-size: ${({ theme }) => theme.font.sizes.small};
    text-transform: uppercase;
  }
`;
