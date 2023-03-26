import React from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { MdOutlineContentCopy } from 'react-icons/md';

import { useTheme } from 'styled-components';

import { ContainerPage } from 'components';
import { parseCookies } from 'nookies';

import * as s from './transfer.styles';

const Transfer = () => {
  const { userData: userDataFromCookies, '@digitalmoney:token': token } =
    parseCookies();

  const userData = userDataFromCookies && JSON.parse(userDataFromCookies);

  const {
    colors: { primary },
  } = useTheme();

  const copyUser = () => {
    navigator.clipboard.writeText(`${userData.firstname}.${userData.lastname}`);
    toast.success('Copiado para área de transferência', {
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
  };

  const copyCode = () => {
    navigator.clipboard.writeText('0000002100075320000000');
    toast.success('Copiado para área de transferência', {
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
  };

  return (
    <>
      {userData?.firstname && userData?.lastname && (
        <s.mainContainer>
          <Toaster />
          <p className="main-text">
            Copie seu CVU ou nome de usuário para começar a transferir dinheiro
            de outra conta
          </p>
          <s.codeContainer>
            <div>
              <h1>CVU</h1>
              <p>0000002100075320000000</p>
            </div>
            <MdOutlineContentCopy
              onClick={() => copyCode()}
              style={{ cursor: 'pointer' }}
              size={35}
              color={primary}
            />
          </s.codeContainer>
          <s.infoContainer>
            <div>
              <h1>Nome de usuário</h1>
              <p>
                {userData?.firstname}.{userData?.lastname}
              </p>
            </div>
            <MdOutlineContentCopy
              onClick={() => copyUser()}
              style={{ cursor: 'pointer' }}
              size={35}
              color={primary}
            />
          </s.infoContainer>
        </s.mainContainer>
      )}
    </>
  );
};

export default Transfer;
