import React from "react";
import ArtthreeCSS from '../CSS/internetArt3.module.css'
import { Link } from "react-router-dom";



function Artthree() {
  return (
      
    <div>
     <div className={ArtthreeCSS.window}>
  <div claaName={ArtthreeCSS.logo}>
    <p className={ArtthreeCSS.top}>Microsoft</p>
    <p className={ArtthreeCSS.mid}>Windows<span>XP</span></p>
    <p className={ArtthreeCSS.bottom}>Professional</p>
  </div>
  <div className={ArtthreeCSS.container}>
    <div className={ArtthreeCSS.box}></div>
    <div className={ArtthreeCSS.box}></div>
    <div className={ArtthreeCSS.box}></div>
  </div>
</div>
<section className={ArtthreeCSS.prev}><Link to="/Arttwo">Prev</Link></section>
    <section className={ArtthreeCSS.next}><Link to="/Artfour">Next</Link></section> 
    </div>
  );
}

export default Artthree;
