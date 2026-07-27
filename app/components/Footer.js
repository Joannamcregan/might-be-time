import React, { useState, useContext } from "react";
import InformedContext from "../InformedContext";

function Footer(props) {
  const { redirectSelection } = useContext(InformedContext);
  return (
    <footer className={redirectSelection}>
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
