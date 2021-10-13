import { Container, Group, Content } from './styles/Button';

export default function Button({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

Button.Group = function ButtonGroup({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Group>{children}</Group>;
};

Button.Content = function ButtonContent({ children }: { children: string }) {
  return <Content>{children}</Content>;
};
