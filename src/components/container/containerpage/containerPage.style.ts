import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  ${({ theme }) => css`
    min-height: ${theme.calc.body};
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    padding-bottom: 2.5rem;
    align-items: center;
    gap: 1.25rem;

    @media (min-width: ${theme.screen.tablet}) {
      padding-left: 16.875rem;
      padding-top: 2.5rem;
      margin-right: 1rem;
    }

    @media (min-width: ${theme.screen.desktopXL}) {
      padding-left: 22.25rem;
      padding-top: 2.5rem;
    }
  `}
`;
