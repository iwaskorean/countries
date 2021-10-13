import { useEffect, useState } from 'react';
import { COUNTRIES_DATA } from '../fixtures/countries';
import { Country } from '../types';
import { Button, Frame, Feature } from '../components';

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
  return (
    <>
      <Button>
        <Button.Group>
          <Button.Content>Back</Button.Content>
        </Button.Group>
      </Button>
      <Frame>
        <Frame.Group>
          {country ? (
            <Feature.Title>{country.name.common}</Feature.Title>
          ) : (
            <h2>Loading</h2>
          )}
        </Frame.Group>
        <Frame.Group>
          <Feature.Group>
            <Feature.Property>Name</Feature.Property>
            <Feature.Value>desc</Feature.Value>
          </Feature.Group>
          <Feature.Group>
            <Feature.Property>Name</Feature.Property>
            <Feature.Value>desc</Feature.Value>
          </Feature.Group>
          <Feature.Group>
            <Feature.Property>Name</Feature.Property>
            <Feature.Value>desc</Feature.Value>
          </Feature.Group>
          <Feature.Group>
            <Feature.Property>border countries</Feature.Property>
            <Button.Group>
              <Button.Content>country</Button.Content>
            </Button.Group>
          </Feature.Group>
        </Frame.Group>
      </Frame>
    </>
  );
}
