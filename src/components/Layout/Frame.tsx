import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Frame({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <StyledFrame {...props}>{children}</StyledFrame>;
}

const StyledFrame = styled.div``;
