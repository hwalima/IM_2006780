import React from "react";
import "../CSS/blog.css";
import { Link } from "react-router-dom";

import David from "../Images/DavidCarrierImage.jpg";

function BlogTwo() {
  return (
    <div>
      <header>Blog Two</header>
      <hr />
      <span>
        <p>The technological explosion of this last half-century, and the implied
        future are overwhelming, man is running the machines of his own
        invention… while the machine that is man… runs the risk of running
        wild:<br/><br/>Stan VanDerBeek</p>
        

      </span>
      <br/><br/>
      <section>
        <h1>C3: A collection of artwork</h1>

        <br />
        <p>
          C³ is an institution concerned with prevailing innovation and supports
          and develops projects that do not serve direct commercial interests,
          often precisely because their uncommon, novel comprehension does not
          necessarily allow for hopes of market support. <br /> <br />
        </p>
        <h2>Aura</h2>
        <div class="vid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iKuAcffzFRI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          The departing point of this analysis is the debate on the preservation
          of the original aura of the collection of the works of art by C3. The
          term aura was originally coined by Walter Benjamin, a German Jewish
          philosopher in his essay called the work of art in the age of
          mechanical reproduction. In the essay, Benjamin underpins that the
          main problem of modernity is majorly the use of “mass” in many of its
          spheres (mass media, mass commodification, mass reproduction, etc.).{" "}
          <br />
          <br />
        </p>
        <h2>Walter Benjamin</h2>
        <p>
          Drawing from Benjamin’s work, aura is a term that connotes the unique
          one-time existential experience of a work of art when situated in a
          unique position in a time era and context.
        </p>

        <p>
          By presenting various forms of medial art archived in a periodic table
          art style, C3 unlocks a democratic world of archiving which lives in a
          digital format. Also, this world is participatory by inviting the
          viewer directly into the world of the artists in the collection.
          Furthermore, entering the “periodic table” lands a user into a 3D
          game-like website that uses diegetic devices and metaphors to guides
          the user. For example, a bridge represents connections and the
          revolving sign of 19 invites participants that are 19 years of age or
          younger. This presentation is game art that is intermediated into
          internet art.
        </p>
        <div class="vid">
          <iframe
            width="360"
            height="315"
            src="https://www.youtube.com/embed/3d1JoVvbxys"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          In his article: The Work of Art in the Age of the Internet, David
          Carrier pinpoints March 2020 as the trend-setting event that
          transformed art galleries as we know them. The covid-19 pandemic has
          shifted art galleries from white cubes to online engagements for the
          comfort of couches.
        </p>

        <p>
          However, C3 has long started these online exhibitions before the Covid
          19 pandemic. The aura had long changed. This raises questions of data
          geographies. Who would have known that a collection of web art from
          Hungary Budapest could have set the trend? Moreover, will C3 be ever
          applauded for fore sighting this trend? The shift is of cause, felt
          when traditional institutes like art galleries are disturbed.
        </p>
        <img src={David} />
        <h2>What shall we say?</h2>
        <p>
          C3 has therefore traditionally sacrificed its aura to create a gallery
          without walls, where analysis is posted on fixed walls called the
          website. Would we say then, and accept, that this is the befitting
          aura, a new traditional format?
        </p>

        <p>
          In his earlier works: Wild Art (Phaidon, 2013), Carrier argues that
          this form of breakaways in the forms of art, coined wild-art, is
          fuelled by the present effect of the internet. Thus, the success of C3
          whether known as a pioneering piece of work or not is anchored by the
          affordances of the internet.
        </p>
        <div class="vid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/P_ZtPeJrke0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          For C3 it seems The original physical object is now merely the source,
          just as the author’s manuscript is the source of a novel, and the
          reproduction has become a genuine replacement for that object
        </p>
        <h2>Bibliography</h2>
        <p>
        Barbican Centre, 2020. Welcome To Digital Revolution. [video] Available at: https
          //www.youtube.com/watch?v=s6cn8xFfDIQ [Accessed 15 October 2021]
        </p>
        <p>
        Benjamin, W., 1935. The work of art in the age of mechanical reproduction (1935).
        </p>
        <p>
        Carrier, D. May 2020 ‘The Work of Art in the Age of the Internet’, p. 13.
        </p>
      </section>
      <div clas="prev">
        <Link to="/BlogOne">Prev</Link>
      </div>
      <div class="next">
        <Link to="/BlogThree">Next</Link>
      </div>
    </div>
  );
}
export default BlogTwo;
