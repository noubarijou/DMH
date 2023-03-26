import Link from 'next/link';

import styled, { css } from 'styled-components';

export const NavLink = styled(Link)`
  text-decoration: none;

  ${({ theme }) => css`
    color: ${theme.colors.black};

    &.active {
      font-weight: ${theme.font.xxbold};
    }
  `}
`;
