import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import logo from "../images/Park Pals-logos_white.png";
import { useNavigate } from "react-router-dom";
import evergreen from "../images/icons8-evergreen-75.png";

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

  // const dashboardRedirect = () => {
  //   navigate(`/user/${username}`);
  // };

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#E6E3D3",
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
      left: "75px",
      top: "0px",
      height: "100%",
      background: "rgba(45, 58, 83, 1)",
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
      {profilePic ? (
        <img
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            border: "2px solid #E6E3D3",
          }}
          src={profilePic}
          alt="profile"
        />
      ) : (
        <img
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            border: "2px solid #E6E3D3",
          }}
          src={evergreen}
          alt="profile"
          style={{ width: "75px", height: "75px" }}
        />
      )}
      {/* <img
        src={profilePic}
        alt="profile pic"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          border: "2px solid #fff",
        }}
      /> */}
      <br></br>
      <Link to="/profile" className="burgerLinks">
        {username}
      </Link>
      <br></br>
      <Link to={`/user/${username}`} className="burgerLinks">
        Dashboard
      </Link>
      <br></br>
      <Link to="/view-all" className="burgerLinks">
        Global Pens
      </Link>
      <br></br>
      <Link to="/parks" className="burgerLinks">
        Parks
      </Link>
      <br></br>
      <Link to="/about" className="burgerLinks">
        About
      </Link>

      <br></br>
      {username && (
        <Link to="/login" onClick={userSignout} className="burgerLinks">
          Sign Out
        </Link>
      )}
      {!username && (
        <Link to="/" className="burgerLinks">
          Sign Up
        </Link>
      )}
      <br />
      {!username && (
        <Link to="/login" className="burgerLinks">
          Login
        </Link>
      )}
    </Menu>
  );
};

export default Hamburger;
