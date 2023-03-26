import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
${({ theme }) => css`
  background-color: ${theme.colors.gray};
  height: calc(10vh - 8px);
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  bottom: 0;
  z-index: 1;

  .small-text {
    margin-left: 20px;
    display: inline-block;
      font-family: ${theme.font.family};
      font-weight: ${theme.font.normal};
      color: ${theme.colors.primary};
    `}
  }
`;
