import styled, { css } from 'styled-components';

export const FilterContainer = styled.div`
  ${({ theme }) => css`
    height: 428px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (min-width: ${theme.screen.tablet}) {
      width: 55%;
      margin: 20px 0 20px 80px;
    }
    @media (min-width: ${theme.screen.desktop}) {
      width: 100%;
      margin-left: 0px;
    }
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
    @media (min-width: ${theme.screen.desktop}) {
      > select {
        margin-right: 245px;
      }
    @media (min-width: ${theme.screen.desktopXL}) {
      > select {
        margin-right: 750px;
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
    @media (min-width: ${theme.screen.desktop}) {
    }
  `}
`;

export const LimparFiltros = styled.button`
  ${({ theme }) => css`
    display: flex;
    background: none;
    border: none;
    align-items: center;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin: 30px 15px 0 15px;
  `}
`;
