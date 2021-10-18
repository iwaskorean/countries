import {
  Container,
  Group,
  Title,
  Name,
  Text,
  PlainText,
  Heading,
} from './styles/Feature';

export default function Feature({
  children,
}: {
  children: JSX.Element | JSX.Element[];
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
  children?: string | string[];
}) {
  return <PlainText>{children}</PlainText>;
};
