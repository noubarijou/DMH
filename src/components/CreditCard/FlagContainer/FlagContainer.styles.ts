import styled from 'styled-components';

export const FlagContainer = styled.div`
  width: 2.75rem;
  height: 2rem;
  border-radius: 0.25rem;
  opacity: 0.5;

  &.disabled {
    background-color: ${({ theme }) => theme.colors.secondaryGray};
  }

  > img {
    width: 100%;
    background-color: transparent;
  }
`;
