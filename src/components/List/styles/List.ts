import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 3rem auto;
  margin-top: 0rem;
  padding: 0 4rem;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
