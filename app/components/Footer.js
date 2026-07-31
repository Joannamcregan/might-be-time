import React, { useState, useContext, useReducer } from "react";
import StateContext from "../StateContext";

function Footer(props) {
  const appState = useContext(StateContext);
  return (
    <footer className={appState.redirectSelection}>
      <p
        className="underline"
        onClick={() => {
          document.getElementById("overlay").classList.remove("hidden");
          window.scrollTo(0, 0);
        }}
      >
        safety settings
      </p>
      <p>copyright {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
