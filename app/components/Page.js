import React, { useEffect, useState } from "react";
import MainTag from "./MainTag";

function Page(props) {
  useEffect(() => {
    document.title = `Breaking Free | ${props.title}`;
    if (props.redirectSelection == "nbc") {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_nbc.png");
      console.log("update favicon to nbc");
    } else if (props.redirectSelection == "fox") {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_fox.png");
      console.log("update favicon to fox");
    } else if (props.redirectSelection == "aljazeera") {
      document
        .getElementById("favicon")
        .setAttribute("href", "../img/icon_heart_aljazeera.png");
      console.log("update favicon to aljazeera");
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
