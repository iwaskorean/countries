import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="container container--header">
      <div className="header">
        <p className="header__heading">Where in the world?</p>
        <div className="header__theme-switch">
          <p>Icon</p>+<p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
