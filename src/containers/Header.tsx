import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Header, ThemeSwitch } from '../components';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer() {
  const { theme } = useSelector((state: RootState) => state.theme);

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
