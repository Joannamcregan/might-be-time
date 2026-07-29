import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Risk from "./components/Risk";
import QuickExit from "./components/QuickExit";
import VisibilityRedirect from "./components/VisibilityRedirect";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  const initialState = {
    redirectSelection: localStorage.getItem("selectedDestination")
      ? localStorage.getItem("selectedDestination")
      : "https://cnn.com",
    styleSelection: localStorage.getItem("selectedStyle")
      ? localStorage.getItem("selectedStyle")
      : "cnn",
    redirect: (destination = "https://cnn.com") => {
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
    }
  };

  function theReducer(state, action) {
    switch (action.type) {
      case "updateStyle":
        return {
          redirectSelection: state.redirectSelection,
          styleSelection: action.value,
          redirect: state.redirect
        };
      case "setRedirectSelection":
        return {
          redirectSelection: action.value,
          styleSelection: state.styleSelection,
          redirect: state.redirect
        };
      case "redirect":
        return {
          redirectSelection: state.redirectSelection,
          styleSelection: state.styleSelection,
          redirect: redirect(action.value)
        };
    }
  }

  const [state, dispatch] = useReducer(theReducer, initialState);

  // const [redirectSelection, setRedirectSelection] = useState(
  //   localStorage.getItem("selectedStyle")
  //     ? localStorage.getItem("selectedStyle")
  //     : "cnn"
  // );

  function redirect(destination = "https://cnn.com") {
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
  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <VisibilityRedirect />
          <Header />
          <Overlay />
          <QuickExit redirectSelection={state.redirectSelection} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/risk" element={<Risk />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
