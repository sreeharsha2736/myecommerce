import React, { useState, useEffect } from "react";
import Nav from "./Nav";

import "../main.css";

const Navbar = () => {
  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div id={header} className="container-fluid">
      <Nav />
    </div>
  );
};

export default Navbar;
