import React, { useEffect, useState, useContext, useReducer } from "react";
import StateContext from "../StateContext";
import MainTag from "./MainTag";

function Page(props) {
  const appState = useContext(StateContext);
  useEffect(() => {
    document.title = `Breaking Free | ${props.title}`;
    if (appState.redirectSelection == "nbcnews") {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_nbc.png");
    } else if (appState.redirectSelection == "foxnews") {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_foxnews.png");
    } else if (appState.redirectSelection == "aljazeera") {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_aljazeera.png");
    } else {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_cnn.png");
    }
    window.scrollTo(0, 0);
  }, []);

  return <MainTag>{props.children}</MainTag>;
}

export default Page;
