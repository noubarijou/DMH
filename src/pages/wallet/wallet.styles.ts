import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';

import styled, { css } from 'styled-components';

import { InputText } from 'components/input/input-text/input-text.styles';
import {
  ModifierSizeMediaQuery,
  ModifierSizeMediaQueryProps,
} from 'styles/modifier.style';

export const AvailableMoneyCard = styled.section<ModifierSizeMediaQueryProps>`
  ${({ theme, variant }) => css`
    height: 10rem;
    border-radius: 0.5rem;
    background: ${theme.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1rem 1.375rem;

    ${ModifierSizeMediaQuery[(variant = 'bigComponent')](theme)};

    @media (min-width: ${theme.screen.tablet}) {
      height: 14.5rem;
      padding: 1.5rem 1.675rem;
    }

    @media (min-width: ${theme.screen.desktopXL}) {
      padding: 1.5rem 3.75rem;
    }
  `}
`;

export const TopLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Links = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    text-decoration: underline;

    @media (min-width: ${theme.screen.tablet}) {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const whiteText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    margin-top: 1.25rem;
    margin-left: 0.5rem;

    @media (min-width: ${theme.screen.tablet}) {
      font-weight: ${theme.font.bold};
      margin-top: 2.75rem;
    }

    @media (min-width: ${theme.screen.desktopXL}) {
      font-weight: ${theme.font.xbold};
    }
  `}
`;

export const AvailableMoney = styled.div`
  ${({ theme }) => css`
    width: 12.75rem;
    height: 3.25rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: 6.25rem;
    margin-top: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${theme.screen.tablet}) {
      border: 3px solid ${theme.colors.primary};
      height: 4.5rem;
      width: 18.75rem;
    }
  `}
`;

export const Balance = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.xlarge};

    @media (min-width: ${theme.screen.tablet}) {
      font-size: ${theme.font.sizes.xxxlarge};
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (min-width: ${theme.screen.desktopXL}) {
      flex-direction: row;
    }
  `}
`;

export const InputContainer = styled.div`
  position: relative;

  > div:first-child,
  div:nth-child(2) {
    padding: 0;
  }

  ${({ theme }) => css`
    ${InputText}.search {
      @media (max-width: ${theme.screen.mobile375w}) {
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

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 1.35rem;
  left: 0.75rem;

  ${({ theme }) => css`
    @media (min-width: ${theme.screen.tablet}) {
      left: 1rem;
    }
  `}
`;

export const ActivityContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 0;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};

    &:first-of-type {
      border-top: 1px solid ${theme.colors.secondaryWhite};
    }
  `}
`;

export const ActivityDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 75%;
`;

export const ActivityDescriptionText = styled.p`
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

export const ActivityValue = styled.div`
  text-align: right;

  > span {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.normal};
      opacity: 0.5;

      @media (min-width: ${theme.screen.tablet}) {
        font-size: ${theme.font.sizes.small};
      }
    `}
  }
`;

export const LinkFullActivity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

export const FullActivityText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.xbold};

    @media (min-width: ${theme.screen.tablet}) {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
