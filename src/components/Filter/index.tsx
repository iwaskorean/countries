import { Container, Frame, Heading, Text, Icon } from './styles/Filter';

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
  return <Text>{children}</Text>;
};

Filter.Region = function FIlterRegion({ children }: { children: string }) {
  return <Text>{children}</Text>;
};

Filter.Icon = function FilterIcon({ src }: { src: string }) {
  return <Icon src={src} />;
};
