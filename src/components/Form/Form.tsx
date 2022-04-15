import { FormHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface FormProps
  extends PropsWithChildren<FormHTMLAttributes<HTMLFormElement>> {}

export default function Form({ children, ...props }: FormProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.form``;
