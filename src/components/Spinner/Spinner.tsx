import { HTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components';

export default function Spinner({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return <StyledSpinner {...props} />;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
  width: 3rem;
  height:3rem;
  border-color: gray;
  border-right-color: transparent;
  border-style: solid;
  border-radius: 50%;
  border-width: 0.5rem;
  background: transparent;
  margin: 3rem auto;
  
  animation: ${spin} 1.7s linear infinite;
}`;
