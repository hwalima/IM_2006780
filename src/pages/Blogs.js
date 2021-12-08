import React from "react";
import "../CSS/Blogmain.css";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div>
      <main class="page-content">
        <div class="card">
          <div class="content">
            <h2 class="title">Digital Divide Widens...</h2>
            <p class="copy">
              From the office of the Institute of internet & justice{" "}
            </p>
            <button class="btn">
              {" "}
              <Link to="/BlogOne">Read more</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">C3: A collection of artwork</h2>
            <p class="copy">
            Aura is a term that connotes the unique
          one-time existential experience of a work of art.
            </p>
            <button class="btn">
              {" "}
              <Link to="/BlogTwo">Read more</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Technical  reflection</h2>
            <p class="copy">Rotating the shape about the y axis was two-dimensional and boring.</p>
            <button class="btn">
              {" "}
              <Link to="/BlogThree">Read more</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Artistic reflection</h2>
            <p class="copy">
            For me, the way the ASCII table appears as an image looks artistic.
            </p>
            <button class="btn">
              {" "}
              <Link to="/BlogFour">Read more</Link>
            </button>
          </div>
        </div>
      

      
        <div class="card">
          <div class="content">
            <h2 class="title">Code, Art?... in JavaScript</h2>
            <p class="copy">
            If Hemingway wrote JavaScript... {" "}
            </p>
            <button class="btn">
              {" "}
              <Link to="/BlogFive">Read more</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Indirect flights</h2>
            <p class="copy">
            It's landscape is composed of 'raw materials, satellite images, organic textures.
            </p>
            <button class="btn">
              {" "}
              <Link to="/BlogSix">Read more</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Project artistic reflection</h2>
            <p class="copy">The artist reflection of the whole project.</p>
            <button class="btn">
              {" "}
              <Link to="/BlogSeven">Read more</Link>
            </button>
          </div>
        </div>
        <div class="card">
          <div class="content">
            <h2 class="title">Project technical reflection</h2>
            <p class="copy">
            The code begind the hood.
            </p>
            <button class="btn">
              {" "}
              <Link to="/BlogEight">Read more</Link>
            </button>
          </div>
        </div>
        </main>
    </div>
  );
}

export default Blogs;
