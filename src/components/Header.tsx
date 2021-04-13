interface Props {
  handleTheme: () => void;
  darkTheme: boolean;
}

const Header: React.FC<Props> = ({ handleTheme, darkTheme }) => {
  return (
    <div className={`container container--header `}>
      <div className="header">
        <p className="header__heading">Where in the world?</p>
        <div className="header__theme-switch" onClick={() => handleTheme()}>
          {!darkTheme ? (
            <>
              <img
                className="icon--theme"
                src="./assets/icon-moon.png"
                alt=""
              />
              <p>Dark Mode</p>
            </>
          ) : (
            <>
              <img className="icon--theme" src="./assets/icon-sun.png" alt="" />
              <p>Light Mode</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
