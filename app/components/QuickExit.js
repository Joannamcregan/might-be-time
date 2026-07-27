import React, { useEffect, useState, useContext } from "react";
import InformedContext from "../InformedContext";

function QuickExit(props) {
  const { redirectSelection } = useContext(InformedContext);
  const { redirect } = useContext(InformedContext);
  return (
    <p
      id="exit"
      onClick={redirectSelection => {
        redirect(redirectSelection);
      }}
    >
      Exit
    </p>
  );
}

export default QuickExit;
