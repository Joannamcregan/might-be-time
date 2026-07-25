import React, { useEffect } from "react";

function Redirect(props) {
  function redirectToSelected(destination = "https://cnn.com") {
    // if (localStorage.getItem("selectedStyle")) {
    //   destination = localStorage.getItem("selectedStyle");
    // }
    if (destination == "nbc") {
      destination = "https://nbcnews.com";
    } else if (destination == "fox") {
      destination = "https://foxnews.com";
    } else if (destination == "aljazeera") {
      destination = "https://aljazeera.com";
    } else if (destination == "cnn") {
      destination = "https://cnn.com";
    }
    // window.location.replace(destination);
    console.log(
      `totally going to redirect to ${destination} once testing is complete`
    );
  }
  return <></>;
}

export default Redirectprops;
