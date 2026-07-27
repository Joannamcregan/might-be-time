import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Risk from "./components/Risk";
import QuickExit from "./components/QuickExit";
import VisibilityRedirect from "./components/VisibilityRedirect";
import InformedContext from "./InformedContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  const [redirectSelection, setRedirectSelection] = useState(
    localStorage.getItem("selectedStyle")
      ? localStorage.getItem("selectedStyle")
      : "cnn"
  );

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
    <InformedContext.Provider
      value={{ setRedirectSelection, redirectSelection, redirect }}
    >
      <BrowserRouter>
        <VisibilityRedirect />
        <Header redirectSelection={redirectSelection} />
        <Overlay />
        <QuickExit redirectSelection={redirectSelection} />
        <Routes>
          <Route
            path="/"
            element={<Home redirectSelection={redirectSelection} />}
          />
          <Route
            path="/risk"
            element={<Risk redirectSelection={redirectSelection} />}
          />
        </Routes>
        <Footer redirectSelection={redirectSelection} />
      </BrowserRouter>
      //{" "}
    </InformedContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
