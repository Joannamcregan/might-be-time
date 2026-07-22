import React, { useState } from "react";

function Footer(props) {
  return (
    <footer className={props.redirectSelection}>
      <p
        onClick={() => {
          document.getElementById("overlay").classList.remove("hidden");
        }}
      >
        safety settings
      </p>
      <p>copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
