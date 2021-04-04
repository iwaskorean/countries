import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { Country } from './App';

interface Props {
  countries: Country[];
  countryName: string;
  darkTheme: boolean;
  handleTheme: () => void;
}

const CardDetail: React.FC<Props> = ({
  countryName,
  darkTheme,
  handleTheme,
  countries,
}) => {
  const [countryDetail, setCountryDetail] = useState<any>();

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
      .then((response) => {
        setCountryDetail(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Please try later ...');
      });
  }, [countryName]);

  const cn = () => {
    return darkTheme && 'theme--dark';
  };

  const codeToName = (countries: Country[], code: string) => {
    return countries.filter((country) => country.alpha3Code === code)[0];
  };

  const renderedCountryDetail = () => {
    return (
      countryDetail && (
        <>
          <div className="card-detail__contents">
            <img
              className="card-detail__contents__flag"
              src={`${countryDetail[0].flag}`}
              alt={`${countryDetail[0].name} flag`}
            />
            <div className="card-detail__contents__container">
              <p className="card-detail__contents__heading">{countryName}</p>
              <div className="card-detail__contents__items">
                <div className="item">
                  <span>Native Name: </span>
                  <span>{countryDetail[0].nativeName}</span>
                </div>
                <div className="item">
                  <span>Top Level Domain: </span>
                  <span>{countryDetail[0].topLevelDomain[0].slice(1)}</span>
                </div>
                <div className="item">
                  <span>Population: </span>
                  <span>{countryDetail[0].population}</span>
                </div>
                <div className="item">
                  <span>Currencies: </span>
                  <span>{countryDetail[0].currencies[0].name}</span>
                </div>
                <div className="item">
                  <span>Region: </span>
                  <span>{countryDetail[0].region}</span>
                </div>
                <div className="item">
                  <span>Languages: </span>
                  {countryDetail[0].languages.map((lan: any, i: number) => {
                    if (i + 1 === countryDetail[0].languages.length) {
                      return <span key={i}>{lan.name}</span>;
                    } else {
                      return <span key={i}>{lan.name}, </span>;
                    }
                  })}
                </div>
                <div className="item">
                  <span>Sub Region: </span>
                  <span>{countryDetail[0].subregion}</span>
                </div>
                <div className="item">
                  <span>Capital: </span>
                  <span>{countryDetail[0].capital}</span>
                </div>
              </div>
              <div className="card-detail__contents__borders">
                <span>Borders Countries: </span>
                <div className="borders__container">
                  {countryDetail[0].borders.length > 0 ? (
                    countryDetail[0].borders.map((border: any, i: number) => {
                      return (
                        <Link
                          key={i}
                          to={`/detail/${codeToName(countries, border).name}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <div className="border">
                            {codeToName(countries, border).name}
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
    <div className={`card-detail ${cn()}`}>
      <Header darkTheme={darkTheme} handleTheme={handleTheme} />
      <div className={`button__box ${cn()}`}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={`button--back ${cn()}`}>Back</div>
        </Link>
      </div>
      {renderedCountryDetail()}
    </div>
  );
};

export default CardDetail;
