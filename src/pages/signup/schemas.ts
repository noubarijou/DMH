import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  dni: Yup.string().min(11).max(11).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(6)
    .max(20)
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
      'Senha deve seguir o padrão determinado acima',
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined])
    .required(),
  phone: Yup.string().min(11).max(11).required(),
});
