import styled from 'styled-components';

export const Container = styled.div`
  width: 15rem;
  font-weight: $font-bold;
  color: var(--text);
`;

export const Frame = styled.div``;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background-color: var(--elements);
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    opacity: 0.7;
  }
`;

export const List = styled.div`
  width: 15rem;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;

  // ### Theme
  background-color: var(--elements);
  position: absolute;
  transform: scaleY(0);
  transition: transform 0.1s;
  z-index: 10;
`;

// ### Have to Fix
export const Item = styled.div`
  width: 15rem;
  height: 3rem;
  margin: 0.3rem 0;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.img`
  width: 1rem;
  transform: rotate(180deg);
  transition: transform 0.3s;
`;
