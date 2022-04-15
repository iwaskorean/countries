import { useSelector } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styled/theme';
import { RootState } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <Home />
        </Router>
      </ThemeProvider>
    </>
  );
}
