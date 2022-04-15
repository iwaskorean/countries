import { LabelHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface LabelProps
  extends PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> {}

export default function Label({ children, ...props }: LabelProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--elements);
  font-weight: var(--font-bold);
  color: var(--text);
  transition: all 0.1s;
  cursor: pointer;
`;
