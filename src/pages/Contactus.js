import React from "react";
import contactCSS from "../CSS/contact.css";

function Contactus() {
  return (
    <div class='container1'>
      <div class="noise"></div>
      <div class="overlay"></div>
      <div class="terminal">
        <h1>
          Error: <span class="errorcode">No contacts....</span>
        </h1>
        <p class="output">
          {" "}
          Dialup connection fault....
        </p>
        <p class="output">
          Please connect again after putting down the phone.
        </p>
      </div>
    </div>
  );
}

export default Contactus;
