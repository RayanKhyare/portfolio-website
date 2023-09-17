import "react";
import "../omega/omega.css";

import XD from "../../img/xd.svg";

import WWW from "../../img/www.svg";
import tickets from "../../img/festirap_tickets.png";

import posters from "../../img/festirap_posters.png";
import story from "../../img/festirap_story.png";

import { motion } from "framer-motion";
import festirap from "../../img/festirap.png";

export default function Festirap() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivfestirap"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">festirap.</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">UI/UX Design</p>
                <p className="bigtag">Branding</p>
              </div>
            </div>
            <p className="projectshortdescription">
              A fictive rap festival for the youth of Brussels
            </p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img
                className="projectpic1 projectpic"
                alt="omega"
                src={tickets}
              />
              <img
                className="projectpic2 projectpic"
                alt="omega"
                src={posters}
              />
              <img className="projectpic3 projectpic" alt="omega" src={story} />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={festirap} />
              <p className="sideinfodescription">
                Festirap is a fictional rap festival created for the Design 3
                course. Our goal was to create a way to teach culture and art to
                young people in precarious situations in Brussels. I chose music
                as art and rap as culture because these are the two elements
                most loved by the youth of Brussels.
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={XD} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                festirap is one of the projects I&apos;m most proud of because
                it contains what I love the most: rap, design and art! <br></br>
                <br></br>I&apos;m very happy with the final result and what I
                was able to create.
              </p>
              <div className="linkscontainer">
                <a
                  href="https://www.behance.net/gallery/153692117/festirap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="linkicon" src={WWW} alt="xd" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projectpage-mobile">
        <div className="projectpage-top">
          <div className="projectpage-top-header">
            <h2 className="projectpage-title">festirap.</h2>
            <div className="linkscontainer">
              <a
                href="https://www.behance.net/gallery/153692117/festirap"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={WWW} alt="xd" />
              </a>
            </div>
          </div>
          <p className="projectpage-smalldescription">
            A fictive rap festival for the youth of Brussels
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">UI/UX Design</p>
            <p className="bigtag">Branding</p>
          </div>
        </div>
        <p className="projectpage-description">
          Festirap is a fictional rap festival created for the Design 3 course.
          Our goal was to create a way to teach culture and art to young people
          in precarious situations in Brussels. I chose music as art and rap as
          culture because these are the two elements most loved by the youth of
          Brussels.
        </p>
        <div className="picscontainer">
          <img className="projectpic1 projectpic" alt="omega" src={tickets} />
          <img className="projectpic2 projectpic" alt="omega" src={posters} />
          <img className="projectpic3 projectpic" alt="omega" src={story} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={XD} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          festirap is one of the projects I&apos;m most proud of because it
          contains what I love the most: rap, design and art! <br></br>
          <br></br>I&apos;m very happy with the final result and what I was able
          to create.
        </p>
      </div>
    </motion.div>
  );
}
