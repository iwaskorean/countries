import styled from 'styled-components';

interface ButtonProps {
  primary?: string;
}

export const Container = styled.div``;

export const Group = styled.div``;

export const Content = styled.button<ButtonProps>`
  font-size: ${({ primary }) => (primary === 'primary' ? '1rem' : '0.7rem')};
  color: var(--text);
  border: 0;
  background-color: var(--element);
  box-shadow: var(--box-shadow);
  padding: 0.5rem 1rem;
  border-radius: 3px;
  margin: ${({ primary }) =>
    primary === 'primary' ? '1.5rem 0.5rem 0 0.5rem ' : '0.3rem'};
  cursor: pointer;

  &:active {
    opacity: 0.7;
  }
`;
