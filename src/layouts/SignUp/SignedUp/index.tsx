import Link from 'next/link';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import { useTheme } from 'styled-components';

import { Button } from 'components';

import * as s from './signedup.styles';

export function SignedUp() {
  const {
    colors: { primary },
  } = useTheme();

  return (
    <s.Container>
      <s.Title>Cadastro realizado</s.Title>
      <IoIosCheckmarkCircleOutline size={90} color={primary} />
      <s.Message>
        Enviamos uma mensagem de confirmação para seu e-mail, por favor acesse e
        siga as instruções para iniciar a sessão.
      </s.Message>
      <Link href="/login">
        <Button type="button">Continuar</Button>
      </Link>
    </s.Container>
  );
}
