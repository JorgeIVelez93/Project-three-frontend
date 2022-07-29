import React from "react";
import { Link } from "react-router-dom";
import navbarcss from "./Navbar.css";
import logo from "../images/Park Pals-logos_white.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");
  let navigate = useNavigate();

  const userSignout = () => {
    localStorage.clear();
    navigate("/login");
  };
  console.log(profilePic);
  return (
    <div className="navbaralign">
      <div>
        <img src={logo} alt="logo" className="companylogo" />
      </div>
      <div className="navbar">
        <ul>
          <li>Welcome {username}</li>
          <li>
            <img src={profilePic} alt="profile pic" />
          </li>
          <li>
            <Link to="/view-all">View Global Pens</Link>
          </li>
          <li style={{ textDecoration: "none" }}>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/parks">Parks</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/home">Information</Link>
          </li>
          <li>
            <button onClick={userSignout} type="button">
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
