import React, { useEffect, useState, useContext } from "react";
import InformedContext from "../InformedContext";
import MainTag from "./MainTag";

function Page(props) {
  const { redirectSelection } = useContext(InformedContext);
  useEffect(() => {
    document.title = `Breaking Free | ${props.title}`;
    if (redirectSelection == "nbc") {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_nbc.png");
    } else if (redirectSelection == "fox") {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_fox.png");
    } else if (redirectSelection == "aljazeera") {
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

  return (
    <MainTag redirectSelection={props.redirectSelection}>
      {props.children}
    </MainTag>
  );
}

export default Page;
