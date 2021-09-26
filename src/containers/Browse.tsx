import { useState } from 'react';
import { SearchBar, Filter } from '../components';
import { REGIONS } from '../fixtures/regions';

export default function BrowseContainer() {
  const [currentRegion, setCurrentRegion] = useState('Filter by Region');
  const [term, setTerm] = useState('');

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
              <Filter.Region>{currentRegion}</Filter.Region>
              <Filter.Icon src="./assets/icon-arrow.png" />
            </Filter.Heading>
          </Filter.Frame>
          <Filter.ItemList>
            {REGIONS.map((region) => (
              <Filter.Region
                key={region}
                onClick={() => setCurrentRegion(region)}
              >
                {region}
              </Filter.Region>
            ))}
          </Filter.ItemList>
        </Filter>
      </SearchBar>
    </>
  );
}
