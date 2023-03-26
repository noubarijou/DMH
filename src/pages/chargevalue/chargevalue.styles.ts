import styled from 'styled-components';

export const DepositValue = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    border-radius: 0.5rem;
    margin: 2rem auto;
    padding: 1.5rem;
    width: 70%;
    background-color: ${({ theme }) => theme.colors.secondaryBlack};

    & button {
      align-self: flex-end;
      margin-right: 1rem;
      @media (max-width: 930px) {
        width: 100%;
      }
    }

    & div:has(input) {
      width: 100%;
    }
    & input {
      @media (max-width: 930px) {
        width: 100%;
      }
    }
  `,
  Title: styled.h3`
    color: ${({ theme }) => theme.colors.primary};
  `,
};
