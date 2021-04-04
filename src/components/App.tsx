import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

export const cn = (darkTheme: boolean) => {
  return darkTheme && 'theme--dark';
};

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [region, setRegion] = useState('Filter by Region');

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async (): Promise<void> => {
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
  };

  const handleTheme = (): void => {
    setDarkTheme(!darkTheme);
  };

  const handleRegion = (region: string): void => {
    setRegion(region);
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <div className="wrapper">
              <Header handleTheme={handleTheme} darkTheme={darkTheme} />
              {loading && <p className="loader">Loading ...</p>}
              <CardList
                countries={countries}
                darkTheme={darkTheme}
                handleRegion={handleRegion}
                region={region}
              />
            </div>
          </Route>
          <Route
            path="/detail/:countryName"
            render={(routeProps) => (
              <CardDetail
                countryName={routeProps.match.params.countryName}
                darkTheme={darkTheme}
                handleTheme={handleTheme}
                countries={countries}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
