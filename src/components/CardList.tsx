import React from 'react';
import SearchBar from './SearchBar';
import Card from './Card';

import { Country } from './App';

type Props = {
  countries: Country[];
  searchName: (name: string) => void;
  searchRegion: (name: string) => void;
};

const CardList: React.FC<Props> = ({ countries, searchName, searchRegion }) => {
  console.log();

  return (
    <div className="container container--cardlist">
      <SearchBar searchName={searchName} searchRegion={searchRegion} />
      <div className="cardlist">
        {countries.map((country, i) => {
          return <Card key={i} country={country} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
