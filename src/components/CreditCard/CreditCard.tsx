import * as s from './CreditCard.styles';

import { FlagContainer } from './FlagContainer/FlagContainer';

export type CreditCardProps = {
  cardNumber?: number;
  cardName?: string;
  cardExpiration?: string;
  cvv?: number;
};

const CreditCard = ({
  cardNumber,
  cardName,
  cardExpiration,
}: CreditCardProps) => {
  return (
    <>
      <s.CreditCardContainer variant={!!cardNumber ? 'valid' : 'disabled'}>
        <FlagContainer cardNumber={cardNumber} />
        <s.NumberContainer>
          {!!cardNumber ? cardNumber : '**** **** **** ****'}
        </s.NumberContainer>
        <s.InfoContainer>
          <p>{!!cardName ? cardName : 'Nome do titular'}</p>
          <span>{!!cardExpiration ? cardExpiration : 'MM/YY'}</span>
        </s.InfoContainer>
      </s.CreditCardContainer>
    </>
  );
};

export { CreditCard };
