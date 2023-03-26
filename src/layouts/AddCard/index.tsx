import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CreditCard } from 'components';
import { InputText } from 'components/input/input-text/inputText';
import { schema } from 'pages/cards/schemas';

import * as s from './AddCard.styles';

const AddCard = ({ handleCreateCard, setAddNewCard, isLoading }: any) => {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      cardNumber: '',
      cardName: '',
      expirationDate: '',
      cardCvv: '',
    },
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const functionToSubmitForm: SubmitHandler<any> = (dataForm, event) => {
    handleCreateCard({
      cod: Number(dataForm.cardCvv),
      expiration_date: dataForm.expirationDate,
      first_last_name: dataForm.cardName,
      number_id: Number(dataForm.cardNumber),
    });
    setAddNewCard(false);
  };

  return (
    <>
      <s.ContainerBackGround>
        <CreditCard
          cardNumber={Number(watch('cardNumber'))}
          cardName={watch('cardName')}
          cardExpiration={watch('expirationDate')}
          cvv={Number(watch('cardCvv'))}
        />
        <s.Form onSubmit={handleSubmit(functionToSubmitForm)}>
          <s.InputContainer>
            <InputText
              name="cardNumber"
              label="Número do cartão"
              type="text"
              placeholder="Número do cartão*"
              control={control}
              maxLength={16}
              max={16}
            />
            <InputText
              name="cardName"
              label="Nome do títular"
              placeholder="Nome e sobrenome*"
              control={control}
            />
          </s.InputContainer>
          <s.InputContainer>
            <InputText
              name="expirationDate"
              type="text"
              label="Data de validade"
              placeholder="Data de validade*"
              control={control}
            />
            <InputText
              name="cardCvv"
              label="Código de segurança"
              type="text"
              placeholder="Código de segurança*"
              control={control}
            />
          </s.InputContainer>
          <Button>Continuar</Button>
        </s.Form>
      </s.ContainerBackGround>
    </>
  );
};

export default AddCard;
