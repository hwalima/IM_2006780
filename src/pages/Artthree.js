import React from "react";
import "../CSS/xpstyle.css";
import { Link } from "react-router-dom";
import Desktop from "../components/desktop";
import Taskbar from "../components/taskbar/Taskbar";

export default function Artthree() {
  return (
    <div className="App">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AjWgWONuHEI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Desktop />
      <Taskbar />

      <section class="prev">
        <Link to="/Arttwo">Prev</Link>
      </section>
      <section class="next">
        <Link to="/Artfour">Next</Link>
      </section>
    </div>
  );
}
