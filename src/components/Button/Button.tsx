import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function Button({ children, ...props }: ButtonProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  width: max-content;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border: none;
  background-color: var(--elements);
  box-shadow: var(--box-shadow);
  border-radius: 0.6rem;
  outline: 0;
  cursor: pointer;
  color: var(--text);
  font-weight: 600;
  letter-spacing: 0.05rem;
  &:hover {
    opacity: 0.8;
  }
`;
