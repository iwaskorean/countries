import styled from 'styled-components';

export const Icon = styled.img`
  width: 1rem;
  margin-right: 0.5rem;
  transition: transform 0.3s;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  // ### Theme
  font-size: 1rem;
  font-weight: var(--font-bold);

  &:hover {
    opacity: 0.75;
    ${Icon} {
      transform: rotate(25deg);
    }
  }

  @media (max-width: 500px) {
    &__theme-switch {
      font-size: 0.9rem;
      .icon--theme {
        width: 0.8rem;
      }
    }
  }
`;

export const Text = styled.h3`
  cursor: pointer;
  font-size: 1rem;
  font-weight: var(--font-bold);
`;
