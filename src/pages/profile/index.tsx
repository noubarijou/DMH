import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdContentCopy } from 'react-icons/md';

import { Button, ContainerPage, PageTitle, TableContainer } from 'components';
import { InputEdit } from 'components/InputEdit';
import { useGetAccount } from 'hooks/useAccount/useGetAcctData';
import { useGetUserData } from 'hooks/useUser/useGetUserData';
import { useUpdateUser } from 'hooks/useUser/useUpdateUser';
import nookies from 'nookies';
import { useEditStore } from 'store/editing';
import { useUserStore } from 'store/user';

import * as s from './profile.styles';

export type FormValues = {
  email: string;
  name: string;
  dni: number;
  phone: string;
  password: string;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { '@digitalmoney:token': token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}

const Profile = () => {
  const [isRetrievingData, setIsRetrievingData] = useState(true);
  const user = useUserStore((state) => state.user);
  const { data: userInfo } = useGetUserData(user.id);
  const { data: accountInfo } = useGetAccount(user.id);
  const { mutate: updateUser } = useUpdateUser();
  const setField = useEditStore((state) => state.setField);
  const setUser = useUserStore((state) => state.setUser);

  const userName = user.firstname + ' ' + user.lastname;

  const retrievingData = (userInfo: any) => {
    return isRetrievingData ? 'Carregando...' : userInfo;
  };
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: user.email,
      name: userName,
      dni: user.dni,
      phone: user.phone,
      password: '',
    },
  });

  useEffect(() => {
    if (userInfo) {
      setIsRetrievingData(false);
    }
  }, [userInfo]);

  const copyToClipboard = async (data: string) => {
    try {
      navigator.clipboard.writeText(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err);
      }
    }
  };

  const handleUpdateUser: SubmitHandler<FormValues> = (data) => {
    const firstName = data.name.split(' ')[0];
    const lastName = data.name.split(' ')[1];
    const { ...newData } = data;
    updateUser(
      { ...newData, firstname: firstName, lastname: lastName },
      {
        onSuccess: (data) => {
          setField('');
          setUser(data);
        },
        onError: () => {
          console.log('deu errado');
        },
      },
    );
  };

  return (
    <>
      <ContainerPage>
        <PageTitle>Perfil</PageTitle>
        <TableContainer title="Seus dados">
          <s.PersonalInfo onSubmit={handleSubmit(handleUpdateUser)}>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Email </s.InfoDescription>
              <InputEdit
                type="email"
                register={register}
                name="email"
                info={retrievingData(userInfo?.email)}
              />
            </s.InfoDescriptionContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Nome</s.InfoDescription>
              <s.InfoContent>
                <InputEdit
                  type="text"
                  register={register}
                  name="name"
                  info={retrievingData(userName)}
                />
              </s.InfoContent>
            </s.InfoDescriptionContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>CPF </s.InfoDescription>
              <s.InfoContent>
                <InputEdit
                  type="text"
                  register={register}
                  name="dni"
                  info={retrievingData(userInfo?.dni)}
                />
              </s.InfoContent>
            </s.InfoDescriptionContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Telefone </s.InfoDescription>
              <s.InfoContent>
                <InputEdit
                  type="text"
                  register={register}
                  name="phone"
                  info={retrievingData(userInfo?.phone)}
                />
              </s.InfoContent>
            </s.InfoDescriptionContainer>
            <s.InfoDescriptionContainer>
              <s.InfoDescription>Senha </s.InfoDescription>
              <s.InfoContent>
                <InputEdit
                  type="password"
                  register={register}
                  name="password"
                  info={retrievingData('********')}
                />
              </s.InfoContent>
            </s.InfoDescriptionContainer>
          </s.PersonalInfo>
        </TableContainer>
        <s.ButtonContainer>
          <Link href="/">
            <Button variant="primary" size="wallet">
              Administrar meios de pagamento
              <AiOutlineArrowRight />
            </Button>
          </Link>
        </s.ButtonContainer>
        <s.CVUAliasCard>
          <s.CVUAliasText>
            Copiar seu CVU ou alias para adicionar ou transferir valor a partir
            de outra conta
          </s.CVUAliasText>
          <s.CVUAliasTop>
            CVU
            <MdContentCopy
              onClick={() => copyToClipboard(accountInfo?.cvu || '')}
            />
          </s.CVUAliasTop>
          <s.CVUAliasText>{retrievingData(accountInfo?.cvu)}</s.CVUAliasText>
          <s.CVUAliasTop>
            Alias
            <MdContentCopy
              onClick={() => copyToClipboard(accountInfo?.alias || '')}
            />
          </s.CVUAliasTop>
          <s.CVUAliasText>{retrievingData(accountInfo?.alias)}</s.CVUAliasText>
        </s.CVUAliasCard>
      </ContainerPage>
    </>
  );
};

export default Profile;
