import { useState } from 'react';
import { Header, ThemeSwitch } from '../components';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer() {
  // ### Will replace hooks to redux
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME}>Where in the world?</Header.Logo>
          <ThemeSwitch>
            <ThemeSwitch.Icon theme={theme} />
            <ThemeSwitch.Text theme={theme} />
          </ThemeSwitch>
        </Header.Frame>
      </Header>
    </>
  );
}
