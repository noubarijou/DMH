import styled, { css } from 'styled-components';

export const mainContainer = styled.div`
  width: 100%;
  min-height: 260px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 40px 40px;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBlack};
  `};

  .main-text {
    ${({ theme }) => css`
      font-weight: ${theme.font.bold};
      font-family: ${theme.font.family};
      line-height: 2em;
      color: ${theme.colors.white};
      font-size: 1.1em;
      margin-bottom: 30px;
    `};
  }

  h1 {
    ${({ theme }) => css`
      font-weight: ${theme.font.bold};
      font-family: ${theme.font.family};
      line-height: 1em;
      color: ${theme.colors.primary};
      font-size: 1.3em;
    `};
  }
`;

export const codeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  div {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  p {
    ${({ theme }) => css`
      font-weight: ${theme.font.normal};
      font-family: ${theme.font.family};
      line-height: 1.2em;
      color: ${theme.colors.white};
      font-size: 1em;
    `};
  }
`;

export const infoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  p {
    ${({ theme }) => css`
      font-weight: ${theme.font.normal};
      font-family: ${theme.font.family};
      line-height: 1.2em;
      color: ${theme.colors.white};
      font-size: 1em;
    `};
  }
`;
