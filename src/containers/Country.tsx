import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { COUNTRIES_DATA } from '../fixtures/countries';
// import { Country } from '../types';
import { Button, Frame, Feature } from '../components';

export default function CountryContainer({
  countryCode,
}: {
  countryCode: string | string[];
}) {
  // const [country, setCountry] = useState<Country>();
  const [country, setCountry] = useState<any>();

  useEffect(() => {
    const currentCountry = COUNTRIES_DATA.filter((c) => c.cca3 === countryCode);

    setCountry(currentCountry[0]);
  }, [countryCode]);

  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <>
      <Button>
        <Button.Group>
          <Button.Content onClick={handleBackButton} primary="primary">
            Back
          </Button.Content>
        </Button.Group>
      </Button>

      {country ? (
        <Frame>
          <Frame.Group>
            {country ? (
              <Feature.Heading>{country.name.common}</Feature.Heading>
            ) : (
              <h2>Loading</h2>
            )}
          </Frame.Group>
          <Frame.Grid>
            <Frame.Group>
              <Feature.Image
                src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
                alt={country.flag}
              />
            </Frame.Group>
            <Frame.Group>
              <Feature.Group>
                <Feature.Property>Official Name: </Feature.Property>
                <Feature.Value>{country.name.official}</Feature.Value>
              </Feature.Group>
              <Feature.Group>
                <Feature.Property>Name in Korean: </Feature.Property>
                <Feature.Value>{country.translations.kor.common}</Feature.Value>
              </Feature.Group>
              <Feature.Group>
                <Feature.Property>Capital City: </Feature.Property>
                <Feature.Value>{country.capital[0]}</Feature.Value>
              </Feature.Group>
              {/* <Feature.Group>
                <Feature.Property>Languages: </Feature.Property>
                <Feature.Value>
                  {country.languages.length
                    ? Object.values(country.languages).map((lan, i) =>
                        i === Object.values(country.languages).length - 1
                          ? lan
                          : lan + ', '
                      )
                    : '-'}
                </Feature.Value>
              </Feature.Group> */}
              <Feature.Group>
                <Feature.Property>Latitude / Longitude: </Feature.Property>
                <Feature.Value>
                  {country.latlng[0].toFixed(2)} /{' '}
                  {country.latlng[1].toFixed(2)}
                </Feature.Value>
              </Feature.Group>
              <Feature.Group>
                <Feature.Property>border countries: </Feature.Property>
                <Button.Group>
                  {country.borders ? (
                    country.borders.map((b: any, i: number) => (
                      <Link to={`/detail?code=${b}`} key={i}>
                        <Button.Content>{b}</Button.Content>
                      </Link>
                    ))
                  ) : (
                    <Button.Content disabled={true}>none</Button.Content>
                  )}
                </Button.Group>
              </Feature.Group>
            </Frame.Group>
          </Frame.Grid>
        </Frame>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}
