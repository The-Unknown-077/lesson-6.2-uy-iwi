import React from "react";
import "./Footer.css";
import logo from "../../assets/Escape..svg";
import { FOOTER_LINKS } from "../../static/static";


// footer import qigada ishlami qogani uchun kichkina harda qip qoydm ismini


const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={logo} alt="Footer Logo" className="footer_logo" />
        <ul className="footer_collection">
          {FOOTER_LINKS?.map((item, index) => (
            <li className="footer_item" key={index}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
