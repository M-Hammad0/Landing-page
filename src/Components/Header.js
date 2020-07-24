import React from "react";
import logo from "../images/logo.svg";
import {motion} from 'framer-motion'

function Header() {
  return (
    <motion.nav
    initial={{y: -100}}
    animate={{y: 0}}
    transition={{duration: 1}}
     className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
      <a className="navbar-brand" href="/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#features">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team">
            Team
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sign-in">
            sign in
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Header;
