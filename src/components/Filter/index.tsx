import { Container, Frame, Heading, Item, Icon, List } from './styles/Filter';

export default function Filter({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

Filter.Frame = function FilterFrame({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Frame>{children}</Frame>;
};

Filter.Heading = function FilterHeading({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Heading>{children}</Heading>;
};

Filter.ItemList = function FilterItemList({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <List>{children}</List>;
};

Filter.Region = function FIlterRegion({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) {
  return <Item onClick={onClick}>{children}</Item>;
};

Filter.Icon = function FilterIcon({ src }: { src: string }) {
  return <Icon src={src} />;
};
