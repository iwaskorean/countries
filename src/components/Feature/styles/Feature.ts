import styled from 'styled-components';

export const Container = styled.div``;

export const Group = styled.div`
  display: flex;
  margin: 0.5rem 1rem;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color};
  &:hover {
    cursor: ${({ onClick }) => (onClick ? 'pointer' : 'none')};
  }
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
  color: var(--text);
  font-weight: var(--font-light);
  margin: 0;
`;
