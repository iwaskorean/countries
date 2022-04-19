import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Text({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.p`
  color: var(--text);
  & + & {
    margin-top: 0.2rem;
  }
`;
