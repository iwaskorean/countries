import styled from 'styled-components';

export const Container = styled.div``;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 1rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color};
  &:hover {
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'none')};
  }
`;

export const Heading = styled.h1`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.color};
  &:hover {
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'none')};
  }
  margin: 2rem 1rem;
`;

export const Name = styled.h3`
  font-size: 1.2rem;
  color: var(--text);
  font-weight: var(--font-extra-bold);
  margin: 1.2rem 1rem;
`;

export const Text = styled.h4`
  font-size: 1rem;
  color: var(--text);
  font-weight: var(--font-bold);
  margin-right: 0.5rem;
`;

export const PlainText = styled.h4`
  display: flex;
  flex-wrap: wrap;
  color: var(--text);
  font-weight: var(--font-light);
  margin: 0;
`;

export const Image = styled.img``;
