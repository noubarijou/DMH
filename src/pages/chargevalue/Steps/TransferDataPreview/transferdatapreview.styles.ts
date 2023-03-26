import styled from 'styled-components';

export const TransferDataPreview = {
  Container: styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: max-content;
    padding-right: 4rem;
  `,
  Label: styled.span``,
  Content: styled.span``,
  IconContainer: styled.div`
    position: absolute;
    top: 0;
    right: 0;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  `,
};

export const BoldContent = styled(TransferDataPreview.Content)`
  font-weight: 700;
`;
