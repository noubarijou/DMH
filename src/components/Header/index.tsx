import Link from 'next/link';
import { useRouter } from 'next/router';

import * as s from './header.styles';

import { HeaderLogged } from './HeaderLogged';

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      {currentRoute === '/' || currentRoute === '/home' ? (
        <s.ContainerPage>
          <div className="dmh-container">
            <Link href="/">
              <img src="../../assets/images/Vector.png" />
              <img src="../../assets/images/Vector2.png" />
            </Link>
          </div>
          <div className="buttons-container">
            <Link href="/login">
              <s.ButtonLogin>Entrar</s.ButtonLogin>
            </Link>
            <Link href="signup">
              <s.ButtonCreateAccount>Criar conta</s.ButtonCreateAccount>
            </Link>
          </div>
        </s.ContainerPage>
      ) : (
        <HeaderLogged />
      )}
    </>
  );
};

export { Header };
