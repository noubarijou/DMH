import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';

import { useTheme } from 'styled-components';

import { Button, TableContainer } from 'components';

import * as s from './stepthree.styles';

import PaymentSuccessful from '../Success';

const PaymentStepThree = () => {
  const router = useRouter();
  const {
    colors: { primary },
  } = useTheme();
  const [payService, setPayService] = useState(false);
  const onClick = () => {
    setPayService(true);
  };
  const returnOnClick = () => {
    setPayService(false);
    router.push('/payments');
    console.log(payService);
  };
  return (
    <>
      {!payService ? (
        <>
          <s.BillInfoCard>
            <s.DetailsContainer>
              <s.DetailsText>Ver detalhes do pagamento</s.DetailsText>
            </s.DetailsContainer>
            <s.CardTitle>TV a cabo</s.CardTitle>
            <s.DividerLine />
            <s.TotalContainer>
              <s.DetailsText>Total a pagar</s.DetailsText>
              <s.DetailsText>$1.153,75</s.DetailsText>
            </s.TotalContainer>
          </s.BillInfoCard>
          <TableContainer title="Seus cartões">
            <s.DataContainer>
              <s.Description>
                <BsCircleFill color={primary} size="20" />
                <s.DescriptionText>Termina em</s.DescriptionText>
              </s.Description>
            </s.DataContainer>
          </TableContainer>
          <s.ButtonContainer>
            <Button variant="primary" size="large" onClick={onClick}>
              Pagar
            </Button>
          </s.ButtonContainer>
          <s.ButtonContainer>
            <Button variant="tertiary" size="large" onClick={returnOnClick}>
              Voltar
            </Button>
          </s.ButtonContainer>
        </>
      ) : (
        <>
          <PaymentSuccessful />
        </>
      )}
    </>
  );
};
export default PaymentStepThree;
