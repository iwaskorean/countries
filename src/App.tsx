import { useSelector } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styled/theme';
import { RootState } from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Home from './pages/Home';
import Detail from './pages/Detail';

export default function App() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.DETAIL} element={<Detail />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
