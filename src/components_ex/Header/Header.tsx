import ThemeSwitch from '../ThemeSwitcher/ThemeSwitch';
import './Header.module.scss';

interface Props {
  handleTheme: () => void;
  darkTheme: boolean;
}

const Header: React.FC<Props> = ({ handleTheme, darkTheme }) => {
  return (
    <div className={`container container--header `}>
      {/* <div className={styles['container container--header']}> */}
      <div className="header">
        <p className="header__heading">Where in the world?</p>
        {/* <div className="header__theme-switch" onClick={() => handleTheme()}>
          {!darkTheme ? (
            <>
              <ThemeSwitch src="./assets/icon-moon.png" title="Dark Mode" />
            </>
          ) : (
            <>
              <ThemeSwitch src="./assets/icon-sun.png" title="Light Mode" />
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
