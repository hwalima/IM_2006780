import React from "react";
import "../CSS/blog.css";
import { Link } from "react-router-dom";

import triggers from "../Images/triggers.png";
import rotation from "../Images/rotation.png";
import layers from "../Images/layers.png";
import myVideo from "../Images/gif.mp4";

function BlogThree() {
  return (
    <div>
      <header>Blog Three</header>
      <hr />
      <span>
        Size, perspective- large objects, when you make them too 3D, you
        dimensionalize them too much, they appear tiny, so you have to be
        careful about things like that.
        <span> Bryan Singer</span>
      </span>
      <br />
      <br />
      <br />
      <section>
        <h1>Technical reflection</h1>

        <br />
        <p>
          Enabling 3D perspective on an element makes it possible to move,
          rotate, and scale objects in 3D space. I set perspective on a parent
          element and have it affect all of its children, and the element
          itself. Both options unlock 3D transforms. In this explanation I cover
          the options I used for 3D perspective, and explain to scale elements
          on the z-axis: <br /> <br />
        </p>

        <ul class="b">
          <li>No perspective</li>
          <li>Children perspective</li>
          <li>Self-perspective</li>
          <li>Scaling along the z-axis</li>
        </ul>

        <h2>Inspiration</h2>

        <video width="360" height="315" controls>
          <source src={myVideo} type="video/mp4" />
        </video>

        <p>
          Inspired by @TatsuyaBot’s tweet on motion design, I decided to make
          similar motion cubes, but without JavaScript. However, after a while,
          the stillness of the cube fast became boring. The final iteration was
          the addition of a mouse follow script to the code. <br />
          <br />
          The whole exercise was aimed at stretching the capabilities of HTML
          and CSS in web art. The tedious process involved dozens of repeated
          lines of HTML trigger and response sections
          <br />
          <br />
        </p>
        <ul class="b">
          <li>Part 1: trigger</li>
          <li>Part 2: on hover</li>
          <li>Part 3: monitor</li>
        </ul>
        <p>
          The created 3d perspective is not 3d at all, things are flattened to
          appear as if they were two-dimensional. to set a 3d perspective, I had
          to do three things:
        </p>
        <ul class="b">
          <li>Setting a children perspective on a parent element</li>
          <li>Setting a self-perspective on an element itself</li>
          <li>Scaling along the z-axis. </li>
        </ul>
        <img src={triggers} alt="triggers"/>
        <p>
          Rotating the shape about the y axis was two-dimensional and boring.
          For a while, that was fine since the shape inside my section, and I
          wanted to set the section to sort of act like a camera. With my
          section selected, I set children's perspective, to 1000 pixels. <br />
          <br />
          The higher the value the more flattened effect I got. The lover the
          value, the more dramatic effect I got. <br />
          Here are a bunch of section blocks nothing special about them, except
          that there are a lot of them. Now the same trigger class is applied to
          each one of these section blocks. And as I rotate them, the
          perspective is what you might expect if the viewport was a camera, the
          perspective is set on the section we've set a child perspective if we
          go into the section and remove that we already know we have that
          flattening effect, nothing looks 3d because no perspective has been
          set.
        </p>
        <div class="vid">
          <iframe
            width="360"
            height="315"
            src="https://www.youtube.com/embed/LgiadQQM6mo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          Finally, the scaling along the z-axis, plain page three buttons,
          they're in a section block that section block is inside another
          section. Each of these sections is rotated along the X and the Y-axis.
          The Y-axis is the negative value of the X-axis. This created a
          complementary viewpoint
        </p>
        <img src={rotation} />
        <p>
          <h2>Z-axis</h2>
          Scaling along the z-axis works on parent elements that have children
          with varying z values. So children's perspective, great for making any
          element serve as a camera setting perspective relative to that parent
          element. Cell perspectives enable 3d controls on an element without
          setting perspective on its parent. And finally, scaling along the
          z-axis. This scales objects along the z-axis that have varying z
          values.
        </p>
        <img src={layers} />
        <h2>References</h2>
        <blockquote class="twitter-tweet">
        <p lang="und" dir="ltr">GIF <a href="https://t.co/CvFGezoDsD">pic.twitter.com/CvFGezoDsD</a></p>&mdash;
        TatsuyaM™ (@TatsuyaBot) <a
          href="https://twitter.com/TatsuyaBot/status/1119824771733049344?ref_src=twsrc%5Etfw">April 21, 2019</a>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
             
        
        
        
      </section>
      <div clas="prev">
        <Link to="/BlogTwo">Prev</Link>
      </div>
      <div class="next">
        <Link to="/BlogFour">Next</Link>
      </div>
    </div>
  );
}
export default BlogThree;
