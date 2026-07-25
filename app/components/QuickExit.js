import React, { useEffect, useState } from "react";

function redirectPage(destination = "https://cnn.com") {
  if (localStorage.getItem("selectedStyle")) {
    destination = localStorage.getItem("selectedStyle");
  }
  if (destination == "nbc") {
    destination = "https://nbcnews.com";
  } else if (destination == "fox") {
    destination = "https://foxnews.com";
  } else if (destination == "aljazeera") {
    destination = "https://aljazeera.com";
  } else if (destination == "cnn") {
    destination = "https://cnn.com";
  }
  window.location.replace(destination);
}

function QuickExit(props) {
  return (
    <p
      id="exit"
      onClick={props => {
        redirectPage(props.redirectSelection);
      }}
    >
      Exit
    </p>
  );
}

export default QuickExit;
