import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setPageNumber, setRegion, setTerm } from '../store';
import { LIST_COUNTRIES } from '../graphql';
import {
  Button,
  Card,
  Flex,
  Grid,
  Message,
  Pagination,
  Spinner,
} from '../components';

interface ICountry {
  node: {
    name: string;
    alpha3Code: string;
    capital: string;
    region: string;
    flag: string;
    subregion: string;
  };
}

interface ICountriesList {
  countries: {
    edges: ICountry[];
  };
}

export default function CountriesListLayout() {
  const [countriesPerPage] = useState(12);

  const { pageNumber } = useSelector((state: RootState) => state.page);
  const { region } = useSelector((state: RootState) => state.region);
  const { term } = useSelector((state: RootState) => state.term);

  const { data, loading, error } = useQuery<ICountriesList>(LIST_COUNTRIES, {
    variables: { region, term },
  });

  const dispatch = useDispatch();

  const handleResetResult = () => {
    dispatch(setTerm(''));
    dispatch(setRegion(region));
  };

  const indexOfLast = pageNumber * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;

  const currentCountries = data?.countries.edges.slice(
    indexOfFirst,
    indexOfLast
  );

  const handlePagination = (num: number) => dispatch(setPageNumber(num));

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Message type='error'>API Error...</Message>;
  }

  if (!loading && !currentCountries?.length) {
    return (
      <Flex
        style={{
          flexDirection: 'column',
          margin: '5rem auto',
          alignItems: 'center',
        }}
      >
        <Message>Sorry, No results found...</Message>
        <Button style={{ margin: '3rem 0' }} onClick={handleResetResult}>
          Reset the results
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      style={{
        width: '90%',
        minHeight: '90vh',
        margin: '0 auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid style={{ margin: '3rem 0' }}>
        {currentCountries?.map(({ node }) => (
          <Card
            key={node.alpha3Code}
            thumbnail={node.flag}
            details={[
              { region: node.region },
              { subregion: node.subregion },
              { capital: node.capital },
            ]}
          >
            {node.name}
          </Card>
        ))}
      </Grid>
      <Pagination
        current={pageNumber}
        total={data?.countries.edges.length}
        pageSize={countriesPerPage}
        onChange={handlePagination}
      />
    </Flex>
  );
}
