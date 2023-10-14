import React from "react";
import "./intro.css";
import Github from "../../img/red-github.png";
import Insta from "../../img/red-insta.png";
import linked from "../../img/red-link1.png";
import wobg from "../../img/med.png";

import { themeContext } from "../../context";
import { useContext } from "react";
import { Link } from "react-scroll";

function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-lft">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi, I Am</span>
          <span>Suraj Singhal</span>
          <span>
            Full Stack Web Developer <big>"MERN Stack"</big> with a high level
            of experience in Web Development and Designing, producting the
            quality work
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button" style={{ padding: "0px" }}>
            Recruit-me
          </button>
        </Link>
        <div className="i-icon">
          <a
            href="https://github.com/MrStark1234"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-singhal-2980a41ba/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linked} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/surajsinghal_02/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Insta} alt="Instagram"  />
          </a>
        </div>
      </div>
      <div className="i-rgt conatiner">
        <img src={wobg} alt="png" />
      </div>
    </div>
  );
}

export default Intro;
