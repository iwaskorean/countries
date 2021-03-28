import { useState } from 'react';

type Props = {
  searchName: (name: string) => void;
  searchRegion: (name: string) => void;
};

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchBar: React.FC<Props> = ({ searchName, searchRegion }) => {
  const [name, setName] = useState('');
  // const [region, setRegion] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchName(name);
    setName('');
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={(e) => onSubmit(e)}>
        <div className="icon-search">
          <img src="./assets/icon-search.png" alt="" />
        </div>
        <input
          className="search-bar__form__input"
          type="text"
          value={name}
          placeholder="Search for a country ..."
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div className="search-bar__filter">
        <p className="search-bar__filter__heading">Filter by Region</p>
        <div className="search-bar__filter__items">
          {regions.map((region) => {
            return (
              <div
                key={region}
                className="search-bar__filter__item"
                onClick={() => searchRegion(region)}
              >
                {region}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
