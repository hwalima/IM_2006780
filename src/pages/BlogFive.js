import React from "react";
import "../CSS/blog.css";
import { Link } from "react-router-dom";

import digital from "../Images/hemingway.png";
import Angus from "../Images/angus.jpg";
import Code from "../Images/code.jpeg";
import Andrew from "../Images/andrew.png";
function BlogFive() {
  return (
    <div>
      <header>Blog Five</header>
      <hr />
      <span style={{ textAlign: "center" }}>
        <p>
          All the best writers . . . have been amongst the flagrant flouters.
          :Steven Pinker.
        </p>
      </span>
      <br />
      <br />

      <section>
        <h1> Code, Art?... in JavaScrip</h1>
        <p>If Hemingway wrote JavaScript... </p>
        <br />
        <p>
          For a long time, software development languages designers have pursued
          to match the naturality of the written and spoken word, especially in
          the English language. Quality management standards like the
          BS5740/ISO9001, a key technology for Europe since 1990 have been
          dominantly used as yardsticks to measure the quality of programming
          language. This again is based on English-centric ideologies and
          standards. The relevance of BS5750/ISO9001 is limited and suggests
          that standards bodies must develop and endorse standards that ensure
          that software quality improvement programs are within the
          English-centric ideas, a trajectory that excludes many technology
          communities around the world. continue to be adopted by the
          information technology industry.
          <br /> <br />
        </p>
        <h2>(Croll, 2014) </h2>
        <img src={Angus} />
        <p>
          In If Hemingway wrote JavaScript, (Croll, 2014) writes hilariously and
          beautifully while presenting thought-provoking facts that call for
          scholarly engagement. Croll puts forward that there exist the domains
          of natural language and the JavaScript domain, which both have no
          dominant paradigms. From the global south, the question arises: what
          is natural, and which “natural language” paradigm dominates the other
          paradigms?
        </p>
        <iframe
          width="380"
          height="315"
          src="https://www.youtube.com/embed/G1fFCnjThCQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <p>
          Let us then reject the dry and narrow confines of computer science
          classes, Croll encourages. Form and creativity seem to supersede
          functionality and predictability in JavaScript. I prose to concur with
          Croll, like social sciences, the aspects of culture and liberal arts
          are often sidelined when it comes to the whys and whats of developing
          programming languages and the technology industries at large. Scholars
          in the social sciences discipline for example, might be more
          open-minded in technology solution development, the same way artist
          might be. <br />
          <br />
        </p>
        <h2>Excluding the artist</h2>
        <p>
          The history-long exclusion of the artist from the code for example has
          had scholars whispering again. When the users of Blender as a 3D
          sculpting software are excluded from the development of the software,
          the effects might be rigid and limiting software presented to the
          artist. generative reproduction is the use of initial affordances and
          constraints of computer software in the reproduction of art. This
          concept situates the computer as the primary tool available to produce
          a body of artifacts, diverse from each other yet somehow linked
          together as if it were with a fundamental DNA structure. Although the
          production of artifacts might be from the same software, the
          underlying differences from one version to another are brought by the
          agency that the artists who use the software have.
        </p>
        <img src={Code} />

        <p>
          The written code in programming languages behind the software then
          becomes a systematic structure for art. The plasticity of the software
          that manifests through appropriate hardware can be manipulated to
          produce artifacts that draw from a striking resemblance of a painters'
          hand, the grain of the canvas, and the brush strokes. Most art
          inclined software seeks to resemble the artist’s pre-electronic era
          (Verostko, 1990). By outlining the prerequisites (software and
          hardware) of the generative reproduction of art, we begin to raise
          salient questions about the writing and writers of the code which then
          produces the software.
        </p>
        <p>
          In the same manner, Ernest Hemingway’s style of writing seeks to
          provoke the user to fill the vacuum that is left by a style devoid of
          emotions, JavaScript seeks to invite the programmer to fill the
          source-code editor with lines of artistic code, lines of ‘let’s break
          the barrier’ experimentations.
          <img src={Andrew} />
        </p>
        <p>
          How far can the JavaScript artist be creative, within the confines of
          an English language drive programming language is the question. So,
          JavaScript breaks, and frameworks start supporting it. Why wouldn’t
          the world’s programmers nt throw it away why would they support
          something that was erratic? I guess the answer is: because of the
          artistic nature of the language.
        </p>
        <iframe
          width="380"
          height="300"
          src="https://www.youtube.com/embed/MBmmZADfVSQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>From Hemingway to Shakespeare</h2>
        <p>
          By adding dramatic emphasis to written work, William Shakespeare often
          deviated from strict writing. His works often filled the dramatic
          emphasis for the reader, inviting all senses and drawing the reader to
          an imagination continuum. There is heavy levity in Shakespeare’s
          works, as there is in JavaScript.
        </p>
        <img src={digital} />
        <p>
          The way JavaScript mitigates code conflict is similar to the manner
          Shakespeare channelled plays and poems and towards an expected end,
          using humorous supporting acts.
        </p>
        <h2>Bibliography.</h2>

        <p>Croll, A., 2014. If Hemingway wrote JavaScript. No Starch Press.</p>

        <p>
          Verostko, R., 1990. Epigenetic painting: software as genotype.
          Leonardo, 23(1), pp.17-23.
        </p>
      </section>
      <div clas="prev">
        <Link to="/BlogFour">Prev</Link>
      </div>
      <div class="next">
        <Link to="/BlogSix">Next</Link>
      </div>
    </div>
  );
}
export default BlogFive;
