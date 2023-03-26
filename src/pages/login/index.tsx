import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components';
import { InputText } from 'components/input/input-text/inputText';
import { useLoginUser } from 'hooks/useUser/useLoginUser';
import { LoginPayload } from 'hooks/useUser/useLoginUser/types';
import nookies from 'nookies';
import { useUserStore } from 'store/user';

import * as s from './login.styles';

import { schemaLogin } from './schemas';

const messageErrors = {
  'invalid credentials': 'Senha inválida',
  'user not found': 'Usuário não encontrado',
};

type ErrorKey = keyof typeof messageErrors;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { '@digitalmoney:token': token } = nookies.get(ctx);

  if (token) {
    return {
      redirect: {
        destination: '/wallet',
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}

const Login = () => {
  const router = useRouter();
  const [stepEmailCompleted, setStepEmailCompleted] = useState(false);
  const { mutate: loginUser, isLoading } = useLoginUser();
  const [messageError, setMessageError] = useState('');
  const setUser = useUserStore((state) => state.setUser);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all',
  });

  const handleLogin: SubmitHandler<LoginPayload> = (dataForm) => {
    if (!errors.email && !stepEmailCompleted) {
      setStepEmailCompleted(true);
      return;
    }

    if (!dataForm.password) {
      return setError('password', {
        type: 'required',
        message: 'Campo obrigatório',
      });
    }
    // token é recebido, falta saber o que faremos com ele
    loginUser(dataForm, {
      onSuccess: (res) => {
        if (res) {
          setUser(res);
          router.push('/wallet');
          toast.success('Logado com sucesso', {
            style: {
              fontWeight: '700',
              background: '#C1FD35',
              border: '1px solid #C1FD35',
              color: 'black',
            },
            iconTheme: {
              primary: 'black',
              secondary: '#C1FD35',
            },
          });
        }
      },
      onError: (err) => {
        let mesErr = err as ErrorKey;
        toast.error(messageErrors[mesErr], {
          style: {
            fontWeight: '700',
            background: '#201F22',
            border: '1px solid red',
            color: 'white',
          },
          iconTheme: {
            primary: 'red',
            secondary: '#201F22',
          },
        });
      },
    });
  };

  const resetMessageError = () => {
    if (messageError) setMessageError('');
  };

  return (
    <>
      <Head>
        <title>DMH | Login</title>
      </Head>
      <Toaster />
      <s.ContainerPage>
        <s.ContainerLogin onSubmit={handleSubmit(handleLogin)}>
          <s.Title key="title">
            {!stepEmailCompleted ? 'Olá Digite seu e-mail' : 'Digite sua senha'}
          </s.Title>
          {!stepEmailCompleted ? (
            <InputText
              key="email"
              type="email"
              name="email"
              control={control}
              placeholder="email"
              variant={'outOfFocus'}
            />
          ) : (
            <InputText
              onKeyDown={resetMessageError}
              key="password"
              type="password"
              name="password"
              control={control}
              placeholder="senha"
              variant={'outOfFocus'}
            />
          )}
          <Button type="submit" variant={!isLoading ? 'primary' : 'disabled'}>
            Confirmar
          </Button>
          {!stepEmailCompleted && (
            <Link href="/signup">
              <Button variant="tertiary">Criar conta</Button>
            </Link>
          )}
        </s.ContainerLogin>
      </s.ContainerPage>
    </>
  );
};

export default Login;
