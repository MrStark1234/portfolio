import React from "react";
import "./Footer.css";
import Wave from "../../img/wave4.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import FB from "@iconscout/react-unicons/icons/uil-facebook";
import GITHub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="/" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{ fontSize: "16px", marginBottom: "-0.2rem" }}>
          Copyright © 2023 | Suraj Singhal | All rights reserved
        </span>
        <div className="f-icon">
          <Insta color="#b1b1b1" size="1.5rem" />
          <FB color="#b1b1b1" size="1.5rem" />
          <GITHub color="#b1b1b1" size="1.5rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
