import { useSelector } from 'react-redux';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styled/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import * as ROUTES from './constants/routes';
import { RootState } from './store';

export default function App() {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path={ROUTES.HOME} exact>
              <Home />
            </Route>
            <Route path={ROUTES.DETAIL} component={Detail}></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}
