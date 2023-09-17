import "react";
import "./omega.css";
import Omega from "../../img/omega.png";
import XD from "../../img/xd.svg";
import JS from "../../img/js.svg";
import HTML from "../../img/html.svg";
import NODE from "../../img/node.svg";
import WWW from "../../img/www.svg";
import GITHUB from "../../img/github.svg";

import Startpage from "../../img/omega_startpage.png";
import homepage from "../../img/omega_homepage.png";
import detail from "../../img/omega_detailpage.png";

import { motion } from "framer-motion";

export default function omega() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivomega"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">OMEGA</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">UI/UX Design</p>
                <p className="bigtag">Web Developement</p>
              </div>
            </div>
            <p className="projectshortdescription">Gaming search engine</p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img
                className="projectpic1 projectpic"
                alt="omega"
                src={Startpage}
              />
              <img
                className="projectpic2 projectpic"
                alt="omega"
                src={homepage}
              />
              <img
                className="projectpic3 projectpic"
                alt="omega"
                src={detail}
              />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={Omega} />
              <p className="sideinfodescription">
                OMEGA is a project I made for the course WEB II. It is a full
                stack website where you can find information about video games
                and where you can save them in a list
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={XD} alt="xd" />
                <img className="toolimg" src={JS} alt="xd" />
                <img className="toolimg" src={HTML} alt="xd" />

                <img className="toolimg" src={NODE} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                Making my own api with NODE.JS and Express was a first time for
                me and I found it really fun to do ! <br></br>
                <br></br>I learned how to create a login system and how to make
                a full CRUD system with this project.
              </p>
              <div className="linkscontainer">
                <a
                  href="https://ehb-mct.github.io/web2-frontend-RayanKhyare/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="linkicon" src={WWW} alt="xd" />
                </a>
                <a
                  href="https://github.com/EHB-MCT/web2-frontend-RayanKhyare"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="linkicon" src={GITHUB} alt="xd" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projectpage-mobile">
        <div className="projectpage-top">
          <div className="projectpage-top-header">
            <h2 className="projectpage-title">OMEGA</h2>
            <div className="linkscontainer">
              <a
                href="https://ehb-mct.github.io/web2-frontend-RayanKhyare/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={WWW} alt="xd" />
              </a>
              <a
                href="https://github.com/EHB-MCT/web2-frontend-RayanKhyare"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={GITHUB} alt="xd" />
              </a>
            </div>
          </div>
          <p className="projectpage-smalldescription">Gaming search engine</p>
          <div className="bigtagscontainer">
            <p className="bigtag">UI/UX Design</p>
            <p className="bigtag">Web Developement</p>
          </div>
        </div>
        <p className="projectpage-description">
          OMEGA is a project I made for the course WEB II. It is a full stack
          website where you can find information about video games and where you
          can save them in a list
        </p>
        <div className="picscontainer">
          <img className="projectpic1 projectpic" alt="omega" src={Startpage} />
          <img className="projectpic2 projectpic" alt="omega" src={homepage} />
          <img className="projectpic3 projectpic" alt="omega" src={detail} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={XD} alt="xd" />
          <img className="toolimg" src={JS} alt="xd" />
          <img className="toolimg" src={HTML} alt="xd" />

          <img className="toolimg" src={NODE} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          Making my own api with NODE.JS and Express was a first time for me and
          I found it really fun to do ! <br></br>
          <br></br>I learned how to create a login system and how to make a full
          CRUD system with this project.
        </p>
      </div>
    </motion.div>
  );
}
