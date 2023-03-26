import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  height: ${({ theme }) => theme.calc.body};
  display: flex;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryBlack};
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.xbold};
    color: ${theme.colors.white};
  `};
`;

export const ContainerLogin = styled.form`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
  `}
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: min-content;
  height: 332px;
  text-align: center;

  ${({ theme }) => css`
    & > button {
      margin: ${theme.spacings.xxsmall} auto;
    }
  `}
`;

export const MessageError = styled.span`
  font-style: italic;
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `};
`;
