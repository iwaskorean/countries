import { HTMLAttributes } from 'react';
import { ROUTES } from '../../constants/routes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { setTheme } from '../../store/theme';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import Logo from './Logo';
import styled from 'styled-components';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header({ ...props }: HeaderProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();

  const handleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(currentTheme));
  };

  return (
    <Wrapper {...props}>
      <Container>
        <Logo href={ROUTES.HOME} />
        <ThemeSwitch onClick={() => handleTheme()} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s;
  background-color: var(--background);
  box-shadow: var(--box-shadow);
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
