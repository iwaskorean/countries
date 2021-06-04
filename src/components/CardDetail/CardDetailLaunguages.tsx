import React from 'react';

interface Props {
  languages: string[];
}

const CardDetailLaunguages: React.FC<Props> = ({ languages }) => {
  return (
    <div className="item">
      <span>Languages: </span>
      {languages.map((lan: any, i: number) => {
        return (
          <span key={i}>
            {lan.name}
            {i + 1 !== languages.length && ','}&nbsp;
          </span>
        );
      })}
    </div>
  );
};

export default CardDetailLaunguages;
