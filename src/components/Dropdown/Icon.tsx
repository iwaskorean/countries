import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

export default function Icon({
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return <StyledIcon {...props} />;
}

const StyledIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 1rem;
  transform: rotate(180deg);
  transition: transform 0.1s;
`;
