import React from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
import { Country } from './App';
import { cn } from './App';

interface Props {
  countries: Country[];
  searchName: (name: string) => void;
  searchRegion: (name: string) => void;
  darkTheme: boolean;
}

const CardList: React.FC<Props> = ({
  countries,
  searchName,
  searchRegion,
  darkTheme,
}) => {
  return (
    <div className={`container container--cardlist ${cn(darkTheme)}`}>
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
