import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardList from './CardList';
import axios from 'axios';
// scss
import '../scss/main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardDetail from './CardDetail';

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

  useEffect(() => {
    getCountries();
  }, []);

  const searchName = (name: string): void => {
    if (!name.trim()) {
      getCountries();
    } else {
      getCountryName(name);
    }
  };

  const searchRegion = (region: string): void => {
    getCountryRegion(region);
  };

  const getCountries = (): void => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert('It might be API problem... Please try again.');
      });
  };

  const getCountryName = (name: string): void => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert('Enter valid country name!');
      });
  };

  const getCountryRegion = (region: string): void => {
    axios
      .get(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((response) => {
        setCountries(response.data);
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
                searchName={searchName}
                searchRegion={searchRegion}
                darkTheme={darkTheme}
              />
            </div>
          </Route>
        </Switch>
        <Route
          path="/detail/:countryName"
          render={(routeProps) => (
            <CardDetail
              countryName={routeProps.match.params.countryName}
              darkTheme={darkTheme}
              handleTheme={handleTheme}
            />
          )}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
