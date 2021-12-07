import React from "react";
import "../CSS/blog.css";
import { Link } from "react-router-dom";

import digital from "../Images/digital.jpg";

function BlogSix() {
  return (
    <div>
      <header>Blog Six</header>
      <hr />
      <span>
        It is time to get organized, focused, and determined to make online
        education more equitable and accessible.
        <span> Correia, Ana-Paula</span>
      </span>
      <br />
      <br />
      <br />
      <section>
        <h1>The Digital divide Widens </h1>
        <p>From the office of the Institute of internet & justice </p>
        <br />
        <p>
          Notwithstanding the fact that the covid-19 pandemic caught the entire
          world ill prepared, the western medical system had been built for many
          years against the backbone of the affordance s of digital access. The
          National health system in the United Kingdom has been building the
          telehealth system. Besides having these affordances, the digital
          divide is still evident. For example, according to the 2018 Broadband
          Deployment Report, only 69.3% of rural areas and 64.6% of tribal areas
          had access to high-speed broadband internet that met the minimum
          benchmark set by the Federal Communications Commission (FCC). <br />{" "}
          <br />
        </p>
        <h2>A brief History</h2>
        <div class="vid">
          <iframe
            width="360"
            height="315"
            src="https://www.youtube.com/embed/ounC6NHCu0k"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          In their reflection, Tataki and Glyno highlight the impact of COVID-19
          on vulnerable employees by equating the lack of a university degree to
          increased chances of retrenchment. Moreover, these low-income earners
          usually do not have sufficient data to work from home, and their
          children do not have the data to study from home. What this means is
          that the whole family is plunged deeper into poverty when the parents
          cannot work and the children cannot study, bringing into reality the
          old saying “the richer get richer and the poorer get poorer” <br />
          <br />
        </p>
        <h2>Social distancing.</h2>
        <p>
          Reflecting on the effects of social distancing, this meant that people
          who rely on manual work like construction workers could not travel or
          do their work. Once again, these are the low-income earners who are
          affected.
        </p>
        <div class="vid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yFvlZ4zzz8M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          The October 2021 issue of PC mag highlights concerns that the
          installation of the new windows 11, whether from an ISO file, upgrade,
          or otherwise, requires a stable internet connection. Not only
          defeating Microsoft's matra on inclusivity, but such software
          requirement also widens the digital divide. It seems here Microsoft
          threw the bathing water of its mantra out of the window, together with
          their baby they named “a PC for every child”.
        </p>
        <img src={digital} />
        <p>
          In a continent where schools, hospitals, and even police stations do
          not have internet connectivity. Such development by the software giant
          further widens the digital divide.
        </p>
        <h2>Bibliography.</h2>

        <p>
          Azubuike, O.B., Adegboye, O. and Quadri, H., 2021. Who gets to learn
          in a pandemic? Exploring the digital divide in remote learning during
          the COVID-19 pandemic in Nigeria. International Journal of Educational
          Research Open, 2, p.100022.
        </p>

        <p>
          Tataki, M. and Glynos, D. 2020 ‘Digital Divide Widens’, p. 6. Can My
          PC Run Windows 11? (no date) PCMAG. Available at:
          https://www.pcmag.com/news/can-my-pc-run-windows-11 (Accessed: 12
          October 2021).
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
