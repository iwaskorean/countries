import { Container, Icon, Text } from './styles/ThemeSwitch';

export default function ThemeSwitch({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

// Theme
ThemeSwitch.Icon = function ThemeSwitchIcon({ theme }: { theme: string }) {
  return theme === 'light' ? (
    <Icon src="./assets/icon-moon.png" alt="" />
  ) : (
    <Icon src="./assets/icon-sun.png" alt="" />
  );
};

ThemeSwitch.Text = function ThemeSwitchIcon({ theme }: { theme: string }) {
  return <Text>{theme === 'light' ? 'Dark' : 'Light'} Mode</Text>;
};
