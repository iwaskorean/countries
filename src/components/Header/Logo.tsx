import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

interface LogoProps {
  href: string;
}

export default function Logo({ href, ...props }: LogoProps) {
  return (
    <Wrapper to={href} {...props}>
      Where in the world?
    </Wrapper>
  );
}

const Wrapper = styled(ReactRouterLink)`
  font-size: 1.5rem;
  font-weight: var(--font-extra-bold);
  margin: 1rem 0;
  text-decoration: none;
  color: var(--text);
`;
