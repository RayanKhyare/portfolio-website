import "react";
import "../omega/omega.css";
import finalshowlogo from "../../img/finalshow.png";

import Illustrator from "../../img/illustrator.svg";
import WWW from "../../img/www.svg";

import youtube from "../../img/youtube.svg";

import loading from "../../img/finalshow_loading.png";
import set from "../../img/finalshow_set.png";
import category from "../../img/finalshow_category.png";

import { motion } from "framer-motion";

export default function finalshow() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivfinalshow"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">Final Show</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">Storytelling</p>
                <p className="bigtag">Script</p>
              </div>
            </div>
            <p className="projectshortdescription">
              A show hosted by the students of Multimedia & Creative
              Technologies
            </p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img className="projectpic2 projectpic" alt="omega" src={set} />
              <img
                className="projectpic3 projectpic"
                alt="omega"
                src={category}
              />
              <img
                className="projectpic1 projectpic"
                alt="omega"
                src={loading}
              />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={finalshowlogo} />
              <p className="sideinfodescription">
                Final show is a show we created for the Full Projects course.
                The goal was to organize a TV show that awards the best projects
                for each category in the course. <br></br>
                <br></br>The students were divided into groups and had their own
                assignments and objectives. I was placed in the editorial and
                studio group, where I had to write the script of the show,
                manage the set and how everything would unfold.
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={Illustrator} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                Final show is one of the projects I found the most complicated
                to manage. It was a first for me to write such a big script and
                at the beginning I had a lot of stress and worries. From the 2nd
                week of work I devoted all my time to it and it paid off.
                <br></br>
                <br></br>
                The show went well, all the guests were well informed and the
                whole event was impeccable.
              </p>
              <div className="linkscontainer">
                <a href="http://finalshow.be/" target="_blank" rel="noreferrer">
                  <img className="linkicon" src={WWW} alt="www" />
                </a>
                <a
                  href="https://youtu.be/3ma-ysVo9Lw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="linkicon youtube"
                    src={youtube}
                    alt="youtubelogo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projectpage-mobile">
        <div className="projectpage-top">
          <div className="projectpage-top-header">
            <h2 className="projectpage-title">Final Show</h2>
            <div className="linkscontainer">
              <a href="http://finalshow.be/" target="_blank" rel="noreferrer">
                <img className="linkicon" src={WWW} alt="www" />
              </a>
              <a
                href="https://youtu.be/3ma-ysVo9Lw"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="linkicon youtube"
                  src={youtube}
                  alt="youtubelogo"
                />
              </a>
            </div>
          </div>
          <p className="projectpage-smalldescription">
            A show hosted by the students of Multimedia & Creative Technologies
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">Storytelling</p>
            <p className="bigtag">Script</p>
          </div>
        </div>
        <p className="projectpage-description">
          Final show is a show we created for the Full Projects course. The goal
          was to organize a TV show that awards the best projects for each
          category in the course. <br></br>
          <br></br>The students were divided into groups and had their own
          assignments and objectives. I was placed in the editorial and studio
          group, where I had to write the script of the show, manage the set and
          how everything would unfold.
          <br></br>
        </p>
        <div className="picscontainer">
          <img className="projectpic2 projectpic" alt="omega" src={set} />
          <img className="projectpic3 projectpic" alt="omega" src={category} />
          <img className="projectpic1 projectpic" alt="omega" src={loading} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={Illustrator} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          Final show is one of the projects I found the most complicated to
          manage. It was a first for me to write such a big script and at the
          beginning I had a lot of stress and worries. From the 2nd week of work
          I devoted all my time to it and it paid off.
          <br></br>
          <br></br>
          The show went well, all the guests were well informed and the whole
          event was impeccable.
        </p>
      </div>
    </motion.div>
  );
}
