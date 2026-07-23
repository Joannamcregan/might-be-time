import React, { useState, useEffect } from "react";

function Overlay(props) {
  function selectOption(e) {
    let redirectOptions = document.querySelectorAll(".redirect-option");
    for (let i = 0; i < redirectOptions.length; i++) {
      console.log(redirectOptions[i].checked);
      redirectOptions[i].checked = false;
    }
    setTimeout(() => {
      e.target.checked = true;
    }, 1);
  }

  return (
    <div
      id="overlay"
      // className={localStorage.getItem("selectedStyle") ? "hidden" : ""}
    >
      <div id="overlay-content">
        <h1>Safety first</h1>
        <p>
          If you need to quickly leave this page, press the X button near the
          bottom right corner of the screen and we will redirect you to a
          different website.
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
              checked={props.redirectSelection == "cnn"}
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
              checked={props.redirectSelection == "nbc"}
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
              checked={props.redirectSelection == "fox"}
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
              //   checked={
              //     props.redirectSelection == "aljazeera" ? "true" : "false"
              //   }
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="aljazeera">Al Jazeera</label>
            <br></br>
          </div>
          <span
            id="redirect-selection-okay"
            onClick={() => {
              let selection = document.querySelector(
                'input[name="redirect-selection"]:checked'
              ).value;
              props.setRedirectSelection(selection);
              localStorage.setItem("selectedStyle", selection);
              setTimeout(() => {
                document.getElementById("overlay").classList.add("hidden");
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
