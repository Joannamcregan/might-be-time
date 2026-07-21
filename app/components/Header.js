import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header(props) {
  return (
    <>
      <header className={props.redirectSelection}>
        <div id="header-content">
          <Link to="/">
            <img
              src="../img/heart_cnn.jpg"
              alt="a simple drawing of a heart with an EKG reading line"
              className={`logo ${props.redirectSelection == "cnn" ? "" : "hidden"}`}
            />
            <img
              src="../img/heart_nbc.jpg"
              alt="three simple hearts--one half blue and half green, one half purple and half red, and one half orange and half yellow--are arranged in a clover shape"
              className={`logo ${props.redirectSelection == "nbc" ? "" : "hidden"}`}
            />
          </Link>
          <Menu />
        </div>
      </header>
    </>
  );
}

export default Header;
