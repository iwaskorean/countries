import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 16rem;
  height: 21rem;
  background-color: var(--elements);
  margin: 2.5rem 2rem;
  padding-bottom: 2rem;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Group = styled.div``;

export const Flag = styled.div`
  position: relative;
  width: 100%;
  height: 8.5rem;
`;

export const FlagImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;
