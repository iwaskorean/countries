import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setPageNumber } from '../store/page';
import { Card, Feature, List } from '../components';
import { COUNTRIES_DATA } from '../fixtures/countries';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';

export default function ListContainer() {
  const { pageNumber } = useSelector((state: RootState) => state.page);
  const dispatch = useDispatch();

  const [countriesPerPage] = useState(12);

  const handlePageNumber = (num: number) => {
    dispatch(setPageNumber(num));
  };

  const indexOfLast = pageNumber * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;

  const currentCountries = COUNTRIES_DATA.slice(indexOfFirst, indexOfLast);

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
