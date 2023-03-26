import styled, { css } from 'styled-components';

import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps,
} from 'styles/modifier.style';

export const LoadingInfo = styled.span`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const PersonalInfo = styled.form`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    border-radius: 8px;
    @media (min-width: ${theme.screen.desktopXXL}) {
    }
  `}
`;

export const InfoDescriptionContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
    width: 100%;
    padding: 0.75rem 0;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};
    &:first-of-type {
      border-top: 1px solid ${theme.colors.secondaryWhite};
    }
  `}
`;

export const InfoDescription = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    @media (min-width: ${theme.screen.desktopXXL}) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
export const InfoContent = styled.div`
  text-align: left;

  > span {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.normal};
      opacity: 0.5;

      @media (min-width: ${theme.screen.tablet}) {
        font-size: ${theme.font.sizes.small};
      }
      @media (min-width: ${theme.screen.desktopXXL}) {
        font-size: ${theme.font.sizes.xlarge};
      }
    `}
  }
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`;

export const CVUAliasCard = styled.section<ModifierSizeMediaQueryProps>`
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

export const CVUAliasText = styled.p`
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

export const CVUAliasTop = styled.div`
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
