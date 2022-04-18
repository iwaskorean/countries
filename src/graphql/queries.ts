import { gql } from '@apollo/client';

export const LIST_COUNTRIES = gql`
  query ($region: String!, $term: String!) {
    countries(region: $region, name_Icontains: $term) {
      edges {
        node {
          alpha3Code
          name
          capital
          region
          flag
          subregion
        }
      }
    }
  }
`;

export const DETAIL_COUNTRY = gql`
  query ($alpha3Code: String!) {
    countries(alpha3Code: $alpha3Code) {
      edges {
        node {
          name
          capital
          region
          flag
          subregion
          population
          borders
          nativeName
        }
      }
    }
  }
`;
