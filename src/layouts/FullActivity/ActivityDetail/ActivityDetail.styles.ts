import styled, { css } from 'styled-components';

import {
  TableContainer,
  TableTitle,
} from 'components/container/tableContainer/tableContainer.styles';
import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps,
} from 'styles/modifier.style';

export const BlackContainer = styled(TableContainer)`
  background-color: ${({ theme }) => theme.colors.black};
`;

export const titleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryWhite};
`;

export const EmphasisText = styled(TableTitle)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const InfoDate = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    margin: 0.75rem 0.5rem;

    &.desktop {
      display: none;

      @media (min-width: ${theme.screen.desktopXL}) {
        display: contents;
        margin-left: 2rem;
      }
    }

    &.mobile {
      @media (min-width: ${theme.screen.desktopXL}) {
        display: none;
      }
    }
  `}
`;

export const InfoContainer = styled.div`
  margin-left: 0.5rem;

  ${EmphasisText} {
    margin: 0;
    margin-bottom: 1.25rem;

    &.number {
      font-weight: ${({ theme }) => theme.font.normal};
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }
`;

export const InfoSubTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    margin-bottom: 0.25rem;

    &:first-child {
      margin-top: 0.5rem;
      font-weight: ${theme.font.xbold};
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const BtnContainer = styled.div<ModifierSizeMediaQueryProps>`
  ${({ theme, variant }) => css`
    ${ModifierSizeMediaQuery[(variant = 'bigComponent')](theme)};
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (min-width: ${theme.screen.tablet}) {
      flex-direction: row-reverse;
    }

    > button {
      font-size: ${theme.font.sizes.medium};

      @media (min-width: ${theme.screen.desktopXL}) {
        width: 14.75rem;
      }
    }
  `}
`;
