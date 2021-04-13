import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { Country } from './App';

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
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Please try later ...');
      });
  }, [countryCode]);

  const codeToName = (countries: Country[], code: string) => {
    return (
      countries.length > 0 &&
      countries.filter((country) => country.alpha3Code === code)[0].name
    );
  };

  const renderedCountryDetail = () => {
    return (
      countryDetail && (
        <>
          <div className="card-detail__contents">
            <img
              className="card-detail__contents__flag"
              src={`${countryDetail.flag}`}
              alt={`${countryDetail.name} flag`}
            />
            <div className="card-detail__contents__container">
              <p className="card-detail__contents__heading">
                {countryDetail.name}
              </p>
              <div className="card-detail__contents__items">
                <div className="item">
                  <span>Native Name: </span>
                  <span>{countryDetail.nativeName}</span>
                </div>
                <div className="item">
                  <span>Top Level Domain: </span>
                  <span>{countryDetail.topLevelDomain[0].slice(1)}</span>
                </div>
                <div className="item">
                  <span>Population: </span>
                  <span>{countryDetail.population}</span>
                </div>
                <div className="item">
                  <span>Currencies: </span>
                  <span>{countryDetail.currencies[0].name}</span>
                </div>
                <div className="item">
                  <span>Region: </span>
                  <span>{countryDetail.region}</span>
                </div>
                <div className="item">
                  <span>Languages: </span>
                  {countryDetail.languages.map((lan: any, i: number) => {
                    if (i + 1 === countryDetail.languages.length) {
                      return <span key={i}>{lan.name}</span>;
                    } else {
                      return <span key={i}>{lan.name}, </span>;
                    }
                  })}
                </div>
                <div className="item">
                  <span>Sub Region: </span>
                  <span>{countryDetail.subregion}</span>
                </div>
                <div className="item">
                  <span>Capital: </span>
                  <span>{countryDetail.capital}</span>
                </div>
              </div>
              <div className="card-detail__contents__borders">
                <span>Borders Countries: </span>
                <div className="borders__container">
                  {countryDetail.borders.length > 0 ? (
                    countryDetail.borders.map((border: string, i: number) => {
                      return (
                        <Link
                          key={i}
                          to={`/detail/${border}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <div className="border">
                            {codeToName(countries, border)}
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <div className="border">None</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )
    );
  };

  return (
    <div className={`card-detail`}>
      <Header darkTheme={darkTheme} handleTheme={handleTheme} />
      <div className={`button__box`}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={`button--back`}>Back</div>
        </Link>
      </div>
      {renderedCountryDetail()}
    </div>
  );
};

export default CardDetail;
