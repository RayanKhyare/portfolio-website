import "react";
import "../omega/omega.css";
import kunstinhuis from "../../img/kunstinhuis_thumbnail.png";

import Illustrator from "../../img/illustrator.svg";
import FIGMA from "../../img/figma.svg";

import tablets from "../../img/kunstinhuis_tablets.png";
import phones from "../../img/kunstinhuis_iphone.png";
import stijlgids from "../../img/kunstinhuis_stijlgids.png";

import { motion } from "framer-motion";
export default function KunstInHuis() {
  return (
    <motion.div
      class="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectpage">
        <div className="largeimgdivkunstinhuis"></div>

        <div className="projectmain">
          <div className="topmaintext">
            <div className="toptext">
              <h1 className="bigprojectname">Kunst IN Huis</h1>
              <div className="bigtagscontainer">
                <p className="bigtag">Branding</p>
                <p className="bigtag">UI/UX Design</p>
                <p className="bigtag">Prototyping</p>
              </div>
            </div>
            <p className="projectshortdescription">
              A show hosted by the students of Multimedia & Creative
              Technologies
            </p>
          </div>
          <div className="projectmainbottom">
            <div className="picscontainer">
              <img
                className="projectpic2 projectpic"
                alt="omega"
                src={tablets}
              />
              <img
                className="projectpic3 projectpic"
                alt="omega"
                src={phones}
              />
              <img
                className="projectpic3 projectpic"
                alt="omega"
                src={stijlgids}
              />
            </div>
            <div className="sideinfocontainer">
              <img className="sideinfoimg" alt="omega" src={kunstinhuis} />
              <p className="sideinfodescription">
                As part of our Design 5 course, Yassine Benhaddou and I were
                tasked with reimagining the identity and exploring innovative
                applications for the Kunst In Huis service. Kunst In Huis offers
                the opportunity to rent artworks for display in one&apos;s home,
                with the option to purchase if desired.
                <br></br>
                <br></br>
                Our objective was to introduce a more interactive approach to
                enhance the user experience. We conceived the idea of utilizing
                large touchscreen tablets mounted on walls, providing customers
                with a unique way to visualize artwork in their preferred rooms
                prior to making a purchase.
                <br></br>
                <br></br>
                By leveraging these touchscreen tablets, users could virtually
                preview how different artworks would complement their existing
                decor and ambiance. This immersive interaction empowers
                customers to make informed decisions and develop a deeper
                connection with the artwork they are considering.
              </p>
              <h2 className="sideinfotitle">Tools</h2>
              <div className="toolscontainer">
                <img className="toolimg" src={Illustrator} alt="xd" />
                <img className="toolimg" src={FIGMA} alt="xd" />
              </div>
              <h2 className="sideinfotitle">Impression</h2>
              <p className="impressiontext">
                Working on this project was an absolute joy for me as Yassine
                Benhaddou and I wholeheartedly embraced the challenge of
                harnessing our creativity to devise an idea that would greatly
                benefit Kunst In Huis customers. As someone who relishes the
                process of rebranding, I was thrilled to contribute to this
                endeavor and genuinely hope that Kunst In Huis found our concept
                to be truly satisfying.
                <br></br>
                <br></br>I would like to take this opportunity to express my
                heartfelt appreciation to Yassine Benhaddou, whose partnership
                proved to be invaluable throughout this project. Our
                collaborative efforts enabled us to create something remarkable,
                combining our diverse skills and talents to bring our vision to
                fruition. I am sincerely grateful for Yassine&apos;s unwavering
                dedication and commitment.
              </p>
              <div className="linkscontainer"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="projectpage-mobile">
        <div className="projectpage-top">
          <div className="projectpage-top-header">
            <h2 className="projectpage-title">Kunst IN Huis</h2>
            <div className="linkscontainer"></div>
          </div>
          <p className="projectpage-smalldescription">
            A show hosted by the students of Multimedia & Creative Technologies
          </p>
          <div className="bigtagscontainer">
            <p className="bigtag">Branding</p>
            <p className="bigtag">UI/UX Design</p>
            <p className="bigtag">Prototyping</p>
          </div>
        </div>
        <p className="projectpage-description">
          As part of our Design 5 course, Yassine Benhaddou and I were tasked
          with reimagining the identity and exploring innovative applications
          for the Kunst In Huis service. Kunst In Huis offers the opportunity to
          rent artworks for display in one&apos;s home, with the option to
          purchase if desired.
          <br></br>
          <br></br>
          Our objective was to introduce a more interactive approach to enhance
          the user experience. We conceived the idea of utilizing large
          touchscreen tablets mounted on walls, providing customers with a
          unique way to visualize artwork in their preferred rooms prior to
          making a purchase.
          <br></br>
          <br></br>
          By leveraging these touchscreen tablets, users could virtually preview
          how different artworks would complement their existing decor and
          ambiance. This immersive interaction empowers customers to make
          informed decisions and develop a deeper connection with the artwork
          they are considering.
        </p>
        <div className="picscontainer">
          <img className="projectpic2 projectpic" alt="omega" src={tablets} />
          <img className="projectpic3 projectpic" alt="omega" src={phones} />
          <img className="projectpic3 projectpic" alt="omega" src={stijlgids} />
        </div>
        <h2 className="sideinfotitle">Tools</h2>
        <div className="toolscontainer">
          <img className="toolimg" src={Illustrator} alt="xd" />
          <img className="toolimg" src={FIGMA} alt="xd" />
        </div>
        <h2 className="sideinfotitle">Impression</h2>
        <p className="impressiontext">
          Working on this project was an absolute joy for me as Yassine
          Benhaddou and I wholeheartedly embraced the challenge of harnessing
          our creativity to devise an idea that would greatly benefit Kunst In
          Huis customers. As someone who relishes the process of rebranding, I
          was thrilled to contribute to this endeavor and genuinely hope that
          Kunst In Huis found our concept to be truly satisfying.
          <br></br>
          <br></br>I would like to take this opportunity to express my heartfelt
          appreciation to Yassine Benhaddou, whose partnership proved to be
          invaluable throughout this project. Our collaborative efforts enabled
          us to create something remarkable, combining our diverse skills and
          talents to bring our vision to fruition. I am sincerely grateful for
          Yassine&apos;s unwavering dedication and commitment.
        </p>
      </div>
    </motion.div>
  );
}
