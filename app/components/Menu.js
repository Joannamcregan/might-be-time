import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ComponentName() {
  function toggleMenu() {
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menu-link").classList.toggle("hidden");
    document.getElementById("close-menu").classList.toggle("hidden");
  }

  return (
    <>
      <p id="menu-link" onClick={toggleMenu}>
        Get help with...
      </p>
      <div id="menu" className="hidden">
        <p id="close-menu" className="hidden" onClick={toggleMenu}>
          close menu
        </p>
        <p>Get help with...</p>
        <Link to="/">gaining clarity</Link>
        <Link to="/risk">understanding your risk</Link>
        <p>knowing if it's even abuse</p>
        <p>learning how abuse affects your health</p>
        <p>learning how abuse affects your kids</p>
        <p>getting out safely</p>
      </div>
    </>
  );
}

export default ComponentName;
