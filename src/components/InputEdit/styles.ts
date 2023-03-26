import styled, { css } from 'styled-components';

export const InputEdit = styled.input<{ isEditing: boolean }>`
  ${({ theme }) => css`
    border: none;
    padding: 0.3rem 0 0.3rem 0.3rem;
    transition: border-left 0.1s ease;
    font-size: 1rem;
    flex-grow: 1;
    &:focus {
      outline: none;
      padding-left: 0.3rem;
      border-left: 1rem solid ${theme.colors.primary};
    }
  `}
`;

export const InputEditContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;

    & svg,
    & button > svg {
      color: ${theme.colors.secondaryGray};
      cursor: pointer;
      transition: color, transform 0.2s ease;
      &:hover {
        transform: scale(1.05);
        color: ${theme.colors.primary};
      }
    }

    & button {
      all: unset;
    }
  `}
`;

export const Info = styled.div`
  color: ${({ theme }) => theme.colors.gray};
`;
