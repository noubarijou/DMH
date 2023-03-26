import styled, { css } from 'styled-components';

import { ButtonWrapper } from 'components/button/button.styles';
import { InputText } from 'components/input/input-text/input-text.styles';
import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps,
} from 'styles/modifier.style';

export const BillInfoCard = styled.section<ModifierSizeMediaQueryProps>`
  ${({ theme, variant }) => css`
    height: 12.7rem;
    border-radius: 8px;
    background: ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem 1.375rem;
    ${ModifierSizeMediaQuery[(variant = 'bigComponent')](theme)};
    @media (min-width: ${theme.screen.tablet}) {
      height: 19rem;
    }

    @media (min-width: ${theme.screen.desktop}) {
      height: 22rem;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      height: 22.5rem;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      height: 27rem;
    }
  `}
`;

export const CardTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    display: flex;
    justify-content: space-between;
    @media (min-width: ${theme.screen.tablet}) {
      font-size: ${theme.font.sizes.medium};
      padding: 15px; 0;
    }
    @media (min-width: ${theme.screen.desktop}) {
      padding: 30px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      font-size: ${theme.font.sizes.large};
      padding: 20px 30px 0 30px;
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;
export const InputContainer = styled.div`
  ${({ theme }) => css`
    max-width: 280px;
    ${InputText}.search {
      @media (min-width: ${theme.screen.mobile375w}) {
        padding: 1.25rem 0 1.25rem 2.125rem;
      }

      @media (min-width: ${theme.screen.mobile}) {
        width: 21rem;
      }
      @media (min-width: ${theme.screen.mobile425w}) {
        padding-left: 2.5rem;
      }

      @media (min-width: ${theme.screen.tablet}) {
        width: 32rem;
      }

      @media (min-width: ${theme.screen.desktopXL}) {
        width: 62.875rem;
      }
    }
  `}
`;

export const ModInput = styled(InputText)`
  ${({ theme }) => css`
    max-width: 280px;
    margin: 30px 10px 0 -13px;
    @media (min-width: ${theme.screen.mobile425w}) {
      margin: 40px 0 0 0;
    }
    @media (min-width: ${theme.screen.tablet}) {
      margin: 50 0 0 0;
      max-width: 450px;
    }
  `}
`;

export const ModButton = styled(ButtonWrapper)`
  ${({ theme }) => css`
    border: none;
    @media (min-width: ${theme.screen.mobile425w}) {
    }
  `}
`;
