import "react";
import "../omega/omega.css";

import WWW from "../../img/www.svg";

import threerayan from "../../img/threejs_thumbnail.png";
import three1 from "../../img/threejs.png";
import three2 from "../../img/three2.png";

import Reactlogo from "../../img/react.svg";

import { motion } from "framer-motion";

export default function threejs() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivthreejs"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">3Rayan</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">3D</p>
                <p className="bigtag">Web Development</p>
              </div>
            </div>
            <p className="projectshortdescription">3D-name made in ThreeJS</p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img
                className="projectpic2 projectpic"
                alt="omega"
                src={three1}
              />
              <img
                className="projectpic3 projectpic"
                alt="omega"
                src={three2}
              />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={threerayan} />
              <p className="sideinfodescription">
                3Rayan is an environment I created with my name in 3d surrounded
                by elements representing me.
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={Reactlogo} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                I found ThreeJS interesting to use because the technology offers
                an infinity of possibilities. I will surely use it in future
                projects as the technology becomes more and more used in modern
                websites.
              </p>
              <div className="linkscontainer">
                <a
                  href="https://3dtext-rayankhyare-cyan.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="linkicon" src={WWW} alt="www" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projectpage-mobile">
        <div className="projectpage-top">
          <div className="projectpage-top-header">
            <h2 className="projectpage-title">3Rayan</h2>
            <div className="linkscontainer">
              <a
                href="https://3dtext-rayankhyare-cyan.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={WWW} alt="www" />
              </a>
            </div>
          </div>
          <p className="projectpage-smalldescription">
            3D-name made in ThreeJS
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">3D</p>
            <p className="bigtag">Web Development</p>
          </div>
        </div>
        <p className="projectpage-description">
          3Rayan is an environment I created with my name in 3d surrounded by
          elements representing me.
        </p>
        <div className="picscontainer">
          <img className="projectpic2 projectpic" alt="omega" src={three1} />
          <img className="projectpic3 projectpic" alt="omega" src={three2} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={Reactlogo} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          I found ThreeJS interesting to use because the technology offers an
          infinity of possibilities. I will surely use it in future projects as
          the technology becomes more and more used in modern websites.
        </p>
      </div>
    </motion.div>
  );
}
