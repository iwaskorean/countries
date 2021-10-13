import { Container, Group } from './styles/Frame';

export default function Frame({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

Frame.Group = function FrameGroup({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Group>{children}</Group>;
};
