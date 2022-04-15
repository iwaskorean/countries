import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.REACT_APP_BASE_URL,
});

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export default function CountriesListLayout() {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, {
    client,
  });

  console.log(data, loading, error);

  return <></>;
}
