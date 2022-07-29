import React from "react";
import homecss from "./Home.css";
import logo from "../images/Park Pals-logos_transparent.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing">
      <div className="landinginput">
        <img src={logo} alt="park pals logo" width="200" height="200" />
        <div className="signupinput">
          <p>Park it with your friends. </p>
          <button class="button-81">
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#0d172a" }}
            >
              Create User
            </Link>
          </button>
          <p>
            Already a user?{" "}
            <Link
              className="loginlink"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
