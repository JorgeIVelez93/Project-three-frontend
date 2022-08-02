import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import logo from "../images/Park Pals-logos_white.png";
import { useNavigate } from "react-router-dom";

const Hamburger = () => {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");
  let navigate = useNavigate();

  const showSettings = (event) => {
    event.preventDefault();
  };

  const userSignout = () => {
    localStorage.clear();
    navigate("/login");
  };

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "rgba(40, 35, 29, 0.35)",
    },
    bmBurgerBarsHover: {
      background: "#e6e3d3",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#e6e3d3",
    },
    bmMenuWrap: {
      position: "fixed",
      left: "80px",
      top: "0px",
      height: "100%",
      background: "rgba(157, 193, 131, .5)",
      color: "e6e3d3",
    },
    bmMenu: {
      // background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      background: "rgba(40, 35, 29, 0.3)",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
      // background: "rgba(40/, 35, 29, 0.35)",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "none",
    },
  };
  return (
    <Menu styles={styles}>
      <img
        src={profilePic}
        alt="profile pic"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      />
      <br></br>
      <Link to="" className="burgerLinks">
        {username}
      </Link>
      <br></br>
      <Link to="/" className="burgerLinks">
        Dashboard
      </Link>
      <Link to="/parks" className="burgerLinks">
        View Parks
      </Link>
      <Link to="/events" className="burgerLinks">
        See Events
      </Link>
      <Link to="/view-all" className="burgerLinks">
        View Global Pens
      </Link>
      <Link to="#" onClick={showSettings} className="burgerLinks">
        Settings
      </Link>
      <br></br>
      <Link to="/login" onClick={userSignout} className="burgerLinks">
        Sign Out
      </Link>
      {/* <button type="button" onClick={userSignout}>
        Sign Out
      </button> */}
    </Menu>
  );
};

export default Hamburger;
