import styled, { css } from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const PaginationItem = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    padding-top: 15px;
    > button {
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }
  `}
`;
