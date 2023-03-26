import styled, { css } from 'styled-components';

import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps,
} from 'styles/modifier.style';

export const addNewCardContainer = styled.div<ModifierSizeMediaQueryProps>`
  ${({ theme, variant }) => css`
    height: 9.25rem;
    border-radius: 0.5rem;
    padding: 1.25rem;
    font-weight: ${theme.font.xbold};
    background-color: ${theme.colors.secondaryBlack};

    ${ModifierSizeMediaQuery[(variant = 'bigComponent')](theme)};

    @media (min-width: ${theme.screen.tablet}) {
      height: 9.75rem;
      padding: 2.5rem;
    }

    @media (min-width: ${theme.screen.tablet}) {
      height: 10.5rem;
    }
  `}
`;

export const callActionNewCard = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export const btnNewCard = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};

    @media (min-width: ${theme.screen.tablet}) {
      margin-top: 2rem;
    }
  `}

  > p {
    width: 65%;

    ${({ theme }) => css`
      @media (min-width: ${theme.screen.tablet}) {
        width: 80%;
      }

      @media (min-width: ${theme.screen.desktopXL}) {
        width: 90%;
      }
    `}
  }
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

export const DeleteCardBtn = styled.button`
  text-align: right;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.xbold};
  `}
`;
