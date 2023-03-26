import Yup from 'settings/yup';

export const schemaLogin = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string(),
});
