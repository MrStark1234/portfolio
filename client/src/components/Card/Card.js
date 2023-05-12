import React from "react";
import "./Card.css";

const Card = ({ photo, heading, detail }) => {
  return (
    <div className="card">
      <img src={photo} alt="/" />
      <span>{heading}</span>
      <span>{detail}</span>
      {/* <button className="c-button">Learn More</button> */}
    </div>
  );
};

export default Card;
