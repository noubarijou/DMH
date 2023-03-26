import { useRouter } from 'next/router';

import { NavLink as Link } from './NavLink.styles';

type NavLinkProps = {
  route: string;
  children: React.ReactNode;
};

const NavLink = ({ route, children }: NavLinkProps) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Link href={route} className={currentRoute === route ? 'active' : ''}>
      {children}
    </Link>
  );
};

export { NavLink };
