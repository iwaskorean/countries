import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  theme: string;
}

export default function Icon({ theme, ...props }: IconProps) {
  return (
    <StyledIcon
      {...props}
      src={`assets/icon-${theme === 'light' ? 'moon' : 'sun'}.png`}
      alt='theme-icon'
    />
  );
}

const StyledIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: rotate(25deg);
  }
`;
