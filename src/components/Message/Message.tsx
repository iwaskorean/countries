import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

const MESSAGES = {
  TEXT: 'text',
  ERROR: 'error',
};

interface MessageProps
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  type?: typeof MESSAGES[keyof typeof MESSAGES];
}

export default function Message({
  type = 'text',
  children,
  ...props
}: MessageProps) {
  return (
    <Wrapper type={type} {...props}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.h2<{ type: typeof MESSAGES[keyof typeof MESSAGES] }>`
  width: 100%;
  text-align: center;
  color: ${({ type }) => (type === MESSAGES.TEXT ? 'gray' : 'red')};
`;
