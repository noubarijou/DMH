import styled, { css } from 'styled-components';

export const FilterContainer = styled.div`
  ${({ theme }) => css`
    height: 428px;
    width: 100%;
    background: ${theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `}
`;

export const FilterHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 0;
    height: 57px;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.black};
    > select {
      margin-right: 60px;
      border-color: ${theme.colors.white};
    }
  `}
`;
export const FilterOptionList = styled.div`
  ${({ theme }) => css``}
`;

export const FilterOption = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin: 10px 15px 0 0;
  `}
`;
