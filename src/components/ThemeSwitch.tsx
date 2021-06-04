import React from 'react';

const ThemeSwitch = ({ src, title }: { src: string; title: string }) => {
  return (
    <>
      <img className="icon--theme" src={src} alt="" />
      <p>{title}</p>
    </>
  );
};

export default ThemeSwitch;
