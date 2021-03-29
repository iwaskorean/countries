import { useState } from 'react';

interface Props {
  searchName: (name: string) => void;
  searchRegion: (name: string) => void;
}

const regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
const filterMsg: string = 'Filter by Region';

const SearchBar: React.FC<Props> = ({ searchName, searchRegion }) => {
  const [name, setName] = useState('');
  const [region, setRegion] = useState(filterMsg);
  const [filterActive, setFilterActive] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchName(name);
    setName('');
    setRegion('Filter by Region');
    setFilterActive(false);
  };

  const onClearFilter = (): void => {
    searchName('');
    setName('');
    setRegion('Filter by Region');
    setFilterActive(false);
  };

  const cn = () => {
    return filterActive && 'filter--active';
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
        <div
          className={`search-bar__filter__heading ${cn()}`}
          onClick={() => setFilterActive(!filterActive)}
        >
          <p>{region}</p>
          <img className="icon--arrow" src="./assets/icon-arrow.png" alt="" />
        </div>
        <div className={`search-bar__filter__items ${cn()}`}>
          {regions.map((region) => {
            return (
              <div
                key={region}
                className={`search-bar__filter__item`}
                onClick={() => {
                  searchRegion(region);
                  setRegion(region);
                  setFilterActive(false);
                }}
              >
                {region}
              </div>
            );
          })}
          {region !== filterMsg && (
            <div className="clear" onClick={() => onClearFilter()}>
              Clear
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
