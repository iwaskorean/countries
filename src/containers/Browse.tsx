import { SearchBar, Filter } from '../components';

export default function BrowseContainer() {
  return (
    <>
      <SearchBar>
        <SearchBar.Form>
          <SearchBar.Icon />
          <SearchBar.Input type="text" />
        </SearchBar.Form>
        <Filter>
          <Filter.Frame>
            <Filter.Heading>
              <Filter.Region>Filter by Region</Filter.Region>
            </Filter.Heading>
            <Filter.Icon src="" />
          </Filter.Frame>
          <Filter.ItemList>
            <Filter.Region>Region 1</Filter.Region>
            <Filter.Region>Region 2</Filter.Region>
            <Filter.Region>Region 3</Filter.Region>
            <Filter.Region>Region 4</Filter.Region>
          </Filter.ItemList>
        </Filter>
      </SearchBar>
    </>
  );
}
