import styled, { css } from 'styled-components';

import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps,
} from 'styles/modifier.style';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 110px;
    border-radius: 8px;
    gap: 5px;
    background-color: ${theme.colors.primary};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`;
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

export const GreenMessage = styled.div`
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

export const WhiteText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryWhite};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    padding: 10px 0;
    @media (min-width: ${theme.screen.tablet}) {
      font-size: ${theme.font.sizes.medium};
      padding: 15px; 0;
    }
    @media (min-width: ${theme.screen.desktop}) {
      font-size: ${theme.font.sizes.medium};
      width: 500px;
      padding: 25px 30px;
    }
    @media (min-width: ${theme.screen.desktopXL}) {
      font-size: ${theme.font.sizes.large};
      width: 600px;
      padding: 10px 30px 40px 30px;
    }
   
  `}
`;
export const DescriptionText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    @media (max-width: ${theme.screen.tablet}) {
      width: 60%;
    }

    @media (min-width: ${theme.screen.tablet}) {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
