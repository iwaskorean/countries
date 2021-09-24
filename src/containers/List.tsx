import { Card, Feature, List } from '../components';
import { COUNTRIES_DATA } from '../fixtures/countries';

export default function ListContainer() {
  console.log(COUNTRIES_DATA);

  return (
    <>
      {COUNTRIES_DATA.map((country, i) => {
        return (
          <List key={i}>
            <Card>
              <Card.Flag />
              <Card.Contents>
                <Feature.Name>{country.name.common}</Feature.Name>
                <Feature.Group>
                  <Feature.Property>Region: </Feature.Property>
                  <Feature.Value>{country.region}</Feature.Value>
                </Feature.Group>
                {/* <Feature.Group>
                  <Feature.Property>Region: </Feature.Property>
                </Feature.Group>
                <Feature.Group>
                  <Feature.Property>Capital: </Feature.Property>
                </Feature.Group> */}
              </Card.Contents>
            </Card>
          </List>
        );
      })}
    </>
  );
}
