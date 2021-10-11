import { useEffect, useState } from 'react';
import { COUNTRIES_DATA } from '../fixtures/countries';
import { Country } from '../types';

export default function CountryContainer({
  altSpellings,
}: {
  altSpellings: string | string[];
}) {
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    const currentCountry = COUNTRIES_DATA.filter(
      (c) => c.altSpellings[0] === altSpellings
    );

    setCountry(currentCountry[0]);
  }, [altSpellings]);

  console.log(country);
  return <>{country ? <div>{country.name.common}</div> : <h2>Loading</h2>}</>;
}
