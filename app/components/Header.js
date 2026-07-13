import React from "react";

function Header() {
  return (
    <header>
      <p>
        <em>You're not alone.</em>
      </p>
      <label for="nav-select">Find help with </label>
      <select id="nav-select">
        <option value="risk">knowing your risk</option>
        <option value="clarity">gaining clarity</option>
        <option value="housing">safe housing</option>
        <option value="food">food</option>
        <option value="utilities">utilities</option>
        <option value="transportation">transportation</option>
        <option value="health">health and healing</option>
        <option value="immigration">imigration</option>
        <option value="addiction">substance use</option>
        <option value="legal">legal protection</option>
        <option value="kids">protecting your kids</option>
        <option></option>
      </select>
    </header>
  );
}

export default Header;
