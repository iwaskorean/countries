import { Container, Icon, Text } from './styles/ThemeSwitch';

export default function ThemeSwitch({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <Container>{children}</Container>;
}

ThemeSwitch.Icon = function ThemeSwitchIcon({ theme }: { theme: string }) {
  return theme === 'light' ? <Icon src="" alt="" /> : <Icon src="" alt="" />;
};

ThemeSwitch.Text = function ThemeSwitchIcon({ theme }: { theme: string }) {
  return <Text>{theme === 'light' ? 'Light' : 'Dark'} Mode</Text>;
};
