import React from "react";
import "./Service.css";
import FullStack from "../../img/full-stack.png";
import UIUX from "../../img/ui-ux.png";
import Design from "../../img/design.png";
import Card from "../Card/Card";

import { themeContext } from "../../context";
import { useContext } from "react";

function Service() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/*Left Side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          I always try to serve better experiences to the client.
          <br /> Fast load times and lag-free interaction, are my highest
          priority.
          <br />I always make sure that my layouts will work on any device, big
          or small.
          <br />
          Sometimes websites don't have to be static, I love making pages come
          to life.
          <br />
          Strong preference for easy-to-use, intuitive UX/UI.
        </span>
        <a
          href="https://drive.google.com/file/d/1khXKvVHme1gTxCPogHF8t7_aavsCMBdr/preview"
          width="640"
          height="480"
          allow="autoplay"
          rel="noreferrer"
          target="_blank"
        >
          <button className="button s-button">Go to Resume</button>
        </a>
      </div>

      {/*Right Side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            photo={FullStack}
            heading={"Web Developer"}
            detail={"Mongo DB, Express-JS, React-JS,Node-JS, Javascript"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            photo={UIUX}
            heading={"UI/UX- Developer"}
            detail={"HTML-5, CSS-3, Javascript, Bootstrap-5"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            photo={Design}
            heading={"Designer/Editor"}
            detail={"Adobe Photoshop, Adobe Premier Pro, Canva"}
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
