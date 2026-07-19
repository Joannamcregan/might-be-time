import React, { useEffect, useState } from "react";

function MainTag(props) {
  return <main className={props.redirectSelection}>{props.children}</main>;
}

export default MainTag;
