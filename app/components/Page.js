import React, { useEffect, useState } from "react";
import MainTag from "./MainTag";

function Page(props) {
  useEffect(() => {
    document.title = `Breaking Free | ${props.title}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainTag redirectSelection={props.redirectSelection}>
      {props.children}
    </MainTag>
  );
}

export default Page;
