import { useState } from "react";
import { Transition } from "@headlessui/react";

//components
import MenuIcon from "./icons/MenuIcon";
import XIcon from "./icons/XIcon";
import Link from "next/link";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    console.log("toggle nav");
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  const NavMenu = (props) => {
    return (
      <nav
        {...props}
        id="navigation"
        className={`absolute top-0 right-0 bg-white h-full w-screen p-6 ${
          navActive ? "active" : ""
        }`}
      >
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
    );
  };
  return (
    <header
      id="header"
      className="border-b-2 border-black flex flex-row flex-nowrap justify-between items-center fixed top-0 left-0 w-screen h-24 p-6 z-50"
    >
      <Link href="/">
        <a>Jahaan Scipio</a>
      </Link>

      <button type="button" className="z-50" onClick={toggleNav}>
        {navActive ? <XIcon /> : <MenuIcon />}
      </button>

      <NavMenu />
    </header>
  );
};

export default Header;
