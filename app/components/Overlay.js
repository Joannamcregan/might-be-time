import React, { useState, useEffect, useContext } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

function Overlay(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function setRedirectSelection(destination) {
    appDispatch({ type: "setRedirectSelection" });
  }

  function selectOption(e) {
    let redirectOptions = document.querySelectorAll(".redirect-option");
    for (let i = 0; i < redirectOptions.length; i++) {
      redirectOptions[i].checked = false;
    }
    setTimeout(() => {
      e.target.checked = true;
    }, 1);
  }

  return (
    <div
      id="overlay"
      className={localStorage.getItem("selectedStyle") ? "hidden" : ""}
    >
      <div id="overlay-content">
        <h1>Safety first</h1>
        <p>
          If you need to quickly leave this page, Exit button near the bottom
          right corner of the screen and we will redirect you to a different
          website.
        </p>
        <p>
          We will also try to redirect you if we notice any sudden jerking
          movements from your mobile device. If you are using an iPhone, please
          click{" "}
          <span id="safari-permission" className="underline">
            here
          </span>{" "}
          so we can prompt you to give us permission to access information about
          your device's motions.
        </p>
        <div id="redirect-options-section">
          <p>
            If we need to redirect you, we would like to send you to a website
            that you would normally visit. Please select one of the following
            options.
          </p>
          <div id="redirect-selection-options">
            <input
              type="radio"
              id="cnn"
              name="redirect-selection"
              checked={appState.styleSelection == "cnn"}
              value="cnn"
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="cnn">CNN</label>
            <br></br>
            <input
              type="radio"
              id="nbc"
              name="redirect-selection"
              value="nbc"
              checked={appState.styleSelection == "nbc"}
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="nbc">NBC News</label>
            <br></br>
            <input
              type="radio"
              id="fox"
              name="redirect-selection"
              value="fox"
              checked={appState.styleSelection == "fox"}
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="fox">Fox News</label>
            <br></br>
            <input
              type="radio"
              id="aljazeera"
              name="redirect-selection"
              value="aljazeera"
              checked={appState.styleSelection == "aljazeera"}
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="aljazeera">Al Jazeera</label>
            <br></br>
          </div>
          <span
            id="redirect-selection-okay"
            onClick={() => {
              let selectedName = document.querySelector(
                'input[name="redirect-selection"]:checked'
              ).value;
              console.log("starting off, the selection is " + selectedName);
              setRedirectSelection(selectedName);
              localStorage.setItem("selectedStyle", selectedName);
              setTimeout(() => {
                console.log(
                  "in the set timeout, the selectedName is " + selectedName
                );
                document.getElementById("overlay").classList.add("hidden");
                if (selectedName == "nbc") {
                  document
                    .getElementById("favicon")
                    .setAttribute("href", "../img/icon_heart_nbc.png");
                } else if (selectedName == "fox") {
                  document
                    .getElementById("favicon")
                    .setAttribute("href", "../img/icon_heart_fox.png");
                } else if (selectedName == "aljazeera") {
                  document
                    .getElementById("favicon")
                    .setAttribute("href", "../img/icon_heart_aljazeera.png");
                } else if (selectedName == "cnn") {
                  document
                    .getElementById("favicon")
                    .setAttribute("href", "../img/icon_heart_cnn.png");
                }
                window.scrollTo(0, 0);
              }, 200);
            }}
          >
            Okay
          </span>
        </div>
        <p>
          <em>
            <span>It's a good idea to clear your </span>
            <a
              href="https://www.privacyguides.org/articles/2025/02/13/clearing-browsing-data/#clearing-browsing-data-on-safari"
              target="_blank"
            >
              browsing
            </a>
            <span> and </span>
            <a
              href="https://www.security.org/digital-safety/search-history/"
              target="_blank"
            >
              search
            </a>
            <span>
              {" "}
              histories any time you are looking up information about DV or
              abuse.
            </span>
          </em>
        </p>
      </div>
    </div>
  );
}

export default Overlay;
