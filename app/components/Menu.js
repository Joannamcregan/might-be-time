import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ComponentName() {
  function toggleMenu() {
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menu-link").classList.toggle("invisible");
    document.getElementById("close-menu").classList.toggle("invisible");
  }

  return (
    <>
      <img
        src="../img/white_hamburger_menu.png"
        id="menu-link"
        aria-label="open menu"
        onClick={toggleMenu}
      />
      <nav id="menu" className="hidden">
        <img
          id="close-menu"
          src="../img/white_x.png"
          aria-label="close menu"
          className="invisible"
          onClick={toggleMenu}
        />
        <Link to="/">Gain clarity</Link>
        <Link to="/risk">Understand your risk</Link>
        <p>Is it abuse?</p>
        <p>Health effects</p>
        <p>Effects on kids</p>
        <p>Get out safely</p>
      </nav>
    </>
  );
}

export default ComponentName;
