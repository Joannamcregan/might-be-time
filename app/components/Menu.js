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
        aria-label="toggle menu"
        onClick={toggleMenu}
      />
      <nav id="menu" className="hidden">
        <p id="close-menu" className="invisible" onClick={toggleMenu}>
          close menu
        </p>
        <p>Get help with...</p>
        <Link to="/">gaining clarity</Link>
        <Link to="/risk">understanding your risk</Link>
        <p>knowing if it's even abuse</p>
        <p>learning how abuse affects your health</p>
        <p>learning how abuse affects your kids</p>
        <p>getting out safely</p>
      </nav>
    </>
  );
}

export default ComponentName;
