import React from "react";
import "../CSS/blog.css";
import { Link } from "react-router-dom";

import ascii01 from "../Images/ascii01.png";
import lathe from "../Images/lathe.png";
import asciiart from "../Images/asciiart.png";


function BlogFour() {
  return (
    <div>
      <header>Blog Four</header>
      <hr />
      <span>
        First we thought the PC was a calculator. Then we found out how to turn
        numbers into letters with ASCII- and thought it was a typewritter. Then
        we discovered graphics, and thought it was a television. With the World
        Wide Web, we've realised its a brochure.
        <span>Douglas Adams</span>
      </span>
      <br />
      <br />
      <br />
      <section>
        <h1>Artistic reflection</h1>

        <br />
        <p>
          Running under the popular Ad Reinhardt quote: “Art is art. Everything
          else is everything else.” I seek to make a website whose various
          components are art in nature. Starting with the footer that represents
          escaping gas, I began with many ideas on how to stretch the
          capabilities of CSS in web art making.
          <br /> <br />
        </p>

        <h2>Inspiration</h2>
        <img src={ascii01} />

        <p>
          One of the most fascinating milestones in internet and digital
          technology is the ASCII table. ASCII, abbreviation of American
          Standard Code for Information Interchange, is a standard
          data-transmission code that is used by smaller and less-powerful
          computers to represent both textual data (letters, numbers, and
          punctuation marks) and noninput-device commands (control characters).
          <br />
          <br />
          For me, the way the ASCII table appears as an image looks artistic.
          Adding on the artistic components of the website like the footer, I
          wish to experiment with the art of ASCII. as a web user that comes
          from the dial up internet age, the various images of the ASCII table
          are nostalgic.
          <br />
          <br />
          <img src={lathe} />
        </p>

        <p>
          Expanding on basic ASCII art like the endless horse by Colleen
          Josephson and Kyle Miller, this website will be a combination of Image
          based SCII -art, pseudo-Art and Command line Art. The art will be
          mainly substitutions of images with the characters available in the
          ASCII table. this will create a calligraphy collection, treating a
          collection of brushstrokes as typography.
        </p>
        <div class="vid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RK1M94g6YpQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <h2>Final thought</h2>
        <p>
          The final vision of the website is to allow the coexistence of artistic
          elements of the website, at the same time creating a nostalgic effect
          with art.
        </p>
        <img src={asciiart} />
        
        <h2>References</h2>
        <p>https://www.asciiart.eu/</p><br/><br/>
      <p>https://en.m.wikipedia.org/wiki/File:ASCII-Table-wide.svg</p><br/><br/>
      <p>https://www.artstation.com/artwork/Yak5gd</p>
      </section>
      <div clas="prev">
        <Link to="/BlogThree">Prev</Link>
      </div>
      <div class="next">
        <Link to="/BlogFive">Next</Link>
      </div>
    </div>
  );
}
export default BlogFour;
