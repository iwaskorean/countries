import styled from 'styled-components';

export const Container = styled.div`
  width: 15rem;
  font-weight: $font-bold;
  color: var(--text);
  background-color: var(--light-elements);
  box-shadow: var(--light-box-shadow);
`;

export const Frame = styled.div``;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-elements);
  font-weight: var(--font-bold);
  color: var(--light-text);
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    opacity: 0.7;
    img {
      transform: rotate(0deg);
    }
  }
`;

export const List = styled.div`
  width: 15rem;
  margin-top: 1.5rem;

  // ### Theme
  background-color: var(--light-elements);
`;

// ### Have to Fix
export const Item = styled.div`
  height: 1.3rem;
  margin: 1rem 1.3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--elements);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.img`
  width: 1rem;
  margin: 1rem;
  transform: rotate(180deg);
  transition: transform 0.1s;
`;
