import React from "react";
import artfourCSS from "../CSS/artfour.module.css";
import { Link } from "react-router-dom";

function Artfour() {
  return (
    <div >
      <div className={artfourCSS.container}>
        <div className={artfourCSS.left}>
          <div className={artfourCSS.fant}>
            <div className={artfourCSS.f1}>
              <div className={artfourCSS.ojos}></div>
              <div className={artfourCSS.ojos3}></div>
            </div>
          </div>
        </div>
        <div className={artfourCSS.right}>
          <div className={artfourCSS.f2}>
            <div className={artfourCSS.ojos}></div>
            <div className={artfourCSS.ojos3}></div>
          </div>
        </div>
        <div className={artfourCSS.pacman}>
          <div className={artfourCSS.boca}></div>
          <div className={artfourCSS.top}></div>
          <div className={artfourCSS.bot}></div>
          <div className={artfourCSS.eye}></div>
          <div className={artfourCSS.eye3}></div>
        </div>
        <div className={artfourCSS.circ}></div>
      </div>
      ​
      <section className={artfourCSS.prev}>
        <Link to="/Artthree">Prev</Link>
      </section>
      <section className={artfourCSS.next}>
        <Link to="/Art">Next</Link>
      </section>
    </div>
  );
}

export default Artfour;
