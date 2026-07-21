import React, { useEffect } from "react";

function Footer() {
  return (
    <footer>
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
