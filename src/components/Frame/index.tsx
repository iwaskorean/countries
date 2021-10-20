import { Container, Group, GridContainer } from './styles/Frame';

export default function Frame({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

Frame.Grid = function FrameGrid({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return <GridContainer>{children}</GridContainer>;
};

Frame.Group = function FrameGroup({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Group>{children}</Group>;
};
