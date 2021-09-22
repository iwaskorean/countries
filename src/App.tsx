import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import CardDetail from './components/CardDetail';
import { countries as COUNTRIES_DATA } from './fixtures/countries';
import './scss/layout.scss';

export interface Country {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}

const App = () => {
  // const [countries, setCountries] = useState<Country[]>([]);
  const [countries, setCountries] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [region, setRegion] = useState('Filter by Region');

  // const getCountries = useCallback(async () => {
  //   await axios
  //     .get('https://restcountries.com/v3/all', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setCountries(res.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert('It might be API problem... Please try again.');
  //     });
  // }, []);

  // useEffect(() => {
  //   getCountries();
  // }, [getCountries]);

  useEffect(() => {
    // const { name, flag, population, region, capital, alpha3Code } =
    //   COUNTRIES_DATA;

    console.log(COUNTRIES_DATA);

    //   setTimeout(() => {
    //   setCountries(COUNTRIES_DATA);
    // }, 1500);
    if (countries.length > 0) {
      setLoading(false);
    }
  }, [countries]);

  console.log(COUNTRIES_DATA);

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
              {/* {loading && <p className="loader">Loading ...</p>}
              <CardList
                countries={countries}
                handleRegion={handleRegion}
                region={region}
              /> */}
              {/* {countries.map((country: any) => {
                return <h2>{country.name.official}</h2>;
              })} */}
            </div>
          </Route>
          {/* <Route
            path="/detail/:alpha3Code"
            render={(routeProps) => (
              <CardDetail
                darkTheme={darkTheme}
                countryCode={routeProps.match.params.alpha3Code}
                handleTheme={handleTheme}
                countries={countries}
              />
            )}
          /> */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
