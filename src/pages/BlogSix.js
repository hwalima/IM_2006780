import React from "react";
import "../CSS/blog.css";
import { Link } from "react-router-dom";

import digital from "../Images/inderectFlights.jpg";
import joe from "../Images/joe.jpg";
function BlogSix() {
  return (
    <div>
      <header>Blog Six</header>
      <hr />
      <span>
        <p>A sprawling landscape of layered images: Joe Hamilton.</p>
      </span>
      <br />
      <br />

      <section>
        <h1>Indirect flights</h1>
        <p>Some read it as a piece about dystopia.</p>
        <br />
        <p>
          Joe Hamilton’s ‘Indirect Flights', 2014 is a layered digital
          topography that one can pan across in a manner like Google Maps.
          Composing the base landscape with images, textures, and sometimes
          geography google map landscapes that parallax layer upon layer gives
          an illusion of depth. A user of this website gets an illusion of a
          panoramic viewpoint over the entire website.
          <br /> <br />
        </p>
        <h2>About the art.</h2>

        <iframe
          src="https://player.vimeo.com/video/111283426?h=eedd6c642d"
          width="380"
          height="350"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          <a href="https://vimeo.com/111283426">
            Joe Hamilton &ndash; Indirect Flights | Exhibition Trailer
          </a>{" "}
          from <a href="https://vimeo.com/joehamilton">Joe Hamilton</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>

        <p>
          Collaging found images of paintings and prints from online
          collections, Joe Hamilton composed 10 distinct arrangements that
          connect and cycle through to create a single, cascading piece. The
          website images collected over a series of Europe, Asia, and the Middle
          East travel could be regarded as an art gallery, only existing outside
          the confines of concrete walls and wooden linings of a traditional art
          gallery. As a user, I felt detached from the natural elements away
          from the mayhem of humanity, the same feeling one gets when they
          engage the etiquette inside an art gallery or a library. <br />
          <br />
        </p>
        <h2>Libraries.</h2>
        <p>
          Libraries open the windows of the world. As you walk along the shelves
          looking for those relevant references and trying to match up the Dewey
          decimal numbers that appeared on the computer catalog screen, you can
          stumble across other books calling out to be noticed.
        </p>

        <p>
          Perhaps that was what Joe Hamilton intended in this art space, to
          curate the art in a museum-like space. The eye captures and tries to
          relate to various images parallax at different speeds. I often paused
          and tried to search if the image exists in my own memory, or does it
          have any connotative meaning that I know of. Indirect-Flights could be
          regarded as a means of historical travel evidence, an art space, where
          we are provoked to think beyond the familiar shapes of lettering, to
          look beyond what images of objects are traditionally intended to do.
        </p>
        <img src={digital} />
        <p>
          I view the art beyond the language it was coded in and dive deeper
          into what the image might represent and try to find out as much as
          possible about the construction of each image. The textuality of
          images collected in the art piece does not necessarily sufficiently
          capture all the angles of everyday life, but they are sufficient to
          capture the variety and diversity of the wider internet culture that
          we live in as digital natives and digital immigrants.
        </p>
        <h2>Reviews.</h2>

        <p>
          Exposing the art to friends, some read it as a piece about dystopia, a
          totalitarian or post-apocalyptic work of art. I simply think that
          Hamilton intended to make a digital exploration of landscape art
          traditions, a mixture of painterly marks with a hi-res Photoshop
          collage of images.
        </p>

        <p>
          The fact that Hamilton collected his own art components and
          represented them the way he chose speaks of freedom of expression.
          However, the fact that the research of art involved pre-planned
          travels which Hamilton takes to finally meticulously layer collage
          work online as an interactive artwork sends a different message.
        </p>
        <img src={joe} />
        <p>
          It is not all artists, especially during the covid-19 pandemic, that
          have the financial privilege of flying around the world to collect
          satellite images, have time to make a website out of them, and then
          make an online gallery for the public.
        </p>
      </section>
      <div clas="prev">
        <Link to="/BlogFive">Prev</Link>
      </div>
      <div class="next">
        <Link to="/BlogSeven">Next</Link>
      </div>
    </div>
  );
}
export default BlogSix;
