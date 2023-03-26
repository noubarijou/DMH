import React from 'react';

import { ContainerPage } from 'components';
import ActivityDetail from 'layouts/FullActivity/ActivityDetail';
import StepOne from 'layouts/Payments/Step1';
import PaymentStepTwo from 'layouts/Payments/Step2';
import PaymentStepThree from 'layouts/Payments/Step3';
import PaymentSuccessful from 'layouts/Payments/Success';

import Payments from '../payments/index';

const Teste = () => {
  return (
    <ContainerPage>
      <ActivityDetail transactionId={1} />
    </ContainerPage>
  );
};

export default Teste;
