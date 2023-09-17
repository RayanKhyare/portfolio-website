// import { useState } from "react";
import "./portfolio.css";

import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import { MouseParallax } from "react-just-parallax";

import threejs from "../../img/threejs_thumbnail.png";
import chatrix from "../../img/chatrix.png";
import quizapp from "../../img/quizapp.png";
import festirap from "../../img/festirap.png";
import streamredesign from "../../img/steam_thumbnail.png";
import finalshow from "../../img/finalshow.png";
import omega from "../../img/omega_thumbnail.png";
import learnify from "../../img/learnify_thumbnail.png";
import funkymood from "../../img/funkymood_thumbnail.png";
import kunstinhuis from "../../img/kunstinhuis_thumbnail.png";

// import projectsData from "./projectsData";

export default function Portfolio() {
  // const [activeFilter, setActiveFilter] = useState("all");

  // const filters = ["all", "web", "design", "other"];

  // const handleFilterClick = (filter) => {
  //   setActiveFilter(filter);
  // };

  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MouseParallax
        className="parallaxeffect "
        parallaxContainerRef
        strength="0.1"
      >
        <div className="projectscontainer portfolio-desktop">
          {/* <div className="projectfilters">
            {filters.map((filter) => (
              <p
                key={filter}
                className={`filter ${activeFilter === filter ? "active" : ""}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter === "all"
                  ? "All"
                  : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </p>
            ))}
          </div> */}
          <div className="project web">
            <div className={`project web`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/threejs`}>
                  <img className="projectimg" src={threejs} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">3Rayan</h2>
                    <div className="tagcontainer">
                      <p className="tag">3D</p>
                      <p className="tag">Web development</p>
                    </div>
                  </div>
                  <p className="shortdescription">3D-name made in ThreeJS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project web">
            <div className={`project web`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/chatrix`}>
                  <img className="projectimg" src={chatrix} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">chatrix</h2>
                    <div className="tagcontainer">
                      <p className="tag">Web development</p>
                      <p className="tag">UI Design</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    A live chat app made to test web sockets
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project web">
            <div className={`project web`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/quizapp`}>
                  <img className="projectimg" src={quizapp} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">Ask & Learn</h2>
                    <div className="tagcontainer">
                      <p className="tag">Web development</p>
                      <p className="tag">UI Design</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    A quiz app to play with your friends
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project design">
            <div className={`project design`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/festirap`}>
                  <img className="projectimg" src={festirap} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">festirap.</h2>
                    <div className="tagcontainer">
                      <p className="tag">Branding</p>
                      <p className="tag">UI/UX Design</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    A fictif rap festival for the youth of Brussels
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project web">
            <div className={`project web`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/steamredesign`}>
                  <img className="projectimg" src={streamredesign} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">Steam redesign</h2>
                    <div className="tagcontainer">
                      <p className="tag">Web development</p>
                      <p className="tag">UI/UX Design</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    A redesign of the most famous video game distribution
                    service
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project other">
            <div className={`project other`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/finalshow`}>
                  <img className="projectimg" src={finalshow} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">Final Show</h2>
                    <div className="tagcontainer">
                      <p className="tag">Storytelling</p>
                      <p className="tag">Script</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    A show hosted by the students of Multimedia & Creative
                    Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project web">
            <div className={`project web`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/omega`}>
                  <img className="projectimg" src={omega} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">OMEGA</h2>
                    <div className="tagcontainer">
                      <p className="tag">UI/UX Design</p>
                      <p className="tag">Web Development</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    A modern and performing gaming search engine
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project web">
            <div className={`project web`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/learnify`}>
                  <img className="projectimg" src={learnify} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">Learnify</h2>
                    <div className="tagcontainer">
                      <p className="tag">UI/UX Design</p>
                      <p className="tag">Web Development</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    A new way to make online lessons less boring
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project design">
            <div className={`project design`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/funkymood`}>
                  <img className="projectimg" src={funkymood} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">Funky mood</h2>
                    <div className="tagcontainer">
                      <p className="tag">Branding</p>
                      <p className="tag">Concept</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    Innovating the art of gifting mixtapes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project design">
            <div className={`project design`}>
              <div className="projectcard">
                <NavLink to={`/portfolio/kunstinhuis`}>
                  <img className="projectimg" src={kunstinhuis} />
                </NavLink>
                <div className="bottomtext">
                  <div className="bottomtoptext">
                    <h2 className="projectname">Kunst In Huis</h2>
                    <div className="tagcontainer">
                      <p className="tag">Branding</p>
                      <p className="tag">UI/UX Design</p>
                      <p className="tag">Prototyping</p>
                    </div>
                  </div>
                  <p className="shortdescription">
                    Rebranding of Kunst In Huis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MouseParallax>

      <div className="portfolio-mobile">
        {/* <div className="projectfilters">
          {filters.map((filter) => (
            <p
              key={filter}
              className={`filter ${activeFilter === filter ? "active" : ""}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter === "all"
                ? "All"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </p>
          ))}
        </div> */}
        <div className="project web">
          <div className={`project web`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/threejs`}>
                <img className="projectimg" src={threejs} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">3Rayan</h2>
                  <p className="shortdescription">3D-name made in ThreeJS</p>
                  <div className="tagcontainer">
                    <p className="tag">3D</p>

                    <p className="tag">Web development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project web">
          <div className={`project web`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/chatrix`}>
                <img className="projectimg" src={chatrix} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">chatrix</h2>
                  <p className="shortdescription">
                    A live chat app made to test web sockets
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">Web development</p>
                    <p className="tag">UI Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project web">
          <div className={`project web`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/quizapp`}>
                <img className="projectimg" src={quizapp} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">Ask & Learn</h2>
                  <p className="shortdescription">
                    A quiz app to play with your friends
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">Web development</p>
                    <p className="tag">UI Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project design">
          <div className={`project design`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/festirap`}>
                <img className="projectimg" src={festirap} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">festirap.</h2>
                  <p className="shortdescription">
                    A fictif rap festival for the youth of Brussels
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">Branding</p>
                    <p className="tag">UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project web">
          <div className={`project web`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/steamredesign`}>
                <img className="projectimg" src={streamredesign} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">Steam redesign</h2>
                  <p className="shortdescription">
                    A redesign of the most famous video game distribution
                    service
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">Web development</p>
                    <p className="tag">UI/UX Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project other">
          <div className={`project other`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/finalshow`}>
                <img className="projectimg" src={finalshow} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">Final Show</h2>
                  <p className="shortdescription">
                    A show hosted by the students of Multimedia & Creative
                    Technologies
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">Storytelling</p>
                    <p className="tag">Script</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project web">
          <div className={`project web`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/omega`}>
                <img className="projectimg" src={omega} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">OMEGA</h2>
                  <p className="shortdescription">
                    A modern and performing gaming search engine
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">UI/UX Design</p>
                    <p className="tag">Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project web">
          <div className={`project web`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/learnify`}>
                <img className="projectimg" src={learnify} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">Learnify</h2>
                  <p className="shortdescription">
                    A new way to make online lessons less boring
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">UI/UX Design</p>
                    <p className="tag">Web Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project design">
          <div className={`project design`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/funkymood`}>
                <img className="projectimg" src={funkymood} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">Funky mood</h2>
                  <p className="shortdescription">
                    Innovating the art of gifting mixtapes
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">Branding</p>
                    <p className="tag">Concept</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project design">
          <div className={`project design`}>
            <div className="projectcard">
              <NavLink to={`/portfolio/kunstinhuis`}>
                <img className="projectimg" src={kunstinhuis} />
              </NavLink>
              <div className="bottomtext">
                <div className="bottomtoptext">
                  <h2 className="projectname">Kunst In Huis</h2>
                  <p className="shortdescription">
                    Rebranding of Kunst In Huis
                  </p>
                  <div className="tagcontainer">
                    <p className="tag">Branding</p>
                    <p className="tag">UI/UX Design</p>
                    <p className="tag">Prototyping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
