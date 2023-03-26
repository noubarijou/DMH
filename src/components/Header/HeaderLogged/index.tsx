import { useEffect, useState } from 'react';

import { SideMenu } from 'components/sideMenu/SideMenu';
import { useWindow, WindowSize } from 'hooks/useWindow';
import { parseCookies } from 'nookies';

import * as s from './headerLogged.styles';
import { ProfileLink as Link } from 'components/Header/HeaderLogged/headerLogged.styles';
import { HambugerMenu } from 'components/sideMenu/SideMenu.styles';

const HeaderLogged = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState(false);
  const size: WindowSize = useWindow();
  const { userData: userDataFromCookies, '@digitalmoney:token': token } =
    parseCookies();

  const userData = userDataFromCookies && JSON.parse(userDataFromCookies);
  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {!loading && (
        <>
          <s.Header>
            <div className="headerLogo">
              <Link href="/">
                <img
                  src="../../assets/images/LOGO-DMH.png"
                  alt="green logo digital money house"
                />
              </Link>
            </div>
            {token && (
              <>
                <s.HeaderInfo>
                  <p className="alias">
                    <Link href="/profile">
                      {userData?.firstname?.split('')[0]}
                      {userData?.lastname?.split('')[0]}
                    </Link>
                  </p>
                  {size.width > 833 ? (
                    <>
                      <s.InfoText className="headerText">
                        Olá, {userData?.firstname}&nbsp;{userData?.lastname}
                      </s.InfoText>
                    </>
                  ) : (
                    <>
                      <HambugerMenu className="openBtn" onClick={openMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </HambugerMenu>
                    </>
                  )}
                </s.HeaderInfo>
                <SideMenu
                  closeMenu={closeMenu}
                  showMenu={showMenu}
                  name={userData?.firstname}
                  lastname={userData?.lastname}
                />
              </>
            )}
          </s.Header>
        </>
      )}
    </>
  );
};

export { HeaderLogged };
