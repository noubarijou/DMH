import { AiOutlineCheckCircle } from 'react-icons/ai';

import { Button } from 'components';
import { useAccountStore } from 'store/account';
import { useChargeValueStore } from 'store/chargevalue';

import * as s from '../../chargevalue.styles';
import * as e from './successfullydeposited.styles';

export function SuccessfullyDeposited() {
  const account_info = useAccountStore((state) => state.account_info);
  const transferenceResult = useChargeValueStore(
    (state) => state.transferenceResult,
  );

  function refreshPage() {
    location.reload();
  }
  return (
    <>
      <e.SuccessfullyDeposited.Container>
        <e.SuccessfullyDeposited.IconContainer>
          <AiOutlineCheckCircle size="70" />
        </e.SuccessfullyDeposited.IconContainer>
        <e.SuccessfullyDeposited.Heading_2>
          Já depositamos o dinheiro na sua conta
        </e.SuccessfullyDeposited.Heading_2>
      </e.SuccessfullyDeposited.Container>
      <s.DepositValue.Container>
        <e.DateContainer>
          Criado em{' '}
          {new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'long',
            timeStyle: 'short',
          }).format(new Date(transferenceResult.dated))}
        </e.DateContainer>
        <e.Amount>${transferenceResult.amount}</e.Amount>
        <e.Span>Para</e.Span>
        <e.Account>Conta própria</e.Account>
        <e.Span>Brubank</e.Span>
        <e.Span>{`CVU ${account_info.cvu}`}</e.Span>
      </s.DepositValue.Container>
      <e.ButtonContainer>
        <Button variant="tertiary" onClick={refreshPage}>
          Voltar ao início
        </Button>
        <Button variant="primary">Baixar comprovante</Button>
      </e.ButtonContainer>
    </>
  );
}
