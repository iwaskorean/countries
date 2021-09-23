import { Container, Frame, Title } from './styles/Header';

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

Header.Title = function HeaderTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
};
