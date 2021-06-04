import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Card from './Card';
import Pagenation from './Pagenation';
import { Country } from './App';

interface Props {
  countries: Country[];
  handleRegion: (region: string) => void;
  region: string;
}

const CardList: React.FC<Props> = ({ countries, region, handleRegion }) => {
  const [fetchedCountries, setFetchedCountries] = useState<Country[]>();
  const [filteredCountries, setFilteredCountries] = useState<Country[]>();
  const [name, setName] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);

  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  const currentCountries = filteredCountries?.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
    if (region !== 'Filter by Region') {
      setFilteredCountries(
        fetchedCountries?.filter((el) => el.region === region)
      );
    } else {
      setFilteredCountries(fetchedCountries);
    }
  }, [region, fetchedCountries]);

  useEffect(() => {
    if (name.trim() !== '') {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${name}`)
        .then((res) => {
          setFetchedCountries(res.data);
        })
        .catch((err) => {});
    } else {
      setFetchedCountries(countries);
    }
  }, [name, countries]);

  const handleFilter = (region: string) => {
    handleRegion(region);
  };

  const searchNameTest = (name: string) => {
    setName(name);
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className={`container container--cardlist `}>
        <SearchBar
          handleFilter={handleFilter}
          searchNameTest={searchNameTest}
          region={region}
        />
        <div className="cardlist">
          {currentCountries?.map((country, i) => {
            return <Card key={i} country={country} />;
          })}
          <Pagenation
            countriesPerPage={countriesPerPage}
            totalCountries={filteredCountries?.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default CardList;
