import { Container, Frame, Logo } from './styles/Header';

export default function Header({ children }: { children: any }) {
  return <Container>{children}</Container>;
}

Header.Frame = function HeaderFrame({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Frame>{children}</Frame>;
};

Header.Logo = function HeaderLogo({
  children,
  to,
}: {
  children: string;
  to: string;
}) {
  return <Logo to={to}>{children}</Logo>;
};
