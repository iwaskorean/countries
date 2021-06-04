import React from 'react';
import { Country } from '../App';
import { Link } from 'react-router-dom';

interface Props {
  countries: Country[];
  borders: string[];
}

const CardDetailBorders: React.FC<Props> = ({ borders, countries }) => {
  const codeToName = (countries: Country[], code: string) => {
    return (
      countries.length > 0 &&
      countries.filter((country) => country.alpha3Code === code)[0].name
    );
  };

  return (
    <div className="card-detail__contents__borders">
      <span>Borders Countries: </span>
      <div className="borders__container">
        {borders.length > 0 ? (
          borders.map((border: string, i: number) => {
            return (
              <Link
                key={i}
                to={`/detail/${border}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="border">{codeToName(countries, border)}</div>
              </Link>
            );
          })
        ) : (
          <div className="border">None</div>
        )}
      </div>
    </div>
  );
};

export default CardDetailBorders;
