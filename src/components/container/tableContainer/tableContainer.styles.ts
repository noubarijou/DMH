import styled, { css } from 'styled-components';

import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps,
} from 'styles/modifier.style';

export const TableContainer = styled.div<ModifierSizeMediaQueryProps>`
  ${({ theme, variant }) => css`
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;

    ${ModifierSizeMediaQuery[(variant = 'bigComponent')](theme)};

    @media (min-width: ${theme.screen.tablet}) {
      padding: 2.5rem 2.25rem;
    }
  `}
`;

export const TableTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: 1.25rem;
    @media (min-width: ${theme.screen.desktopXXL}) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
