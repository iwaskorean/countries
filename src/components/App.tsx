import React, { useEffect, useState } from 'react';
import Header from './Header';
import CardList from './CardList';
import axios from 'axios';
// scss
import '../scss/main.scss';

export type Country = {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
};

const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="wrapper">
      <Header />
      {loading && <p className="loader">Loading ...</p>}
      <CardList
        countries={countries}
        searchName={searchName}
        searchRegion={searchRegion}
      />
    </div>
  );
};

export default App;
