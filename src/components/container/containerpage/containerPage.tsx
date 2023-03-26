import React from 'react';

import * as s from './containerPage.style';

type ContainerPagePropos = {
  children?: React.ReactNode;
};

const ContainerPage = ({ children }: ContainerPagePropos) => {
  return <s.ContainerPage>{children}</s.ContainerPage>;
};

export { ContainerPage };
