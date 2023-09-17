import "react";
import "../omega/omega.css";

import WWW from "../../img/www.svg";
import XD from "../../img/xd.svg";
import Reactlogo from "../../img/react.svg";
import node from "../../img/node.svg";
import home from "../../img/chatrix_home.png";
import chat from "../../img/chatrix_chat.png";
import chatrix from "../../img/chatrix.png";

import { motion } from "framer-motion";

export default function Chatrix() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivchatrix"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">chatrix.</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">Web development</p>
                <p className="bigtag">UI Design</p>
              </div>
            </div>
            <p className="projectshortdescription">
              A live chat app made to test web sockets
            </p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img className="projectpic1 projectpic" alt="omega" src={home} />
              <img className="projectpic2 projectpic" alt="omega" src={chat} />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={chatrix} />
              <p className="sideinfodescription">
                Chatrix is an application I created in order to discover
                websockets. It exists in one page where you have to enter your
                name and the name of the room you want to join. Once in the room
                you can talk freely with each person present. Perfect to create
                a small space where you can work for the school.
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={XD} alt="xd" />
                <img className="toolimg" src={Reactlogo} alt="xd" />
                <img className="toolimg" src={node} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                I really enjoyed working with websockets. It allowed me to
                discover an aspect of web development that I had never seen
                before
              </p>
              <div className="linkscontainer">
                <a
                  href="https://livechat-app-mu.vercel.app/"
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
            <h2 className="projectpage-title">chatrix.</h2>
            <div className="linkscontainer">
              <a
                href="https://livechat-app-mu.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="linkicon" src={WWW} alt="xd" />
              </a>
            </div>
          </div>
          <p className="projectpage-smalldescription">
            A live chat app made to test web sockets
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">Web development</p>
            <p className="bigtag">UI Design</p>
          </div>
        </div>
        <p className="projectpage-description">
          Chatrix is an application I created in order to discover websockets.
          It exists in one page where you have to enter your name and the name
          of the room you want to join. Once in the room you can talk freely
          with each person present. Perfect to create a small space where you
          can work for the school.
        </p>
        <div className="picscontainer">
          <img className="projectpic1 projectpic" alt="omega" src={home} />
          <img className="projectpic2 projectpic" alt="omega" src={chat} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={XD} alt="xd" />
          <img className="toolimg" src={Reactlogo} alt="xd" />
          <img className="toolimg" src={node} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          I really enjoyed working with websockets. It allowed me to discover an
          aspect of web development that I had never seen before
        </p>
      </div>
    </motion.div>
  );
}
