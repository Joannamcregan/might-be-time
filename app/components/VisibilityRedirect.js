import React, { useEffect, useContext } from "react";
import { redirect } from "react-router-dom";
import InformedContext from "../InformedContext";

function VisibilityRedirect(props) {
  const { redirectSelection } = useContext(InformedContext);
  const { redirect } = useContext(InformedContext);

  useEffect(() => {
    document.addEventListener("visibilitychange", redirectSelection => {
      redirect(redirectSelection);
    });
    return () => {
      document.removeEventListener(
        "visibilitychange",
        redirect(redirectSelection)
      );
    };
  }, []);
  return <></>;
}

export default VisibilityRedirect;
