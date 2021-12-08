import React from "react";
import "../CSS/blog.css";
import { Link } from "react-router-dom";
import videoGames from "../Images/videoGames.jpg";
import digital from "../Images/digital.jpg";
import arcade from "../Images/arcade.jpg";
function BlogSeven() {
  return (
    <div>
      <header>Blog Seven</header>
      <hr />
      <span>
        <p>
          Retro gives rise to feelings of nostalgia and missing the old times:
          Ronit Cytheria
        </p>
      </span>
      <br />
      <br />

      <section>
        <h1>Retro art</h1>
        <p>Bringing a nolstagic expirience in the contemporal art space </p>
        <br />
        <p>
          This website project is an attempt to bring a nostalgic experience by
          collecting various internet and digital artifacts and experiences into
          the contemporary space. While retro gamers often acted as private
          collectors of games as artifacts, contemporary gaming culture is fast
          favoring a constant exchange, storage, discussion, and manipulation of
          information about games past and present. This website pursues to
          showcase how such a collection and curation space could exist. <br />{" "}
          <br />
        </p>
        <h2>Retro artifacts </h2>
        <div class="vid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JoPiq9GXuqo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          (Ordonneau, 2019) argues that the consequences of new media and their
          manifestations in post-digital arts have deeply modified electronic
          curation, a concept that is still being built as a parallel structure
          to the prestigious walls and corridors called museums. The consumption
          of retro artifacts like a new game console, the first booting of
          Windows 95, or the first browsing experience of Netscape was
          associated with “who has it, or who got it first attitude”, and
          excitement associated with scarcity. <br />
          <br />
        </p>
        <h2>Old web today</h2>
        <p>
          A web user born in the year 2000 would not understand what was
          exciting about these fossil artifacts. I was inspired by a site called
          “old web today” that takes you back to the days of dial-up internet
          while using some of the web’s earliest browsers, like Mosaic, Netscape
          Navigator, and Internet Explorer 3.0.
          <img src={arcade} />
        </p>

        <p>
          In his book Game -After a cultural study, Guins (2014) Guins summons
          us to a train of thought where well-lived memories of arcade gaming
          and gaming art are catapulted to the digital ecospheres, more often
          without the documentation of what is lost in the translation. As I
          capture snippets of some of the retro digital artifacts, I seek to
          provoke the user into the imagination of what might have been lost in
          memory. What is still known about the artists?
        </p>

        <p>
          This project intends to experiment on the nostalgia created when old
          and new artifacts blend into each other to create a new aesthetic
          while capturing the digital experience before the dawn of the new
          millennium. I want this to be a cut and paste curation of -retro
          digital media aesthetic. When a user of this website views the Windows
          95 for example, there is a tendency to mentally compare the snippet of
          the 1995 based operating system to what they might know better: (a
          Windows 10 dominated computing world)
        </p>
        <img src={videoGames} />
        
        <h2>Bibliography.</h2>

        <p>
          AGuins, R., 2014. Game after: A cultural study of video game afterlife. MIT Press.
        </p>

        
      </section>
      <div clas="prev">
        <Link to="/BlogSix">Prev</Link>
      </div>
      <div class="next">
        <Link to="/BlogEight">Next</Link>
      </div>
    </div>
  );
}
export default BlogSeven;
