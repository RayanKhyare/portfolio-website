import "react";
import "./detail.css";
import backbtn from "././../../img/backbutton.svg";
import github from "././../../img/github.svg";
import www from "././../../img/www.svg";
import { MouseParallax } from "react-just-parallax";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

export default function Detail(props) {
  return (
    <motion.div
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
        <div className="detail">
          <div className="header">
            <NavLink to="/portfolio">
              <img src={backbtn} alt="backbutton" className="backbtn"></img>
            </NavLink>
            <h1 className="detailtitle">{props.name}</h1>
          </div>
          <div className="maininfo">
            {/* <img src={omega} alt="Omega" class="detailimg"></img> */}
            <img src={props.img} alt={props.name} className="detailimg"></img>
            <div className="rightinfo">
              <p className="detaildescription">{props.description}</p>

              <div className="bottomlogos">
                {props.website_url ? (
                  <a href={props.website_url} target="_blank" rel="noreferrer">
                    <img src={www} alt="www" className="smalllogo"></img>
                  </a>
                ) : null}
                {props.github_url ? (
                  <a href={props.github_url} target="_blank" rel="noreferrer">
                    <img src={github} alt="Omega" className="smalllogo"></img>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </MouseParallax>
    </motion.div>
  );
}
