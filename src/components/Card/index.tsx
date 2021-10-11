import { Container, Flag, FlagImage, Group } from './styles/Card';
import { Link } from 'react-router-dom';

export default function Card({
  children,
  country,
}: {
  children: JSX.Element | JSX.Element[];
  // Have to fix type annotation for router props
  country: any;
}) {
  return (
    <>
      <Link
        to={`/detail?code=${country.altSpellings[0]}`}
        style={{ textDecoration: 'none' }}
      >
        <Container>{children}</Container>
      </Link>
    </>
  );
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
