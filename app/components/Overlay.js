import React from "react";

function Overlay() {
  return (
    <div id="overlay">
      <h1>We use safety precautions to protect our visitors</h1>
      <p>
        If you need to quickly leave this page, press the X button near the
        bottom right corner of the screen and we will redirect you to a
        different website.
      </p>
      <p>
        We will also redirect you to a different site if you minimize the
        browser or navigate away from this browser tab.
      </p>
      <p>
        We will try to redirect you if we notice any sudden jerking movements
        from your mobile device. Please note: this feature has only been tested
        successfully with Chrome, Firefox, Opera, and Duck Duck Go browsers. To
        enable this feature for Safari, please click
        <span id="safari-permission">here</span> so we can prompt you to give us
        permission to access information about your device's motions. This
        feature does not work in Brave browser.
      </p>
      <p>
        <em>
          It's a good idea to clear your
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
            histories any time you are looking up information about DV or abuse.
          </span>
        </em>
      </p>
      <p>
        If we need to redirect you, we would like to send you to a website that
        it would make sense for you to be visiting. Please select one of the
        following options.
      </p>
      <div>
        <input type="radio" id="cnn" name="redirect-selection" value="cnn" />
        <label for="cnn">CNN</label>
        <br></br>
        <input type="radio" id="nbc" name="redirect-selection" value="nbc" />
        <label for="nbc">NBC</label>
        <br></br>
        <input type="radio" id="fox" name="redirect-selection" value="fox" />
        <label for="fox">Fox News</label>
        <br></br>
        <input
          type="radio"
          id="aljazeera"
          name="redirect-selection"
          value="aljazeera"
        />
        <label for="aljazeera">Al Jazeera</label>
        <br></br>
        <input type="radio" id="espn" name="redirect-selection" value="espn" />
        <label for="espn">ESPN</label>
        <br></br>
        <input
          type="radio"
          id="yahoo"
          name="redirect-selection"
          value="yahoo"
        />
        <label for="yahoo">Yahoo</label>
        <br></br>
        <input
          type="radio"
          id="bible"
          name="redirect-selection"
          value="bible"
        />
        <label for="bible">Online Bible</label>
        <br></br>
        <input
          type="radio"
          id="quran"
          name="redirect-selection"
          value="quran"
        />
        <label for="quran">Online Quran</label>
        <br></br>
        <input
          type="radio"
          id="torah"
          name="redirect-selection"
          value="torah"
        />
        <label for="torah">Online Torah</label>
        <br></br>
      </div>
      <button>Okay</button>
    </div>
  );
}

export default Overlay;
