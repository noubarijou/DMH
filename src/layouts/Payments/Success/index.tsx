import Link from 'next/link';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { useTheme } from 'styled-components';

import { Button } from 'components';

import * as s from './success.styles';

const PaymentSuccessful = () => {
  const {
    colors: { black },
  } = useTheme();

  return (
    <>
      <s.Container>
        <IoIosCheckmarkCircleOutline size={40} color={black} />
        <s.Title>Pagamento realizado com sucesso</s.Title>
      </s.Container>
      <s.BillInfoCard>
        <s.WhiteText>17 de agosto de 2022 às 16:34h</s.WhiteText>
        <s.GreenMessage>$1.153,75</s.GreenMessage>
        <s.WhiteText>Para</s.WhiteText>
        <s.GreenMessage>TV a cabo</s.GreenMessage>
        <s.WhiteText>Cartão</s.WhiteText>
        <s.WhiteText>Visa ************4067</s.WhiteText>
      </s.BillInfoCard>
      <Link href="/">
        <Button type="button">Baixar Comprovante</Button>
      </Link>
      <Link href="/">
        <Button variant="tertiary" type="button">
          Voltar ao início
        </Button>
      </Link>
    </>
  );
};

export default PaymentSuccessful;
