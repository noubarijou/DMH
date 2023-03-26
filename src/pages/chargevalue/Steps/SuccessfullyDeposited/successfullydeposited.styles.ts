import styled from 'styled-components';

import {
  BoldContent,
  TransferDataPreview,
} from '../TransferDataPreview/transferdatapreview.styles';

export const SuccessfullyDeposited = {
  Container: styled.div`
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 2rem 0;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    width: 70%;
    border-radius: 0.5rem;
  `,
  Heading_2: styled.h2`
    text-align: center;
  `,
  IconContainer: styled.div`
    color: inherit;
  `,
};

export const DateContainer = styled(TransferDataPreview.Label)`
  color: ${({ theme }) => theme.colors.white};
`;

export const Amount = styled(BoldContent)`
  display: block;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const Account = styled.h2`
  display: block;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 70%;
  justify-content: flex-end;
`;
