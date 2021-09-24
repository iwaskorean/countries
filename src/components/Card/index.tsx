import { Container, Flag, Group } from './styles/Card';

export default function Card({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

Card.Item = function CardItem({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
};

Card.Flag = function CardFlag({ children }: { children?: any }) {
  return <Flag>{children}</Flag>;
};

Card.Contents = function CardContents({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Group>{children}</Group>;
};
