import styled, { css } from 'styled-components';

export const optionsContainer = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 0 40px 0 40px;
  justify-content: space-between;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBlack};
  `};

  div {
    width: 90%;
    display: flex;
    align-items: center;
  }

  h1 {
    ${({ theme }) => css`
      font-weight: ${theme.font.bold};
      font-family: ${theme.font.family};
      line-height: 2em;
      color: ${theme.colors.primary};
      font-size: 1.1em;
    `};
    margin-left: 20px;
  }
`;
