import styled, { css } from 'styled-components';

import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps,
} from 'styles/modifier.style';

export const BillInfoCard = styled.section<ModifierSizeMediaQueryProps>`
  ${({ theme, variant }) => css`
    height: 8.7rem;
    border-radius: 8px;
    background: ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem 1.375rem;
    ${ModifierSizeMediaQuery[(variant = 'bigComponent')](theme)};
    @media (min-width: ${theme.screen.tablet}) {
      height: 10rem;
    }

    @media (min-width: ${theme.screen.desktop}) {
    }
    @media (min-width: ${theme.screen.desktopXL}) {
    }
    @media (min-width: ${theme.screen.desktopXXL}) {
    }
  `}
`;

export const CardTitle = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    display: flex;
    justify-content: space-between;
    margin: 5px 0 10px 0;
    @media (min-width: ${theme.screen.tablet}) {
      font-size: ${theme.font.sizes.medium};
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
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const DetailsText = styled.p`
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
export const DividerLine = styled.div`
  ${({ theme }) => css`
    height: 2px;
    width: 100%;
    background-color: ${theme.colors.secondaryGray};
  `}
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DataContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.75rem 0;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};

    &:first-of-type {
      border-top: 1px solid ${theme.colors.secondaryWhite};
    }
  `}
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 75%;
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

export const ButtonContainer = styled.div``;
