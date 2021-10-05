import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Header, ThemeSwitch } from '../components';
import { setTheme } from '../store/theme';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer() {
  const { theme } = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();

  const handleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(currentTheme));
  };

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME}>Where in the world?</Header.Logo>
          <ThemeSwitch onClick={() => handleTheme()}>
            <ThemeSwitch.Icon />
            <ThemeSwitch.Text />
          </ThemeSwitch>
        </Header.Frame>
      </Header>
    </>
  );
}
