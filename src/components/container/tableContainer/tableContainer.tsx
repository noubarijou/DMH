import React from 'react';

import * as s from './tableContainer.styles';

type TableContainerProps = {
  title?: string;
  children?: React.ReactNode;
};

const TableContainer = ({ title, children }: TableContainerProps) => {
  return (
    <>
      <s.TableContainer>
        <s.TableTitle>{title}</s.TableTitle>
        {children}
      </s.TableContainer>
    </>
  );
};

export { TableContainer };
