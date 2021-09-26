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
  onSubmit,
}: {
  children: JSX.Element | JSX.Element[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

SearchBar.Icon = function SearchBarIcon({ src }: { src: string }) {
  return <Icon src={src} />;
};

SearchBar.Input = function SearchBarInput({
  value,
  onChange,
  type,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'text';
}) {
  return <Input value={value} onChange={onChange} type={type} />;
};
