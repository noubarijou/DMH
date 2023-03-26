import styled, { css } from 'styled-components';

import theme from 'styles/theme';

export const ContainerPage = styled.div`
  background-color: ${theme.colors.black};
  height: calc(10vh - 7px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;

  .dmh-container {
    margin-left: 20px;
    display: inline-block;
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.primary};
    `}
  }

  .buttons-container {
    display: flex;
    align-items: center;
    padding: 12px;
    height: 100%;
  }
`;

export const ButtonLogin = styled.button`
  border: 2px solid ${theme.colors.primary};
  padding: 10px;
  line-height: 0.6em;
  border-radius: 5px;
  margin-right: 15px;
  background-color: transparent;
  cursor: pointer;

  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.xbold};
    color: ${theme.colors.primary};
  `};
`;

export const ButtonCreateAccount = styled.button`
  background-color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  padding: 10px;
  line-height: 0.6em;
  border-radius: 5px;
  cursor: pointer;

  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-weight: ${theme.font.xbold};
    color: ${theme.colors.secondaryBlack};
  `};
`;
