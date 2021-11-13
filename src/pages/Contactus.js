import React from "react";
import  contactCSS from '../CSS/contact.module.css'


function Contactus() {
  return (
    
    <div className={contactCSS.container}>
      <div className={contactCSS.noise}></div>
<div className={contactCSS.overlay}></div>
<div className={contactCSS.terminal}>
  <h1>Error: <span class={contactCSS.errorcode}>No contacts</span></h1>
  <p className={contactCSS.output}> The contacts you desire are unavailable at the moment.</p>
  <p className={contactCSS.output}>Please try to  return to the Home page</p>
  
  </div>
   
    </div>
   
  );
}

export default Contactus;
