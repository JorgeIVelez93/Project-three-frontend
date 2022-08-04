import React from "react";
import { Link } from "react-router-dom";
import navbarcss from "./Navbar.css";
import logo from "../images/Park Pals-1.png";
import { useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");
  let navigate = useNavigate();

  const userSignout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbaralign">
      <div>
        <Hamburger />
      </div>
      <h1 className="parkpals">Park Pals</h1>
      <div className="navbarlogo">
        <img src={logo} alt="company logo" />
      </div>
    </div>
  );
};

export default Navbar;
