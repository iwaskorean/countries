import { useState, useEffect } from 'react';
import HeaderContainer from '../containers/Header';
import CountryContainer from '../containers/Country';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

export default function Detail({ location }: RouteComponentProps) {
  const [altSpelling, setAltSpelling] = useState<string | string[]>('');

  useEffect(() => {
    const { code } = queryString.parse(location.search);

    if (code) {
      setAltSpelling(code);
    }
  }, [location.search]);

  return (
    <>
      <HeaderContainer />
      <CountryContainer altSpellings={altSpelling} />
    </>
  );
}
