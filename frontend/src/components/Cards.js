import React from "react";

import "../main.css";
import Card from "./Card";
import Topheader from "./Topheader";

const Cards = () => {
  return (
    <>
      <Topheader />
      <div className="container">
        <div className="row">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Cards;
