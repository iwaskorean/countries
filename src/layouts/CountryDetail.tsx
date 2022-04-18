import { useSearchParams } from 'react-router-dom';
import { DETAIL_COUNTRY } from '../graphql';
import { useQuery } from '@apollo/client';
import { Text, Message, Spinner, Title } from '../components';

interface ICountryDetail {
  countries: {
    edges: {
      node: {
        name: string;
        alpha3Code: string;
        capital: string;
        region: string;
        flag: string;
        subregion: string;
        population: string;
        borders: string[];
        nativeName: string;
      };
    }[];
  };
}

export default function CountryDetailLayout() {
  const [searchParams] = useSearchParams();

  const { data, loading, error } = useQuery<ICountryDetail>(DETAIL_COUNTRY, {
    variables: { alpha3Code: searchParams.get('code') },
  });

  const {
    name,
    capital,
    region,
    flag,
    subregion,
    population,
    borders,
    nativeName,
  } = data?.countries.edges[0].node ?? {};

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Message type='error'>API Error...</Message>;
  }

  return (
    <>
      <Title>{name}</Title>
      <Text>
        name: {name} | {nativeName}
      </Text>
      <Text>capital: {capital}</Text>
      <Text>region: {region}</Text>
      <Text>flag: {flag}</Text>
      <Text>subregion: {subregion}</Text>
      <Text>borders: {borders}</Text>
      <Text>population: {population}</Text>
    </>
  );
}
