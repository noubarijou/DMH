import * as s from './FlagContainer.styles';

type FlagProps = {
  cardNumber?: number;
};

const FlagContainer = ({ cardNumber }: FlagProps) => {
  const number = cardNumber?.toString()?.charAt(0);

  const verifyFlag = () => {
    switch (number) {
      case '2':
        return (
          <>
            <s.FlagContainer>
              <img
                src="./assets/images/card-flags/Mastercard.png"
                alt="Mastercard flag"
              />
            </s.FlagContainer>
          </>
        );
        break;
      case '5':
        return (
          <>
            <s.FlagContainer>
              <img
                src="./assets/images/card-flags/Mastercard.png"
                alt="Mastercard flag"
              />
            </s.FlagContainer>
          </>
        );
        break;
      case '4':
        return (
          <>
            <s.FlagContainer>
              <img
                src="./assets/images/card-flags/visa.png"
                alt="Visa card flag"
              />
            </s.FlagContainer>
          </>
        );
        break;
      case '6':
        return (
          <>
            <s.FlagContainer>
              <img
                src="./assets/images/card-flags/elo.png"
                alt="Elo card flag"
              />
            </s.FlagContainer>
          </>
        );
        break;
      case '3':
        return (
          <>
            <s.FlagContainer>
              <img
                src="./assets/images/card-flags/american-express.png"
                alt="American Express card flag"
              />
            </s.FlagContainer>
          </>
        );
        break;

      default:
        return (
          <>
            <s.FlagContainer className="disabled"></s.FlagContainer>
          </>
        );
        break;
    }
  };

  return <>{verifyFlag()}</>;
};

export { FlagContainer };
