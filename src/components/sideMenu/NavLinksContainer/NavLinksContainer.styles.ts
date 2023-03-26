import styled, { css } from 'styled-components';

export const LinksContainer = styled.ul`
  padding: 1rem 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};

    > button {
      background: none;
      border: none;
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      opacity: 50%;
      text-align: left;
    }
  `}

  > li {
    list-style: none;
  }
`;
