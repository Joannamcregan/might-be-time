import React, { useState } from "react";

function Footer(props) {
  return (
    <footer className={props.redirectSelection}>
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
