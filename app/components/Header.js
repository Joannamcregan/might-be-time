import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header(props) {
  return (
    <>
      <header className={props.redirectSelection}>
        <div id="header-content">
          <Link to="/">
            <svg viewBox="0 0 500 400" id="logo">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#82027e" />
                  <stop offset="50%" stopColor="#1b007d" />
                  <stop offset="100%" stopColor="#024b7c" />
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
          </Link>
          <Menu />
        </div>
      </header>
      <div id="header-transition"></div>
    </>
  );
}

export default Header;
