import React, { useEffect, useState, useContext } from "react";
import StateContext from "../StateContext";

function QuickExit(props) {
  const { redirectSelection } = useContext(StateContext);
  const { redirect } = useContext(StateContext);
  return (
    <p
      id="exit"
      onClick={redirectSelection => {
        StateContext.redirect(redirectSelection);
      }}
    >
      Exit
    </p>
  );
}

export default QuickExit;
