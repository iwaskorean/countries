import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Icon from './Icon';
import styled from 'styled-components';

export default function ThemeSwitch({ onClick }: { onClick: () => void }) {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <Container onClick={onClick} role='button' tabIndex={0}>
      <Icon theme={theme} />
      <Text>{theme === 'light' ? 'Dark' : 'Light'}</Text>
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
