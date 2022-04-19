import { useNavigate, useSearchParams } from 'react-router-dom';
import { DETAIL_COUNTRY } from '../graphql';
import { useQuery } from '@apollo/client';
import {
  Text,
  Message,
  Spinner,
  Heading,
  Button,
  Flag,
  Grid,
  Frame,
} from '../components';
import NotFound from '../pages/NotFound';

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
        population: number;
        borders: string[];
        nativeName: string;
      };
    }[];
  };
}

export default function CountryDetailLayout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<ICountryDetail>(DETAIL_COUNTRY, {
    variables: { alpha3Code: searchParams.get('code') },
  });

  if (loading) {
    return <Spinner style={{ margin: '10rem auto' }} />;
  }

  if (error) {
    return <Message type='error'>API Error...</Message>;
  }

  if (!loading && !data?.countries.edges.length) {
    return <NotFound />;
  }

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

  const handleHistoryBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button style={{ margin: '3rem 5%' }} onClick={handleHistoryBack}>
        Back
      </Button>
      <Grid
        style={{
          width: '90%',
          margin: '0 auto 10vh auto',
          gridTemplateColumns: '1fr',
          minHeight: '60vh',
          justifyContent: 'center',
        }}
      >
        <Flag src={flag} alt={name} style={{ alignSelf: 'end' }} />
        <Frame style={{ alignSelf: 'start' }}>
          <Heading>{name}</Heading>
          <Text>
            name: {name} | {nativeName}
          </Text>
          <Text>capital: {capital || '-'}</Text>
          <Text>region: {region}</Text>
          <Text>subregion: {subregion || '-'}</Text>
          <Text>population: {population?.toLocaleString()}</Text>
          <Text>
            borders:{' '}
            {borders?.length
              ? borders?.map((border) => (
                  <Button
                    key={border}
                    style={{
                      marginRight: '0.3rem',
                      padding: '0.3rem 0.5rem',
                      fontWeight: 'normal',
                      fontSize: '0.8rem',
                    }}
                    onClick={() => navigate(`/detail?code=${border}`)}
                  >
                    {border}
                  </Button>
                ))
              : 'none'}
          </Text>
        </Frame>
      </Grid>
    </>
  );
}
