import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
