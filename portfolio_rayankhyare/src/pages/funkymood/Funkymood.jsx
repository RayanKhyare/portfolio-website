import "react";
import "../omega/omega.css";
import funkymood from "../../img/funkymood_thumbnail.png";

import Illustrator from "../../img/illustrator.svg";
import PHOTOSHOP from "../../img/photoshop.svg";

import youtube from "../../img/youtube.svg";

import cover from "../../img/funkymood_cover.png";
import backcover from "../../img/funkymood_backcover.png";

import { motion } from "framer-motion";

export default function Funkymood() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivfunkymood"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">Funky mood</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">Branding</p>
                <p className="bigtag">Concept</p>
              </div>
            </div>
            <p className="projectshortdescription">
              Innovating the art of gifting mixtapes
            </p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img className="projectpic3 projectpic" alt="omega" src={cover} />
              <img
                className="projectpic1 projectpic"
                alt="omega"
                src={backcover}
              />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={funkymood} />
              <p className="sideinfodescription">
                Giving a mixtape to a loved one is a wonderful gift and a great
                way to express your feelings with someone. In today&apos;s
                technological world, there are numerous ways to share your
                mixtape with someone. My classmate, Yassine Benhaddou, and I
                decided to create a unique AR experience for sharing your
                mixtape.
                <br></br>
                <br></br>
                Because we both have a deep love for funk music, we chose to
                create a mixtape in this genre. This is evident in the mixtape
                cover, which captures the vibrant and funky atmosphere. While I
                focused on the branding and design aspects, Yassine applied his
                creativity to bring the augmented reality elements to life.
                <br></br>
                <br></br>
                This project was created as an assignment for our Design 5
                course.
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={Illustrator} alt="xd" />
                <img className="toolimg" src={PHOTOSHOP} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                &quot;Funky Mood&quot; is a project that brought me immense joy
                as I delved into the world of album and mixtape cover art.
                Having the opportunity to create one allowed me to unleash my
                creativity and passion for visual aesthetics.
                <br></br>
                <br></br>I want to extend my heartfelt gratitude to Yassine
                Benhaddou for being an incredible collaborator throughout this
                project. Working alongside Yassine not only amplified the
                overall experience but also enriched the end result.
              </p>
              <div className="linkscontainer">
                <a
                  href="https://www.youtube.com/watch?v=qoW7hL-o3dg"
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
            <h2 className="projectpage-title">Funky mood</h2>
            <div className="linkscontainer">
              <a
                href="https://www.youtube.com/watch?v=qoW7hL-o3dg"
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
            Innovating the art of gifting mixtapes
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">Branding</p>
            <p className="bigtag">Concept</p>
          </div>
        </div>
        <p className="projectpage-description">
          Giving a mixtape to a loved one is a wonderful gift and a great way to
          express your feelings with someone. In today&apos;s technological
          world, there are numerous ways to share your mixtape with someone. My
          classmate, Yassine Benhaddou, and I decided to create a unique AR
          experience for sharing your mixtape.
          <br></br>
          <br></br>
          Because we both have a deep love for funk music, we chose to create a
          mixtape in this genre. This is evident in the mixtape cover, which
          captures the vibrant and funky atmosphere. While I focused on the
          branding and design aspects, Yassine applied his creativity to bring
          the augmented reality elements to life.
          <br></br>
          <br></br>
          This project was created as an assignment for our Design 5 course.
        </p>
        <div className="picscontainer">
          <img className="projectpic3 projectpic" alt="omega" src={cover} />
          <img className="projectpic1 projectpic" alt="omega" src={backcover} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={Illustrator} alt="xd" />
          <img className="toolimg" src={PHOTOSHOP} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          &quot;Funky Mood&quot; is a project that brought me immense joy as I
          delved into the world of album and mixtape cover art. Having the
          opportunity to create one allowed me to unleash my creativity and
          passion for visual aesthetics.
          <br></br>
          <br></br>I want to extend my heartfelt gratitude to Yassine Benhaddou
          for being an incredible collaborator throughout this project. Working
          alongside Yassine not only amplified the overall experience but also
          enriched the end result.
        </p>
      </div>
    </motion.div>
  );
}
