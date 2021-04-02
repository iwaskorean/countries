import { useState } from 'react';

interface Props {
  region: string;
  handleFilter: (region: string) => void;
  searchNameTest: (name: string) => void;
}

const regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
const filterMsg = 'Filter by Region';

const SearchBar: React.FC<Props> = ({
  handleFilter,
  searchNameTest,
  region,
}) => {
  const [name, setName] = useState('');
  const [regionName, setRegionName] = useState(region);
  const [filterActive, setFilterActive] = useState(false);

  const onClearFilter = (): void => {
    setRegionName(filterMsg);
    setFilterActive(false);
    handleFilter(filterMsg);
  };

  const cn = () => {
    return filterActive && 'filter--active';
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={(e) => e.preventDefault()}>
        <div className="icon-search">
          <img src="./assets/icon-search.png" alt="" />
        </div>
        <input
          className="search-bar__form__input"
          type="text"
          value={name}
          placeholder="Search for a country ..."
          onChange={(e) => {
            setName(e.target.value);
            searchNameTest(e.target.value);
          }}
        />
      </form>
      <div className="search-bar__filter">
        <div
          className={`search-bar__filter__heading ${cn()}`}
          onClick={() => setFilterActive(!filterActive)}
        >
          <p>{regionName}</p>
          <img className="icon--arrow" src="./assets/icon-arrow.png" alt="" />
        </div>
        <div className={`search-bar__filter__items ${cn()}`}>
          {regions.map((regionName) => {
            return (
              <div
                key={regionName}
                className={`search-bar__filter__item`}
                onClick={() => {
                  setRegionName(regionName);
                  setFilterActive(false);
                  handleFilter(regionName);
                }}
              >
                {regionName}
              </div>
            );
          })}
          <div className="clear" onClick={() => onClearFilter()}>
            ALL
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
