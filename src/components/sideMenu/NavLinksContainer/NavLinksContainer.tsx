import { useRouter } from 'next/router';

import { useLogoutUser } from 'hooks/useUser/useLoginUser';

import { LinksContainer } from './NavLinksContainer.styles';

import { NavLink } from '../NavLink/NavLink';

const NavLinksContainer = () => {
  const router = useRouter();
  const { mutate } = useLogoutUser();

  const logout = async () => {
    mutate(
      {},
      {
        onSuccess: () => {
          router.push('/');
        },
      },
    );
  };

  return (
    <>
      <LinksContainer>
        <li>
          <NavLink route="/wallet">Início</NavLink>
        </li>
        <li>
          <NavLink route="/fullactivity">Atividade</NavLink>
        </li>
        <li>
          <NavLink route="/profile">Seu perfil</NavLink>
        </li>
        <li>
          <NavLink route="/chargevalue">Carregar valor</NavLink>
        </li>
        <li>
          <NavLink route="/payments">Pagar serviços</NavLink>
        </li>
        <li>
          <NavLink route="/cards">Cartões</NavLink>
        </li>
        <button onClick={logout}>Encerrar sessão</button>
      </LinksContainer>
    </>
  );
};

export { NavLinksContainer };
