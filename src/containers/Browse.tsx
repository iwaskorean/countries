import { useState } from 'react';
import { SearchBar, Filter } from '../components';
import { REGIONS } from '../fixtures/regions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFilter } from '../store/filter';
import { setTerm } from '../store/term';

export default function BrowseContainer() {
  const { region } = useSelector((state: RootState) => state.filter);
  const { term } = useSelector((state: RootState) => state.term);

  const [currentTerm, setCurrentTerm] = useState(term);

  const dispatch = useDispatch();

  const handleFilter = (region: string) => {
    dispatch(setFilter(region));
  };

  const handleTerm = (term: string) => {
    dispatch(setTerm(term));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleTerm(currentTerm);
  };

  return (
    <>
      <SearchBar>
        <SearchBar.Form onSubmit={(e) => handleSubmit(e)}>
          <SearchBar.Icon src="./assets/icon-search.png" />
          <SearchBar.Input
            type="text"
            value={currentTerm}
            // value={term}
            onChange={({ target }) => setCurrentTerm(target.value)}
            // onChange={({ target }) => handleTerm(target.value)}
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
