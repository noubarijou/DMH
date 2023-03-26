import styled, { css } from 'styled-components';

import { ButtonWrapper } from 'components/button/button.styles';
import {
  InputText,
  Label,
} from 'components/input/input-text/input-text.styles';

export const ContainerBackGround = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.675rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => css`
    @media (min-width: ${theme.screen.tablet}) {
      padding: 3rem;
    }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 0;
    padding: 0;
  }

  ${ButtonWrapper}, ${Label}, ${InputText}, div {
    width: 100%;
  }

  ${Label} {
    color: ${({ theme }) => theme.colors.secondaryBlack};
    font-size: ${({ theme }) => theme.font.sizes.small};
    margin: 1rem 0 0.25rem 0.5rem;

    ${({ theme }) => css`
      @media (min-width: ${theme.screen.tablet}) {
        margin-top: 2rem;
      }
    `}
  }

  ${InputText} {
    margin: 0;
    padding: 0.875rem 1.25rem;

    ${({ theme }) => css`
      @media (min-width: ${theme.screen.tablet}) {
        padding: 1.25rem;
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.normal};
      }
    `}
  }

  ${ButtonWrapper} {
    ${({ theme }) => css`
      padding: 0.875rem;
      margin-top: 1.875rem;
      @media (min-width: ${theme.screen.tablet}) {
        width: 22.5rem;
      }

      @media (min-width: ${theme.screen.desktopXL}) {
        width: 49rem;
      }
    `}
  }
`;

export const InputContainer = styled.div`
  width: 100%;

  ${({ theme }) => css`
    @media (min-width: ${theme.screen.tablet}) {
      &:first-child {
        width: 22.5rem;
      }

      &:nth-child(2) {
        width: 22.5rem;
        display: flex;
        gap: 0.875rem;
      }
    }

    @media (min-width: ${theme.screen.desktopXL}) {
      &:nth-child(1),
      &:nth-child(2) {
        width: 49rem;
        display: flex;
        gap: 3.75rem;
      }
    }
  `}
`;
