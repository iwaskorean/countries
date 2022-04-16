import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {}

export default function Icon({ ...props }: IconProps) {
  return (
    <StyledIcon src={'./assets/icon-search.png'} alt='search icon' {...props} />
  );
}

const StyledIcon = styled.img`
  width: 3rem;
  padding: 0 1rem;
  position: absolute;
  top: 1.2rem;
`;
