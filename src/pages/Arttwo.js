import React from "react";
import internetArt2 from "../CSS/internetArt2.module.css";
import { Link } from "react-router-dom";
import "../CSS/newspaper.css";

function Arttwo() {
  return (
    <div>
      <div>
        <div className="header-wrapper">
          <div className="header">
            <div className="left-blurb">
              Pac-man news: From the 1980 maze action video game.
            </div>
            <h1>
              Pac-man:
              <br />
              <wbr />
              The 24 kilobytes that changed the world.
            </h1>
            {}
            <div className="right-blurb">
              <h3>Special Edition</h3>
              Gameplay recollections varies in terms of 
              short-term enjoyment and longer-lasting
              appreciation.
            </div>
          </div>
        </div>

        <div className="separator">&nbsp;</div>
        <div className="page">
          <div className="article-group">
            <div className="promoted article">
              <h2>About Pac-man</h2>
              <p>
                Pac-Man is an action maze chase video game; the player controls
                the eponymous character through an enclosed maze. The objective
                of the game is to eat all of the dots placed in the maze while
                avoiding four colored ghosts. The video game was simple –
                Pac-Man had to eat all the power pellets, dots of energy that
                lined the corridors of a bright blue maze.
              </p>
              <p>
                <strong>
                  Retro Aesthetics, Affect, and Nostalgic curation
                </strong>
              </p>
              <p>
                Recent gaming industry data suggests that the average gamer is
                35 years old and has been playing for over 13 years. These
                patterns encouraged me to consider the extent to which gamers
                experience nostalgia when recalling distal gaming
                memories—recollections of and cravings of past experiences that
                can be attached to specific artifacts such as video, game and
                web art.
              </p>
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="article-group">
            <div className="article">
              <h2>What was on my mind?</h2>
              <p>
                Phenomena of nostalgia and retro aesthetics can be considered
                pivotal in shapeshifting culture(s) across both developed and
                developing communities. I incuded this art as a ‘re-invention’
                of the childhood, the revitalization of a moment, and the
                transmigration of a space in vintage computer games. This, I
                hope ushers back in Pacman and a soundscape that rings the bells
                of late 1980s/early 1990s computer culture).
                <br /> <br />
                <ul>
                  <li>
                    <strong>Stretching the power of CSS</strong> &mdash;
                    ...Again.
                  </li>
                  <li>
                    <strong>
                      When trying to understand digital cultures: it is as
                      important to:{" "}
                    </strong>{" "}
                    &mdash;Engage the past
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={internetArt2.center}>
        <div className={internetArt2.clipping}>
          <div className={internetArt2.circle}></div>
        </div>
        <div className={internetArt2.food}></div>
      </div>
      

      <section className={internetArt2.prev}>
        <Link to="/Art">Prev</Link>
      </section>
      <section className={internetArt2.next}>
        <Link to="/Artthree">Next</Link>
      </section>
    </div>
  );
}

export default Arttwo;
