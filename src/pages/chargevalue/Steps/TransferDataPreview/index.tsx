import { FaEdit } from 'react-icons/fa';

import { Button } from 'components';
import { useGetAccount } from 'hooks/useCards/useGetAccount';
import { useCreateDeposit } from 'hooks/useTransferences/useCreateDeposit';
import { useAccountStore } from 'store/account';
import { useChargeValueStore } from 'store/chargevalue';
import { useStepsStore } from 'store/steps';
import { useUserStore } from 'store/user';

import * as s from '../../chargevalue.styles';
import * as e from './transferdatapreview.styles';

export function TransferDataPreview() {
  const user = useUserStore((state) => state.user);
  const previousStep = useStepsStore((state) => state.setPreviousStep);
  const nextStep = useStepsStore((state) => state.setNextStep);
  const chargeValue = useChargeValueStore((state) => state.value);
  const { mutate: createDeposit } = useCreateDeposit();
  const { data: account, isLoading } = useGetAccount(user.id);
  const account_info = useAccountStore((state) => state.account_info);
  const setTransferenceResult = useChargeValueStore(
    (state) => state.setTransferenceResult,
  );

  function handleCreateTransaction() {
    const today = new Date();

    createDeposit(
      {
        account_id: Number(account_info.id),
        amount: chargeValue,
        dated: today.toISOString().replace(/\.\d{3}Z$/, 'Z'),
      },
      {
        onSuccess: (data) => {
          if (data) {
            setTransferenceResult(data);
            nextStep();
          }
        },
        onError: (data) => {
          console.log(data);
        },
      },
    );
  }

  return (
    <>
      <s.DepositValue.Container>
        <s.DepositValue.Title>Revise se está tudo correto</s.DepositValue.Title>
        <e.TransferDataPreview.Container>
          <e.TransferDataPreview.Label>
            Vai transferir
          </e.TransferDataPreview.Label>
          <e.BoldContent>${chargeValue}</e.BoldContent>
          <e.TransferDataPreview.IconContainer>
            <FaEdit size={30} onClick={previousStep} />
          </e.TransferDataPreview.IconContainer>
        </e.TransferDataPreview.Container>
        <e.TransferDataPreview.Container>
          <e.TransferDataPreview.Label>Para</e.TransferDataPreview.Label>
          <e.BoldContent>Conta própria</e.BoldContent>
        </e.TransferDataPreview.Container>
        <e.TransferDataPreview.Container>
          <e.TransferDataPreview.Label>Brubank</e.TransferDataPreview.Label>
          <e.BoldContent>
            {isLoading ? 'Carregando...' : `CVU ${account?.cvu}`}
          </e.BoldContent>
        </e.TransferDataPreview.Container>
        <Button type="button" onClick={handleCreateTransaction}>
          Transferir
        </Button>
      </s.DepositValue.Container>
    </>
  );
}
