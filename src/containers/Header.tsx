import { Header, ThemeSwitch } from '../components';

export default function HeaderContainer() {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Title>Where in the world?</Header.Title>
          <ThemeSwitch>
            <ThemeSwitch.Icon theme="light" />
            <ThemeSwitch.Text theme="light" />
          </ThemeSwitch>
        </Header.Frame>
      </Header>
    </>
  );
}
