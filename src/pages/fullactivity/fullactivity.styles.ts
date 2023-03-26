import { AiOutlineSearch } from 'react-icons/ai';

import styled, { css } from 'styled-components';

import { TableContainer } from 'components';

import { InputText } from 'components/input/input-text/input-text.styles';

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
export const FullActivityTable = styled(TableContainer)`
  ${({ theme }) => css``}
`;
export const ActivityHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.secondaryWhite};
    margin-top: -15px;
    padding-bottom: 5px;
    > p {
      font-weight: ${theme.font.bold};
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

    &:nth-child(-1) {
      border-top: 1px solid ${theme.colors.secondaryWhite};
    }
  `}
`;
export const FilterButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-self: flex-end;
    > p {
      margin-right: 10px;
      font-weight: ${theme.font.bold};
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

export const Pagination = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
  `}
`;
export const PaginationItem = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    padding-top: 15px;
  `}
`;
