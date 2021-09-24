import { Wrapper } from './styles/List';

export default function List({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Wrapper>{children}</Wrapper>;
}
