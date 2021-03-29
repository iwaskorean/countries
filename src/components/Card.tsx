import React from 'react';
import { Country } from './App';
import CardDetail from './CardDetail';

interface Props {
  country: Country;
}

const Card: React.FC<Props> = ({ country }) => {
  const onCardClick = () => {
    return <CardDetail></CardDetail>;
  };

  return (
    <div className="card" onClick={() => onCardClick()}>
      <div className="card__flag">
        <img src={country.flag} alt="" />
      </div>
      <p className="card__heading">{country.name}</p>
      <div className="card__heading--medium">
        Population:{' '}
        <span className="card__heading--small">{country.population}</span>
      </div>
      <div className="card__heading--medium">
        Region: <span className="card__heading--small">{country.region}</span>
      </div>
      <div className="card__heading--medium">
        Capital: <span className="card__heading--small">{country.capital}</span>
      </div>
    </div>
  );
};

export default Card;
