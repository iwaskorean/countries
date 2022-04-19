import { HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Icon from './Icon';
import styled from 'styled-components';

export default function ThemeSwitch({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <Container role='button' tabIndex={0} {...props}>
      <Icon theme={theme} />
      <Text>{theme === 'light' ? 'Dark' : 'Light'} Mode</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: var(--font-bold);
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

const Text = styled.h3`
  font-size: 1rem;
  font-weight: var(--font-bold);
  color: var(--text);
`;
