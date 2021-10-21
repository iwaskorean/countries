import {
  Container,
  Group,
  Title,
  Name,
  Text,
  PlainText,
  Heading,
  Image,
} from './styles/Feature';

export default function Feature({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

Feature.Group = function FeatureGroup({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return <Group>{children}</Group>;
};

Feature.Heading = function FeatureHeading({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) {
  return <Heading onClick={onClick}>{children}</Heading>;
};

Feature.Title = function FeatureTitle({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) {
  return <Title onClick={onClick}>{children}</Title>;
};

Feature.Name = function FeatureName({
  children,
}: {
  children: string | number;
}) {
  return <Name>{children}</Name>;
};

Feature.Property = function FeatureProperty({
  children,
}: {
  children?: string;
}) {
  return <Text>{children}</Text>;
};

Feature.Value = function FeatureValue({
  children,
}: {
  // Have to fix any type
  children?: string | string[] | any;
}) {
  return <PlainText>{children}</PlainText>;
};

Feature.Image = function FeatureImage({
  src,
  alt,
}: {
  src?: string;
  alt?: string;
}) {
  return <Image src={src} alt={alt} />;
};
