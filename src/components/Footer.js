import React from "react";
import { Link } from "react-router-dom";
import IG from "../images/instagram-brands.svg";
import FB from "../images/facebook-brands.svg";
import TW from "../images/twitter-brands.svg";
import footercss from "./Footer.css";

const Footer = () => {
  return (
    <div className="footercolor">
      <footer className="footercss">
        <div className="socialmediacss">
          <img src={IG} alt="instagam logo" />
          <img src={FB} alt="facebook logo" />
          <img src={TW} alt="twitter logo" />
        </div>
        <ul className="footerlicss">
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/sources"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sources
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
