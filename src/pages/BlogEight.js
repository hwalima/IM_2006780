import React from "react";
import "../CSS/blog.css";
import { Link } from "react-router-dom";

import folders from "../Images/folders.png";
import structure from "../Images/structure.png";
import indexHtml from "../Images/indexhtml.png";
import indexjs from "../Images/indexjs.png";
import appjs from "../Images/appjs.png";
import routing from "../Images/routing.png";
import internetartmodule from "../Images/internetartmodule.png";
import classname from "../Images/classname.png";

function BlogEight() {
  return (
    <div>
      <header>Blog Eight</header>
      <hr />
      <span>
        <p>
          {" "}
          We have to stop optimizing for programmers and start optimizing for
          users: Jeff Atwood"
        </p>
      </span>
      <br />

      <br />
      <section>
        <h1>Project Technical reflection</h1>
        <p>Scope </p>
        <br />
        <p>
          Herein, I will highlight the crucial parts of the technical process of
          the entire project, not being specific to the four pieces of art since
          the entire project is an art piece in int own regard. The project has
          15 .js pages. an addition of theapp.js and the index.js made the total
          pages 17. In addition, the Index.htm page that houses the root id sits
          in the public folder.
          <br /> <br />
        </p>
        <h2>Folders</h2>
        <img src={folders} />

        <h2>The structure</h2>
        <img src={structure} />
        <h2>The Index.html</h2>
        <p>
          This file is created by default the first time running npm
          create-react-app my-app
          <br />
          <br />
        </p>
        <img src={indexHtml} />

        <p>
          The same applies to the index.js file
          <br />
          <br />
        </p>
        <img src={indexjs} />
        <h2>Major problems encountered.</h2>
        <p>
          Next, was the population of the app.js with routing. This was a lot of
          back and from, as the pages that were not routed correctly could not
          be reached.
        </p>
        <p>
          The challenge I faced with this page was that BrowserRouter did not
          render the HTML page on npm start. The same applied when the project
          was deployed on GitHub. As much as the site was working, a blank page
          displayed, unless I begin reaching a link. To counter this, I
          researched and found out that adding the # character to every page by
          using FHashRouter resolves the issue. My final app.js page looked like
          this.
        </p>
        <img src={appjs} />

        <p>
          Moving on to the pages. To correctly reach pages, they had to be
          correctly routed according to the folders that they existed in.
          Firstly, I wanted to separate blogs from the art pieces, this left the
          home page and the contact page out. This, although the most
          recommended way, proved extremely difficult. A folder called pages,
          blogs, or art will be added by reacting as I navigated in and out of
          pages. The final routing was as follows:
        </p>
        <img src={routing} />
        <p>
          <h2>The Pages</h2>
          The four art pieces run separate codes, CSS styling, and exist as
          different js files. The challenge I had was styling the pages
          differently, as an applied style affected the entire project. After
          digging around, I discovered that the separate CSS stylesheets must be
          used as modules, especially when elements call for different classes.
          Having .li or h1 p on different pages was resolved by using modules.
          Modules then require the use of ClassName as compared to Class. This
          then creates a unique ID, which cannot be recreated in the entire
          project.
        </p>
        <h2>CSS modules</h2>
        <img src={internetartmodule} />
        <img src={classname} />
      </section>
      <div clas="prev">
        <Link to="/BlogSeven">Prev</Link>
      </div>
      <div class="next">
        <Link to="/Blogs">Next</Link>
      </div>
    </div>
  );
}
export default BlogEight;
