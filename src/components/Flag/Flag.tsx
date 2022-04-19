import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export default function Flag({
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return <Wrapper {...props} />;
}

const Wrapper = styled.img`
  width: 50%;
  min-width: 25rem;
`;
