import { css, DefaultTheme } from 'styled-components';

export type ModifierSizeMediaQueryProps = {
  variant?: 'walletComponent' | 'bigComponent';
};

export const ModifierSizeMediaQuery = {
  walletComponent: (theme: DefaultTheme) => css``,
  bigComponent: (theme: DefaultTheme) => css`
  
    width: 18.5rem;

    @media (min-width: 24.375rem) {
      width: 21rem;
    }

    @media (min-width: 48rem) {
      width: 32rem;
    }

    @media (min-width: 90rem) {
      width: 62.875rem;
    }
  `
};
