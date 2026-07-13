import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

function MainPage() {
  return (
    <>
      <Header />
      <p>This is some test content.</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<MainPage />);

if (module.hot) {
  module.hot.accept();
}
