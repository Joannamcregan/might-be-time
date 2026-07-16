import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Food from "./components/Food";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Overlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food-security" element={<Food />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
