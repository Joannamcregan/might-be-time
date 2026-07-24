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
            <img
              src="../img/heart_fox.jpg"
              alt="a white, pixelated heart appears with streaks and blobs of blue, white, and red light around it"
              className={`logo ${props.redirectSelection == "fox" ? "" : "hidden"}`}
            />
            <img
              src="../img/heart_aljazeera.jpg"
              alt="a white heart with a swirly design in the center appears on an orange background"
              className={`logo ${props.redirectSelection == "aljazeera" ? "" : "hidden"}`}
            />
          </Link>
          <Menu redirectSelection={props.redirectSelection} />
        </div>
      </header>
    </>
  );
}

export default Header;
