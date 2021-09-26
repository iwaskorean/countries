import { Container, Flag, FlagImage, Group } from './styles/Card';

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

Card.Flag = function CardFlag({ src, alt }: { src: string; alt?: string }) {
  return (
    <Flag>
      <FlagImage src={src} alt={alt} />
    </Flag>
  );
};

Card.Contents = function CardContents({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Group>{children}</Group>;
};
