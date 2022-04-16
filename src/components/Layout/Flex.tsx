import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Flex({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: block;
  }
`;
