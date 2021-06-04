import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import CardList from './CardList';
import CardDetail from './CardDetail';
// scss
import '../scss/main.scss';

export interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [region, setRegion] = useState('Filter by Region');

  const getCountries = useCallback(async () => {
    await axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert('It might be API problem... Please try again.');
      });
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const handleTheme = useCallback(() => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark');
  }, [darkTheme]);

  const handleRegion = useCallback((region: string) => {
    setRegion(region);
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="wrapper">
              <Header handleTheme={handleTheme} darkTheme={darkTheme} />
              {loading && <p className="loader">Loading ...</p>}
              <CardList
                countries={countries}
                handleRegion={handleRegion}
                region={region}
              />
            </div>
          </Route>
          <Route
            path="/detail/:alpha3Code"
            render={(routeProps) => (
              <CardDetail
                darkTheme={darkTheme}
                countryCode={routeProps.match.params.alpha3Code}
                handleTheme={handleTheme}
                countries={countries}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
