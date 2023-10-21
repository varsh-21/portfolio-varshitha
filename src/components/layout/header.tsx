import React from "react";
import { Link, navigate } from "gatsby";
import { ThemeContext } from "../../context/themeProvider";

const Header: React.FC = (props) => {
  const { theme, themeName, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header className="header-container">
      <Link to={"/"}>Home</Link>/<Link to={"/resume"}>Resume</Link>/
      <Link to={"/about"}>About</Link>/<Link to={"/contact"}>Contact</Link>
    </header>
  );
};

export default Header;
