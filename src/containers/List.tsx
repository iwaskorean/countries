import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setPageNumber } from '../store/page';
import { Card, Feature, List } from '../components';
import { COUNTRIES_DATA } from '../fixtures/countries';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';

export default function ListContainer() {
  const { pageNumber } = useSelector((state: RootState) => state.page);
  const { region } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const [filteredCountries, setFilteredCountries] = useState(COUNTRIES_DATA);
  const [countriesPerPage] = useState(12);

  useEffect(() => {
    if (region === 'Filter by Region') {
      setFilteredCountries(COUNTRIES_DATA);
    } else {
      setFilteredCountries(
        COUNTRIES_DATA.filter((country) => country.region === region)
      );
    }
  }, [region]);

  const handlePageNumber = (num: number) => {
    dispatch(setPageNumber(num));
  };

  const indexOfLast = pageNumber * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;

  const currentCountries = filteredCountries.slice(indexOfFirst, indexOfLast);

  const paginate = (num: number) => handlePageNumber(num);

  return (
    <>
      <List>
        {currentCountries.map((country, i) => {
          return (
            <Card key={i}>
              <Card.Flag src={country.flags[0]} alt={country.flag} />
              <Card.Contents>
                <Feature.Name>{country.name.common}</Feature.Name>
                <Feature.Group>
                  <Feature.Property>Region: </Feature.Property>
                  <Feature.Value>{country.region}</Feature.Value>
                </Feature.Group>
                <Feature.Group>
                  <Feature.Property>Capital: </Feature.Property>
                  <Feature.Value>
                    {country.capital ? country.capital : '-'}
                  </Feature.Value>
                </Feature.Group>
                <Feature.Group>
                  {country.languages && (
                    <>
                      <Feature.Property>Languages: </Feature.Property>
                      <Feature.Value>
                        {Object.values(country.languages)[0]}
                      </Feature.Value>
                    </>
                  )}
                </Feature.Group>
              </Card.Contents>
            </Card>
          );
        })}
      </List>
      <Pagination
        className="pagination"
        current={pageNumber}
        total={COUNTRIES_DATA.length}
        pageSize={countriesPerPage}
        onChange={paginate}
      />
    </>
  );
}
