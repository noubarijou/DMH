import { css, DefaultTheme } from 'styled-components';

export type ModifierSizeMediaQueryProps = {
  variant?: 'walletComponent' | 'bigComponent';
};

export const ModifierSizeMediaQuery = {
  bigComponent: (theme: DefaultTheme) => css`
    width: 18.5rem;

    @media (min-width: ${theme.screen.mobile}) {
      width: 21rem;
    }

    @media (min-width: ${theme.screen.tablet}) {
      width: 32rem;
    }

    @media (min-width: ${theme.screen.desktopXL}) {
      width: 62.875rem;
    }
  `,
};
