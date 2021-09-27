import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  transition: all 0.5s;

  // ### Theme
  background-color: var(--light-elements);
  box-shadow: var(--light-box-shadow);
`;

export const Frame = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// export const Title = styled.h2`
//   // ### Theme
//   font-size: 1.5rem;
//   font-weight: var(--font-extra-bold);
//   margin: 1rem 0;
// `;

export const Logo = styled(ReactRouterLink)`
  // ### Theme
  font-size: 1.5rem;
  font-weight: var(--font-extra-bold);
  margin: 1rem 0;
  text-decoration: none;
  color: var(--light-text);
`;
