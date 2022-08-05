import React from "react";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import aboutCss from "./About.css";
import aboutImg from "../images/aboutTeaser.png";
import aboutImg2 from "../images/aboutTeaser2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ backgroundColor: "E6E3D3", height: "100vh" }}>
      <Hamburger />
      <Navbar />
      <div className="aboutDiv">
        <h1>What is Park Pals?</h1>
        <br></br>
        <p>
          Park Pals is dedicated to the nature lovers and park goers. A space
          for you to share your thoughts and to find new destinations to visit.{" "}
        </p>
        <br></br>
        <img
          src={aboutImg}
          alt="teaser "
          style={{ width: "600px", height: "300px" }}
        />
        <br></br>
        <h1>Learn about Americas's Parks.</h1> <br></br>
        <p>
          With over 400 Nationally regonized parks, there is always a new place
          to learn about and plan a trip for.{" "}
        </p>
        <br></br>
        <img
          src={aboutImg2}
          alt="teaser "
          style={{ width: "600px", height: "300px" }}
        />
        <br></br>
        <br></br>
        <Link style={{ fontSize: "40px" }} to="/" className="LinkAbout">
          Check us out!
        </Link>
      </div>
    </div>
  );
};

export default About;
