import styled from 'styled-components';

export const List = styled.div`
  display: none;
  width: 15rem;
  position: absolute;
  z-index: 1000;
  box-shadow: var(--box-shadow);

  // ### Theme
  background-color: var(--elements);
`;

export const Container = styled.div`
  width: 15rem;
  font-weight: $font-bold;
  color: var(--text);
  background-color: var(--elements);
  box-shadow: var(--box-shadow);

  &:hover {
    ${List} {
      display: block;
    }
    div {
      img {
        transform: rotate(0deg);
      }
    }
  }
`;

export const Frame = styled.div``;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--elements);
  font-weight: var(--font-bold);
  color: var(--text);
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    opacity: 0.7;
  }
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
