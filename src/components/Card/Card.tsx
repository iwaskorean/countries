import { Link } from 'react-router-dom';
import { Country } from '../App';

interface Props {
  country: Country;
}

const Card: React.FC<Props> = ({ country }) => {
  return (
    <>
      <Link
        to={`/detail/${country.alpha3Code}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="card">
          <div className="card__flag">
            <img src={country.flag} alt="" />
          </div>
          <p className="card__heading">{country.name}</p>
          <div className="card__heading--medium">
            Population:
            <span className="card__heading--small">
              {country.population.toLocaleString('en-US')}
            </span>
          </div>
          <div className="card__heading--medium">
            Region:
            <span className="card__heading--small">{country.region}</span>
          </div>
          <div className="card__heading--medium">
            Capital:
            <span className="card__heading--small">{country.capital}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
