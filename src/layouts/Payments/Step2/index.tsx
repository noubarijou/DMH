import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components';
import { schemaLogin } from 'pages/login/schemas';

import * as s from './steptwo.styles';
import { ModInput } from './steptwo.styles';

import PaymentStepThree from '../Step3';

const PaymentStepTwo = () => {
  const router = useRouter();
  const { control } = useForm({
    defaultValues: {
      search: '',
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all',
  });
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
            <s.CardTitle>Número da conta</s.CardTitle>
            <s.InputContainer>
              <ModInput
                name="search"
                control={control}
                placeholder=""
                className="search"
              />
            </s.InputContainer>
          </s.BillInfoCard>
          <s.ModButton>
            <Button variant="primary" size="large" onClick={onClick}>
              Continuar
            </Button>
          </s.ModButton>
          <s.ModButton>
            <Button variant="tertiary" size="large" onClick={returnOnClick}>
              Voltar
            </Button>
          </s.ModButton>
        </>
      ) : (
        <>
          <PaymentStepThree />
        </>
      )}
    </>
  );
};

export default PaymentStepTwo;
