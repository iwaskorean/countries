import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setPageNumber } from '../store/page';
import { setTerm } from '../store/term';
import { Card, Feature, List } from '../components';
import { COUNTRIES_DATA } from '../fixtures/countries';
import { FILTER_TEXT } from '../fixtures/regions';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';

export default function ListContainer() {
  const { pageNumber } = useSelector((state: RootState) => state.page);
  const { region } = useSelector((state: RootState) => state.filter);
  const { term } = useSelector((state: RootState) => state.term);
  const dispatch = useDispatch();

  const [filteredCountries, setFilteredCountries] = useState(COUNTRIES_DATA);
  const [list, setList] = useState(filteredCountries);
  const [countriesPerPage] = useState(12);

  useEffect(() => {
    if (region === FILTER_TEXT) {
      setFilteredCountries(COUNTRIES_DATA);
    } else {
      setFilteredCountries(
        COUNTRIES_DATA.filter((country) => country.region === region)
      );
    }
  }, [region]);

  useEffect(() => {
    setList(filteredCountries);
  }, [filteredCountries]);

  useEffect(() => {
    if (term) {
      setList(
        filteredCountries.filter((country) =>
          country.name.common.toLowerCase().includes(term.toLowerCase())
        )
      );
    } else {
      setList(filteredCountries);
    }
  }, [filteredCountries, term]);

  const handlePageNumber = (num: number) => {
    dispatch(setPageNumber(num));
  };

  const handleListReset = () => {
    dispatch(setTerm(''));
  };

  const indexOfLast = pageNumber * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;

  const currentCountries = list.slice(indexOfFirst, indexOfLast);

  const paginate = (num: number) => handlePageNumber(num);

  return (
    <>
      <List>
        {currentCountries.length > 0 ? (
          currentCountries.map((country, i) => {
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
          })
        ) : (
          <Feature.Title onClick={handleListReset}>
            Could not find results. Click to reset the results.
          </Feature.Title>
        )}
      </List>
      <Pagination
        className="pagination"
        current={pageNumber}
        total={list.length}
        pageSize={countriesPerPage}
        onChange={paginate}
      />
    </>
  );
}
