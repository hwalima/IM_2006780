import React from "react";
import internetArt2 from "../CSS/internetArt2.module.css"
import { Link } from "react-router-dom";


function Arttwo() {
  return (
    <div>
   
    <div>Pacman</div>
    
     <div className={internetArt2.center}>
      <div className={internetArt2.clipping}>
        <div className={internetArt2.circle}></div>
      </div>
      <div className={internetArt2.food}></div>
    </div>
    
    <section className={internetArt2.prev}><Link to="/Art">Prev</Link></section>
    <section className={internetArt2.next}><Link to="/Artthree">Next</Link></section> 
    
    </div>
  );
}

export default Arttwo;
