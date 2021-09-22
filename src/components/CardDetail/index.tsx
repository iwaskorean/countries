import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import CardDetailItem from './CardDetailItem';
import CardDetailBorders from './CardDetailBorders';
import CardDetailLaunguages from './CardDetailLaunguages';
import CardDetailFlag from './CardDetailFlag';
import { Country } from '../../App';

interface Props {
  countries: Country[];
  darkTheme: boolean;
  handleTheme: () => void;
  countryCode: string;
}

const CardDetail: React.FC<Props> = ({
  darkTheme,
  handleTheme,
  countries,
  countryCode,
}) => {
  const [countryDetail, setCountryDetail] = useState<any>();

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then((response) => {
        setCountryDetail(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Please try later ...');
      });
  }, [countryCode]);

  return (
    <div className={`card-detail`}>
      <Header darkTheme={darkTheme} handleTheme={handleTheme} />
      <div className={`button__box`}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={`button--back`}>Back</div>
        </Link>
      </div>
      {!countryDetail ? (
        <p className="loader">Loading ...</p>
      ) : (
        <>
          <div className="card-detail__contents">
            <CardDetailFlag
              src={countryDetail.flag}
              name={countryDetail.name}
            />
            <div className="card-detail__contents__container">
              <p className="card-detail__contents__heading">
                {countryDetail.name}
              </p>
              <div className="card-detail__contents__items">
                <CardDetailItem
                  item="Native Name"
                  content={countryDetail.nativeName}
                />
                <CardDetailItem
                  item="Top Level Domain"
                  content={countryDetail.topLevelDomain[0].slice(1)}
                />
                <CardDetailItem
                  item="Population"
                  content={countryDetail.population}
                />
                <CardDetailItem
                  item="Currencies"
                  content={countryDetail.currencies[0].name}
                />
                <CardDetailItem item="Region" content={countryDetail.region} />
                <CardDetailLaunguages languages={countryDetail.languages} />
                <CardDetailItem
                  item="Sub Region"
                  content={countryDetail.subregion}
                />
                <CardDetailItem
                  item="Capital"
                  content={countryDetail.capital}
                />
              </div>
              <CardDetailBorders
                countries={countries}
                borders={countryDetail.borders}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDetail;
