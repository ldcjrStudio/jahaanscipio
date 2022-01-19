import { useState } from "react";

//components
import MenuIcon from "./icons/MenuIcon";
import XIcon from "./icons/XIcon";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  return (
    <header id="header" className="border-r-2 border-black">
      <button
        className={`hamburger hamburger--arrow ${navActive ? "is-active" : ""}`}
        type="button"
        onClick={toggleNav}
      >
        <MenuIcon />
      </button>
      <div className="desktop-heading">
        <h2>
          Jahaan Scipio<span className="position"> - Architect & Designer</span>
        </h2>
      </div>

      <div
        className={`desktop-menu border-r-2 border-black ${
          navActive ? "active" : ""
        }`}
      >
        <button
          className={`hamburger hamburger--arrow ${
            navActive ? "is-active" : ""
          }`}
          type="button"
          onClick={closeNav}
        >
          <XIcon />
        </button>
        <nav>
          <div className="title">
            <h2>Jahaan Scipio</h2>
            <h3>Architect & Designer</h3>
          </div>
          <div className="internal-links">
            <a href="google.com">About</a>
            <a href="google.com">Work</a>
          </div>
          <div className="external-links"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
