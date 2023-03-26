import React from 'react';

import { ContainerPage } from 'components';
import ActivityDetail from 'layouts/FullActivity/ActivityDetail';

const Teste = () => {
  return (
    <ContainerPage>
      <ActivityDetail transactionId={1} />
    </ContainerPage>
  );
};

export default Teste;
