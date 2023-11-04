/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Link, navigate } from "gatsby";
import Logo from "../../icons/logo";
import HomeIcon from "../../icons/home";
import CloseMenu from "../../assets/close.png";
import menuIcon from "../../assets/menu.png";


const Header: React.FC = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <header className="header-container">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="navigation">
        <div
          onClick={() => setIsMenuShown(!isMenuShown)}
          className="nav-mobile"
        >
          {isMenuShown ? (
            <div className="nav-img-close">
              <img src={CloseMenu} alt="Logo" style={{ width: "2.5rem" }} />
            </div>
          ) : (
            <div className="nav-img">
              <img src={menuIcon} alt="Logo" style={{ width: "3rem" }} />
            </div>
          )}
        </div>
        <div className={!isMenuShown ? "nav-container" : "nav-links"}>
          <Link className="nav-link" to={"/"}>
            <HomeIcon />
          </Link>
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
          <Link className="nav-link" to={"/gallery"}>
            Gallery
          </Link>
          <Link className="nav-link" to={"/contact"}>
            Contact
          </Link>
          <Link className="nav-link" to={"/resume"}></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
