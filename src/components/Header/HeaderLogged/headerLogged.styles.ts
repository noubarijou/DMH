import Link from 'next/link';

import styled, { css } from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: calc(10vh - 7px);
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;

  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.primary};
  `}

  > div.headerLogo {
    height: 100%;
    max-height: 3.5rem;
    > a > img {
      height: 100%;
      width: auto;
    }
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  align-items: center;

  > .alias {
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;

    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.xbold};
    `}
  }
`;

export const InfoText = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.xbold};
    font-size: ${theme.font.sizes.medium};

    &.headerText {
      color: ${theme.colors.white};
    }
  `}
`;

export const ProfileLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
  text-decoration: none;
`;
