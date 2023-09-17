import "react";
import "../omega/omega.css";
import Learnify from "../../img/learnify_thumbnail.png";
import FIGMA from "../../img/figma.svg";
import REACT from "../../img/react.svg";
import SOCKETIO from "../../img/socketio.svg";
import NODE from "../../img/node.svg";
import WWW from "../../img/www.svg";
import GITHUB from "../../img/github.svg";

import homepage from "../../img/learnify_homepage.png";
import pollviewer from "../../img/learnify_pollviewer.png";
import polltoevoegen from "../../img/learnify_polltoevoegen.png";

import { motion } from "framer-motion";

export default function learnify() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivlearnify"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">learnify</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">UI/UX Design</p>
                <p className="bigtag">Web Developement</p>
              </div>
            </div>
            <p className="projectshortdescription">
              A new way to make online lessons less boring
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
                src={pollviewer}
              />
              <img
                className="projectpic3 projectpic"
                alt="omega"
                src={polltoevoegen}
              />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={Learnify} />
              <p className="sideinfodescription">
                Learnify is a website that I have created for my bachelor&apos;s
                thesis. Its purpose is to provide a new way of teaching for
                educators and a better way of taking online lessons for
                students. <br></br>
                <br></br>
                Sometimes, online lessons can be tedious to sit through for
                hours on end. That&apos;s why I have endeavored to create an
                experience that closely resembles the one someone might have
                when attending a lesson in person. I have achieved this by
                adding interactive features to the site, such as polls and
                question-and-answer sessions, to foster real interaction between
                students and teachers.
                <br></br>
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={FIGMA} alt="xd" />
                <img className="toolimg" src={REACT} alt="xd" />
                <img className="toolimg" src={NODE} alt="xd" />
                <img className="toolimg" src={SOCKETIO} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                During the development of Learnify, I gained valuable insights
                and skills in the areas of research, design, and development. It
                has been a project that I truly enjoyed, as it marked my first
                experience creating something on such a large scale. This
                endeavor has challenged me personally and allowed me to acquire
                knowledge that will benefit me beyond my studies.
                <br></br>
                <br></br>
                In my opinion, the most challenging aspect of the development
                process was working with SocketIO. Managing real-time data that
                also needed to be connected to a database posed its
                complexities. Prisma proved to be immensely helpful in designing
                the database and API. For the frontend, I utilized React,
                leveraging my existing foundation and aiming to further refine
                my skills in this framework through this project.
                <br></br>
                <br></br>I definitely intend to continue working on this project
                in my spare time because I believe it holds great potential and
                I envision it evolving into something truly impactful for
                education in Belgium.
              </p>
              <div className="linkscontainer">
                <a
                  href="https://learnify-frontend.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="linkicon" src={WWW} alt="xd" />
                </a>
                <a
                  href="https://github.com/RayanKhyare/finalwork-learnify-RayanKhyare"
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
            <h2 className="projectpage-title">learnify</h2>
            <div className="linkscontainer">
              <a
                href="https://learnify-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={WWW} alt="xd" />
              </a>
              <a
                href="https://github.com/RayanKhyare/finalwork-learnify-RayanKhyare"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={GITHUB} alt="xd" />
              </a>
            </div>
          </div>
          <p className="projectpage-smalldescription">
            A new way to make online lessons less boring
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">UI/UX Design</p>
            <p className="bigtag">Web Developement</p>
          </div>
        </div>
        <p className="projectpage-description">
          Learnify is a website that I have created for my bachelor&apos;s
          thesis. Its purpose is to provide a new way of teaching for educators
          and a better way of taking online lessons for students. <br></br>
          <br></br>
          Sometimes, online lessons can be tedious to sit through for hours on
          end. That&apos;s why I have endeavored to create an experience that
          closely resembles the one someone might have when attending a lesson
          in person. I have achieved this by adding interactive features to the
          site, such as polls and question-and-answer sessions, to foster real
          interaction between students and teachers.
          <br></br>
        </p>
        <div className="picscontainer">
          <img className="projectpic1 projectpic" alt="omega" src={homepage} />
          <img
            className="projectpic2 projectpic"
            alt="omega"
            src={pollviewer}
          />
          <img
            className="projectpic3 projectpic"
            alt="omega"
            src={polltoevoegen}
          />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={FIGMA} alt="xd" />
          <img className="toolimg" src={REACT} alt="xd" />
          <img className="toolimg" src={NODE} alt="xd" />
          <img className="toolimg" src={SOCKETIO} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          During the development of Learnify, I gained valuable insights and
          skills in the areas of research, design, and development. It has been
          a project that I truly enjoyed, as it marked my first experience
          creating something on such a large scale. This endeavor has challenged
          me personally and allowed me to acquire knowledge that will benefit me
          beyond my studies.
          <br></br>
          <br></br>
          In my opinion, the most challenging aspect of the development process
          was working with SocketIO. Managing real-time data that also needed to
          be connected to a database posed its complexities. Prisma proved to be
          immensely helpful in designing the database and API. For the frontend,
          I utilized React, leveraging my existing foundation and aiming to
          further refine my skills in this framework through this project.
          <br></br>
          <br></br>I definitely intend to continue working on this project in my
          spare time because I believe it holds great potential and I envision
          it evolving into something truly impactful for education in Belgium.
        </p>
      </div>
    </motion.div>
  );
}
