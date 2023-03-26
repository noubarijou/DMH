import styled, { css } from 'styled-components';

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 100%;

  ${({ theme }) => css`
    @media (min-width: ${theme.screen.tablet}) {
      display: none;
    }
  `}
`;

export const PageTitleContent = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
`;
