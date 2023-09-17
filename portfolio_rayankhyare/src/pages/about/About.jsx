import "react";
import "./about.css";
import ace from "../../img/rayan_ace.jpg";

import CarouselItem from "../carouselitem/Carouselitem";

import reactimg from "../../img/react.svg";
import angular from "../../img/angular.svg";
import laravel from "../../img/laravel.svg";
import node from "../../img/node.svg";
import photoshop from "../../img/photoshop.svg";
import github from "../../img/github.svg";
import kotlin from "../../img/kotlin.svg";
import figma from "../../img/figma.svg";
import xd from "../../img/xd.svg";
import illustrator from "../../img/illustrator.svg";
import aftereffects from "../../img/aftereffects.svg";
import premierepro from "../../img/premierepro.svg";

import { MouseParallax } from "react-just-parallax";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="aboutpage">
      <motion.div
        className="portfolio about-desktop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MouseParallax
          className="parallaxeffect"
          enableOnTouchDevice
          parallaxContainerRef
          strength="0.05"
        >
          <div className="firstpartabout">
            <div className="firstpartaboutleft">
              <h1 className="firstpartabouttitle">
                WEBSITES
                <br></br>
                DESIGN
                <br></br>& A BIT OF ANIME
              </h1>
              <p className="onepiece">One piece = best anime</p>
            </div>
            <img
              className="ace"
              src={ace}
              alt="rayan drawn as ace from One Piece"
            ></img>
          </div>

          <div className="secondpartabout">
            <p className="smallbio">
              I&apos;m a 21 year old creative developer with a passion for IT ,
              football and anime. I&apos;m a minimalist person who loves clean
              designs and websites. I love working with people who value
              aesthetics and minimalism like I do.
            </p>
            <div className="secondpartaboutright">
              <h1 className="based">
                BASED IN <br></br>RONSE
              </h1>
              <p className="would">but would like to live in a bigger city</p>
            </div>
          </div>
        </MouseParallax>
        <div className="thirdpartabout">
          <h1 className="thirdpartabouttitle">Now , what can I do ?</h1>

          <div className="slider">
            <div className="itemscontainer">
              <CarouselItem name="ReactJS" img={reactimg} />
              <CarouselItem name="Angular 11" img={angular} />
              <CarouselItem name="Laravel" img={laravel} />
              <CarouselItem name="Node.JS" img={node} />
              <CarouselItem name="Kotlin" img={kotlin} />
              <CarouselItem name="Adobe Photoshop" img={photoshop} />
              <CarouselItem name="Adobe XD" img={xd} />
              <CarouselItem name="Adobe Illustrator" img={illustrator} />
              <CarouselItem name="Adobe Premiere Pro" img={premierepro} />
              <CarouselItem name="Adobe After Effects" img={aftereffects} />
              <CarouselItem name="Figma" img={figma} />

              {/* Duplicate for carousel */}
              <CarouselItem name="ReactJS" img={reactimg} />
              <CarouselItem name="Angular 11" img={angular} />
              <CarouselItem name="Laravel" img={laravel} />
              <CarouselItem name="Node.JS" img={node} />
              <CarouselItem name="Kotlin" img={kotlin} />
              <CarouselItem name="Adobe Photoshop" img={photoshop} />
              <CarouselItem name="Adobe XD" img={xd} />
              <CarouselItem name="Adobe Illustrator" img={illustrator} />
              <CarouselItem name="Adobe Premiere Pro" img={premierepro} />
              <CarouselItem name="Adobe After Effects" img={aftereffects} />
              <CarouselItem name="Figma" img={figma} />
            </div>
          </div>
        </div>

        <MouseParallax enableOnTouchDevice parallaxContainerRef strength="0.05">
          <div className="fourthpartabout">
            <h1 className="internship">
              Not fully convinced yet<span className="blue">?</span> <br></br>
              Take a look<span className="blue">.</span>{" "}
            </h1>

            <div className="buttoncontainers">
              <button className="linkedinbtn">
                <a
                  className="linkedina"
                  href="https://www.linkedin.com/in/rayankhyare/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="linkedin-p">Linkedin</p>
                </a>
              </button>

              <button className="githubbtn">
                <a
                  className="githuba"
                  href="https://github.com/RayanKhyare"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="githubbtn-content">
                    <img src={github} className="github-logo" />
                    <p className="github-p">Github</p>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </MouseParallax>
      </motion.div>

      <div className="about-mobile">
        <div className="firstpartabout">
          <div className="firstpartaboutleft">
            <h1 className="firstpartabouttitle">
              WEBSITES
              <br></br>
              DESIGN
              <br></br>& A BIT OF ANIME
            </h1>
          </div>
        </div>
        <div className="secondpartabout">
          <p className="smallbio">
            I&apos;m a 21 year old creative developer with a passion for IT ,
            football and anime. I&apos;m a minimalist person who loves clean
            designs and websites. I love working with people who value
            aesthetics and minimalism like I do.
          </p>
          <img
            className="ace"
            src={ace}
            alt="rayan drawn as ace from One Piece"
          ></img>
        </div>
        <div className="thirdpartabout">
          <h1 className="thirdpartabouttitle">What can I do ?</h1>

          <div className="slider">
            <div className="itemscontainer">
              <CarouselItem name="ReactJS" img={reactimg} />
              <CarouselItem name="Angular 11" img={angular} />
              <CarouselItem name="Laravel" img={laravel} />
              <CarouselItem name="Node.JS" img={node} />
              <CarouselItem name="Kotlin" img={kotlin} />
              <CarouselItem name="Adobe Photoshop" img={photoshop} />
              <CarouselItem name="Adobe XD" img={xd} />
              <CarouselItem name="Adobe Illustrator" img={illustrator} />
              <CarouselItem name="Adobe Premiere Pro" img={premierepro} />
              <CarouselItem name="Adobe After Effects" img={aftereffects} />
              <CarouselItem name="Figma" img={figma} />

              {/* Duplicate for carousel */}
              <CarouselItem name="ReactJS" img={reactimg} />
              <CarouselItem name="Angular 11" img={angular} />
              <CarouselItem name="Laravel" img={laravel} />
              <CarouselItem name="Node.JS" img={node} />
              <CarouselItem name="Kotlin" img={kotlin} />
              <CarouselItem name="Adobe Photoshop" img={photoshop} />
              <CarouselItem name="Adobe XD" img={xd} />
              <CarouselItem name="Adobe Illustrator" img={illustrator} />
              <CarouselItem name="Adobe Premiere Pro" img={premierepro} />
              <CarouselItem name="Adobe After Effects" img={aftereffects} />
              <CarouselItem name="Figma" img={figma} />
            </div>
          </div>
        </div>
        <div className="fourthpartabout">
          <h1 className="internship">
            Not fully convinced yet<span className="blue">?</span> <br></br>
            Take a look<span className="blue">.</span>{" "}
          </h1>

          <div className="buttoncontainers">
            <button className="linkedinbtn">
              <a
                className="linkedina"
                href="https://www.linkedin.com/in/rayankhyare/"
                target="_blank"
                rel="noreferrer"
              >
                <p className="linkedin-p">Linkedin</p>
              </a>
            </button>

            <button className="githubbtn">
              <a
                className="githuba"
                href="https://github.com/RayanKhyare"
                target="_blank"
                rel="noreferrer"
              >
                <div className="githubbtn-content">
                  <img src={github} className="github-logo" />
                  <p className="github-p">Github</p>
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
