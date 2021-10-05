import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container, Icon, Text } from './styles/ThemeSwitch';

export default function ThemeSwitch({
  children,
  onClick,
}: {
  children: JSX.Element | JSX.Element[];
  onClick: () => void;
}) {
  return <Container onClick={onClick}>{children}</Container>;
}

// Theme
ThemeSwitch.Icon = function ThemeSwitchIcon() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return theme === 'light' ? (
    <Icon src="./assets/icon-moon.png" alt="" />
  ) : (
    <Icon src="./assets/icon-sun.png" alt="" />
  );
};

ThemeSwitch.Text = function ThemeSwitchIcon() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return <Text theme={theme}>{theme === 'light' ? 'Dark' : 'Light'} Mode</Text>;
};
