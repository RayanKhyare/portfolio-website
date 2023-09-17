import "react";
import "../omega/omega.css";

import WWW from "../../img/www.svg";
import XD from "../../img/xd.svg";
import Reactlogo from "../../img/react.svg";
import node from "../../img/node.svg";
import home from "../../img/quizapp_home.png";
import create from "../../img/quiz_create.png";
import quiz from "../../img/quizapp_quiz.png";
import quizapp from "../../img/quizapp.png";

import { motion } from "framer-motion";

export default function Quizapp() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivquizapp"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">Ask & Learn</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">Web development</p>
                <p className="bigtag">UI Design</p>
              </div>
            </div>
            <p className="projectshortdescription">
              A quiz app to play with your friends
            </p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img className="projectpic1 projectpic" alt="omega" src={home} />
              <img
                className="projectpic2 projectpic"
                alt="omega"
                src={create}
              />
              <img className="projectpic3 projectpic" alt="omega" src={quiz} />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={quizapp} />
              <p className="sideinfodescription">
                Ask & Learn is a site that allows you to create quizzes and play
                with your friends. There are many categories and different
                levels of games available so that everyone can play. I also
                created this site to learn more about web sockets.
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={XD} alt="xd" />
                <img className="toolimg" src={Reactlogo} alt="xd" />
                <img className="toolimg" src={node} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                Ask & Learn allowed me to learn a lot more about Socketio and
                web sockets. I had a hard time fixing different bugs which
                helped me to discover more about the technology and what it is.
              </p>
              <div className="linkscontainer">
                <a
                  href="https://quizapp-seven-tau.vercel.app/"
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
            <h2 className="projectpage-title">Ask & Learn</h2>
            <div className="linkscontainer">
              <a
                href="https://quizapp-seven-tau.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={WWW} alt="xd" />
              </a>
            </div>
          </div>
          <p className="projectpage-smalldescription">
            A quiz app to play with your friends
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">Web development</p>
            <p className="bigtag">UI Design</p>
          </div>
        </div>
        <p className="projectpage-description">
          Ask & Learn is a site that allows you to create quizzes and play with
          your friends. There are many categories and different levels of games
          available so that everyone can play. I also created this site to learn
          more about web sockets.
        </p>
        <div className="picscontainer">
          <img className="projectpic1 projectpic" alt="omega" src={home} />
          <img className="projectpic2 projectpic" alt="omega" src={create} />
          <img className="projectpic3 projectpic" alt="omega" src={quiz} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={XD} alt="xd" />
          <img className="toolimg" src={Reactlogo} alt="xd" />
          <img className="toolimg" src={node} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          Ask & Learn allowed me to learn a lot more about Socketio and web
          sockets. I had a hard time fixing different bugs which helped me to
          discover more about the technology and what it is.
        </p>
      </div>
    </motion.div>
  );
}
