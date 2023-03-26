import styled, { css } from 'styled-components';

export const mainContainer = styled.div`
  width: 100%;
  min-height: 460px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 50px 50px 50px 50px;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBlack};
  `};

  .divider {
    height: 1px;
    width: 100%;
    border-radius: 1px;
    background-color: lightgray;
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

export const cardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px 0 40px 0;
  border-radius: 10px;
  padding: 20px 40px 20px 40px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `};

  p {
    ${({ theme }) => css`
      font-weight: ${theme.font.xbold};
      font-family: ${theme.font.family};
      line-height: 1.2em;
      /* color: ${theme.colors.white}; */
      font-size: 1em;
      margin: 10px 0 10px 0;
    `};
  }
`;

export const cardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  .card {
    height: 50px;
    display: flex;
    align-items: center;
    width: 80%;
  }

  .circle {
    height: 35px;
    width: 35px;
    border-radius: 35px;
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
    `};
  }

  .checkbox {
    height: 25px;
    width: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.black};
    `};
  }

  p {
    ${({ theme }) => css`
      font-weight: ${theme.font.normal};
      font-family: ${theme.font.family};
      line-height: 1.2em;
      /* color: ${theme.colors.white}; */
      font-size: 1em;
      margin-left: 10px;
    `};
  }
`;

export const lastContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    width: 190px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  h2 {
    ${({ theme }) => css`
      font-weight: ${theme.font.bold};
      font-family: ${theme.font.family};
      line-height: 1em;
      color: ${theme.colors.primary};
      font-size: 1.3em;
      margin-left: 15px;
    `};
  }
`;

export const button = styled.button`
  width: 0;
  height: 0;
  border: none;
  background-color: transparent;
  color: transparent;
  pointer-events: none;
  @media (min-width: 768px) {
    height: 80px;
    border-radius: 10px;
    border: none;
    pointer-events: auto;
    min-width: 125px;
    cursor: pointer;
    width: 25%;
    ${({ theme }) => css`
      font-weight: ${theme.font.xbold};
      font-family: ${theme.font.family};
      font-size: 1.2em;
      color: ${theme.colors.black};
      background-color: ${theme.colors.primary};
    `};
  }
`;

export const buttonMobile = styled.button`
  display: none;
  width: 0;
  height: 0;
  border: none;
  background-color: transparent;
  color: transparent;
  pointer-events: none;
  @media (max-width: 767px) {
    display: block;
    height: 50px;
    border-radius: 10px;
    border: none;
    min-width: 125px;
    pointer-events: auto;
    cursor: pointer;
    width: 40%;
    margin-top: 20px;
    ${({ theme }) => css`
      box-shadow: 0px 0px 8px 1px rgba(179, 179, 179, 1);
      font-weight: ${theme.font.xbold};
      font-family: ${theme.font.family};
      font-size: 1em;
      color: ${theme.colors.black};
      background-color: ${theme.colors.primary};
    `};
  }
`;

export const insideCircle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 15px;
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `};
`;

export const allDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
