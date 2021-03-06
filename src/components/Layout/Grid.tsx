import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Grid({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 1681px) {
    gap: 6rem 3rem;
  }
`;
