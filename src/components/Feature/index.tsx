import {
  Container,
  Group,
  Title,
  Name,
  Text,
  PlainText,
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

Feature.Title = function FeatureTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
};

Feature.Name = function FeatureName({ children }: { children: string }) {
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
