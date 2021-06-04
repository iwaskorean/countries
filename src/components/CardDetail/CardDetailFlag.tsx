import React from 'react';

interface Props {
  src: string;
  name: string;
}

const CardDetailFlag: React.FC<Props> = ({ src, name }) => {
  return (
    <>
      <img
        className="card-detail__contents__flag"
        src={src}
        alt={name + 'flag'}
      />
    </>
  );
};

export default CardDetailFlag;
