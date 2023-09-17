import { useState } from "react";
import "./burgernav.css"; // Import your CSS file
import linkedin from "../../img/footer_linkedin.svg";
import github from "../../img/footer_github.svg";
import mail from "../../img/footer_mail.svg";

import { NavLink } from "react-router-dom";

function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-nav ${isOpen ? "active" : ""}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className={`line line1 ${isOpen ? "active" : ""}`} />
        <div className={`line line2 ${isOpen ? "active" : ""}`} />
        <div className={`line line3 ${isOpen ? "active" : ""}`} />
      </div>
      <ul className={`menu ${isOpen ? "active" : ""}`}>
        {/* Add your navigation links here */}
        <NavLink to="/" onClick={toggleMenu}>
          <li className="homebtn-mobile">HOME</li>
        </NavLink>
        <NavLink to="/portfolio" onClick={toggleMenu}>
          <li>PORTFOLIO</li>
        </NavLink>
        <NavLink to="/about" onClick={toggleMenu}>
          <li>ABOUT</li>
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          <li>CONTACT</li>
        </NavLink>
        <div className="socials-list">
          <a
            className="icon-footer-a"
            href="https://www.linkedin.com/in/rayankhyare/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon-footer" src={linkedin} />
          </a>
          <a
            className="icon-footer-a"
            href="https://github.com/RayanKhyare"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon-footer" src={github} />
          </a>

          <a className="icon-footer-a" href="mailto:rayankhyare@gmail.com">
            <img className="icon-footer" src={mail} />
          </a>
        </div>
      </ul>
    </div>
  );
}

export default BurgerNav;
