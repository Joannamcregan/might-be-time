import React from "react";

function Header() {
  return (
    <>
      <header>
        <div id="header-content">
          <svg viewBox="0 0 500 400" id="logo">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#82027e" />
                <stop offset="50%" stop-color="#1b007d" />
                <stop offset="100%" stop-color="#024b7c" />
              </linearGradient>
            </defs>
            <text x="40" y="120">
              YOU'RE
            </text>
            <text x="40" y="220" id="not-word">
              NOT
            </text>
            <text x="40" y="320">
              ALONE
            </text>
          </svg>
          <div id="nav-select">
            <label for="nav-select">Find help with </label>
            <select id="nav-select">
              <option value="clarity">gaining clarity</option>
              <option value="risk">knowing your risk</option>
              <option value="housing">safe housing</option>
              <option value="food">food</option>
              <option value="utilities">utilities</option>
              <option value="transportation">transportation</option>
              <option value="health">health and healing</option>
              <option value="immigration">imigration</option>
              <option value="addiction">substance use</option>
              <option value="legal">legal protection</option>
              <option value="kids">protecting your kids</option>
              <option></option>
            </select>
          </div>
        </div>
      </header>
      <div id="header-transition"></div>
    </>
  );
}

export default Header;
