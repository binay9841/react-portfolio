import "./HeroimgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import Project from "./../routes/Project";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>REACT DEVELOPER.</h1>
        <div>
          <Link to="/Project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
