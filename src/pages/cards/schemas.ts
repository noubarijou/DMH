import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  cardNumber: Yup.string().required().max(16),
  cardName: Yup.string().required(),
  expirationDate: Yup.string().required().max(7),
  cardCvv: Yup.string().required().max(3),
});
