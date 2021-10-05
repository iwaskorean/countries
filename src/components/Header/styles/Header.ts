import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  transition: all 0.5s;

  background-color: var(--background);
  box-shadow: var(--box-shadow);
`;

export const Frame = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(ReactRouterLink)`
  font-size: 1.5rem;
  font-weight: var(--font-extra-bold);
  margin: 1rem 0;
  text-decoration: none;
  color: var(--text);
`;
