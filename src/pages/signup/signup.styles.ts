import styled from 'styled-components';

export const FormContainer = styled.div`
  padding-top: 4rem;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  @media (min-width: ${({ theme }) => theme.screen.tablet}) {
    height: 100vh;
  }
`;

export const Form = styled.form`
  width: max-content;
  margin: 0 auto;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  & > * {
    margin: 0 auto;
  }

  & > button {
    margin: 2.25rem auto 0.9rem;
  }
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export const FormTitle = styled.h2`
  grid-column: 1 / -1;
  place-self: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.p`
  grid-column: 1 / -1;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 50%;
  }
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
