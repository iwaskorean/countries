import { Container, Form, Icon, Input } from './styles/SearchBar';

export default function SearchBar({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

SearchBar.Form = function SearchBarForm({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Form>{children}</Form>;
};

SearchBar.Icon = function SearchBarIcon() {
  return <Icon src="" />;
};

SearchBar.Input = function SearchBarInput({ type }: { type: string }) {
  return <Input type={type} />;
};
