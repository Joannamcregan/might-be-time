import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Risk from "./components/Risk";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  const [redirectSelection, setRedirectSelection] = useState("cnn");

  return (
    <BrowserRouter>
      <Header redirectSelection={redirectSelection} />
      <Overlay
        redirectSelection={redirectSelection}
        setRedirectSelection={setRedirectSelection}
      />
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
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
