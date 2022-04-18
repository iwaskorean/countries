import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Title({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.h1``;
