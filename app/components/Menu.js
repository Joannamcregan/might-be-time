import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  function toggleMenu() {
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menu-link").classList.toggle("invisible");
    document.getElementById("close-menu").classList.toggle("invisible");
  }

  return (
    <>
      <img
        src={
          props.redirectSelection == "aljazeera"
            ? "../img/black_hamburger_menu.png"
            : "../img/white_hamburger_menu.png"
        }
        id="menu-link"
        className="pointer"
        aria-label="open menu"
        onClick={toggleMenu}
      />
      <nav id="menu" className="hidden">
        <img
          id="close-menu"
          src={
            props.redirectSelection == "aljazeera"
              ? "../img/black_x.png"
              : "../img/white_x.png"
          }
          aria-label="close menu"
          className="invisible pointer"
          onClick={toggleMenu}
        />
        <Link to="/" onClick={toggleMenu}>
          Gain clarity
        </Link>
        <Link to="/risk" onClick={toggleMenu}>
          Understand your risk
        </Link>
        <p>Is it abuse?</p>
        <p>Health effects</p>
        <p>Effects on kids</p>
        <p>Get out safely</p>
      </nav>
    </>
  );
}

export default Menu;
