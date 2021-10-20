import styled from 'styled-components';

export const Frame = styled.div`
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    min-width: 300px;
    justify-self: center;
  }

  &:last-child {
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Container = styled.div``;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1.3fr 1fr;
  margin: 1rem 1rem 3rem 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
