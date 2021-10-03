import { useState } from 'react';
import { SearchBar, Filter } from '../components';
import { REGIONS } from '../fixtures/regions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFilter } from '../store/filter';

export default function BrowseContainer() {
  const [term, setTerm] = useState('');

  const { region } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleFilter = (region: string) => {
    dispatch(setFilter(region));
  };

  return (
    <>
      <SearchBar>
        <SearchBar.Form onSubmit={(e) => e.preventDefault()}>
          <SearchBar.Icon src="./assets/icon-search.png" />
          <SearchBar.Input
            type="text"
            value={term}
            onChange={({ target }) => setTerm(target.value)}
          />
        </SearchBar.Form>
        <Filter>
          <Filter.Frame>
            <Filter.Heading>
              <Filter.Region>{region}</Filter.Region>
              <Filter.Icon src="./assets/icon-arrow.png" />
            </Filter.Heading>
          </Filter.Frame>
          <Filter.ItemList>
            {REGIONS.map((region) => (
              <Filter.Region key={region} onClick={() => handleFilter(region)}>
                {region}
              </Filter.Region>
            ))}
          </Filter.ItemList>
        </Filter>
      </SearchBar>
    </>
  );
}
