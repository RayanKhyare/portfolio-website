import "../omega/omega.css";
import XD from "../../img/xd.svg";
import WWW from "../../img/www.svg";
import GITHUB from "../../img/github.svg";
import react from "../../img/react.svg";
import angular from "../../img/angular.svg";

import main from "../../img/frontend_steam.png";
import homepage from "../../img/steam_homepage.png";
import category from "../../img/steam_category.png";
import game from "../../img/steam_game.png";

import { motion } from "framer-motion";

export default function steam() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivsteam"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">Steam redesign</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">UI/UX Design</p>
                <p className="bigtag">Web Developement</p>
              </div>
            </div>
            <p className="projectshortdescription">
              A redesign of the most famous video game distribution service
            </p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img
                className="projectpic1 projectpic"
                alt="omega"
                src={homepage}
              />
              <img
                className="projectpic2 projectpic"
                alt="omega"
                src={category}
              />
              <img className="projectpic3 projectpic" alt="omega" src={game} />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={main} />
              <p className="sideinfodescription">
                For the Front-end course, we had to redesign and program a site
                that we received beforehand. I received the Steam website and
                the objective was to reprogram it with a new design in React and
                Angular.
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={XD} alt="xd" />
                <img className="toolimg" src={react} alt="xd" />
                <img className="toolimg" src={angular} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                This project was not very easy at the beginning because it was
                the first time I was using React and Angular in my life. I had
                to adapt quickly and I think the result is a success. <br></br>
                <br></br>It&apos;s thanks to this project that I learned to love
                and continue with React.
              </p>
              <div className="linkscontainer">
                <a
                  href="https://react-rayankhyare.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="linkicon" src={WWW} alt="xd" />
                </a>
                <a
                  href="https://github.com/EHB-MCT/react-course-project-RayanKhyare"
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
            <h2 className="projectpage-title">Steam redesign</h2>
            <div className="linkscontainer">
              <a
                href="https://react-rayankhyare.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={WWW} alt="xd" />
              </a>
              <a
                href="https://github.com/EHB-MCT/react-course-project-RayanKhyare"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={GITHUB} alt="xd" />
              </a>
            </div>
          </div>
          <p className="projectpage-smalldescription">
            A redesign of the most famous video game distribution service{" "}
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">UI/UX Design</p>
            <p className="bigtag">Web Developement</p>
          </div>
        </div>
        <p className="projectpage-description">
          For the Front-end course, we had to redesign and program a site that
          we received beforehand. I received the Steam website and the objective
          was to reprogram it with a new design in React and Angular.
        </p>
        <div className="picscontainer">
          <img className="projectpic1 projectpic" alt="omega" src={homepage} />
          <img className="projectpic2 projectpic" alt="omega" src={category} />
          <img className="projectpic3 projectpic" alt="omega" src={game} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={XD} alt="xd" />
          <img className="toolimg" src={react} alt="xd" />
          <img className="toolimg" src={angular} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          This project was not very easy at the beginning because it was the
          first time I was using React and Angular in my life. I had to adapt
          quickly and I think the result is a success. <br></br>
          <br></br>It&apos;s thanks to this project that I learned to love and
          continue with React.
        </p>
      </div>
    </motion.div>
  );
}
