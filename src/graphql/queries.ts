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
