import React from "react";
import { Link } from "react-router-dom";
import navbarcss from "./Navbar.css";
import logo from "../images/parkpalsorange.jpeg";
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
      <div className="companylogo">
        <p>Park Pals</p>
      </div>
      <div className="navbar">
        <li>
          <img src={profilePic} alt="profile pic" className="profilepic" />
        </li>
      </div>
    </div>
  );
};

export default Navbar;
