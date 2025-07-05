import React from 'react'
import "./Header.css"
import logo from "../../assets/Escape..svg";
import menuIcon from "../../assets/icons8-меню-34.png";
import { NAV_LINKS } from "../../static/static";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <img src={logo} alt="logo" className="navbar_logo" />
          <ul className="navbar_collection">
            {NAV_LINKS?.map((item, index) => (
              <li className="navbar_item" key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <img src={menuIcon} alt="menu" className="menubar" />
        </div>
      </div>
    </header>
  );
};


export default Header