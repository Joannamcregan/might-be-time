import React, { useEffect, useContext } from "react";
import { redirect } from "react-router-dom";
import InformedContext from "../InformedContext";

function VisibilityRedirect(props) {
  const { redirectSelection } = useContext(InformedContext);
  const { redirect } = useContext(InformedContext);

  useEffect(() => {
    const redirect = (destination = "https://cnn.com") => {
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
      // window.location.replace(destination);
      console.log(
        `totally going to redirect to ${destination} once testing is complete`
      );
    };
    document.addEventListener("visibilitychange", redirect);
    return () => {
      document.removeEventListener("visibilitychange", redirect);
    };
  }, []);
  return <></>;
}

export default VisibilityRedirect;
