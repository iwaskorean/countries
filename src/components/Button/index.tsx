import { Container, Group, Content } from './styles/Button';

export default function Button({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
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

Button.Content = function ButtonContent({
  children,
  disabled,
  primary,
}: {
  children: string;
  primary?: string;
  disabled?: boolean;
}) {
  return disabled ? (
    <Content disabled>{children}</Content>
  ) : (
    <Content primary={primary}>{children}</Content>
  );
};
