import Portrait from "../../img/me4.png";
import "./home.css";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
import { MouseParallax } from "react-just-parallax";
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    anime({
      targets: "main",
      translateY: [150, 0],
      duration: 1500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      fadeIn: true,
      loop: false,
    });
  });

  return (
    <div className="homepage">
      <motion.main
        className="desktop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="upperbodytext">
          <div className="imgdiv">
            <img className="img" src={Portrait} alt="imageofme"></img>
          </div>

          <MouseParallax
            className="parallaxeffect"
            parallaxContainerRef
            strength="0.1"
          >
            <motion.div whileTap={{ scale: 0.99 }} class="bodytext">
              <h2 className="hi">
                {" "}
                <span className="spanletter">H</span>
                <span className="spanletter">i</span>
                <span className="spanletter">!</span>
                <h3 className="hiemoji">👋</h3>
                <span className="spanletter">&nbsp;</span>
                <span className="spanletter">I</span>
                <span className="spanletter">&nbsp;</span>
                <span className="spanletter">a</span>
                <span className="spanletter">m</span>
              </h2>
              <h1 className="rayan">
                <span className="spanletter">R</span>
                <span className="spanletter">a</span>
                <span className="spanletter">y</span>
                <span className="spanletter">a</span>
                <span className="spanletter">n</span>
              </h1>
              <h1 className="khyare">
                {" "}
                <span className="spanletter">K</span>
                <span className="spanletter">h</span>
                <span className="spanletter">y</span>
                <span className="spanletter">a</span>
                <span className="spanletter">r</span>
                <span className="spanletter">e</span>
              </h1>
              <p className="webdev">
                <span className="spanletter">W</span>
                <span className="spanletter">e</span>
                <span className="spanletter">b</span>
                <br></br>
                <span className="spanletter">D</span>
                <span className="spanletter">e</span>
                <span className="spanletter">v</span>
                <span className="spanletter">e</span>
                <span className="spanletter">l</span>
                <span className="spanletter">o</span>
                <span className="spanletter">p</span>
                <span className="spanletter">e</span>
                <span className="spanletter">r</span>
                <br></br>
                <span className="spanletter">U</span>
                <span className="spanletter">I</span>
                <span className="spanletter">/</span>
                <span className="spanletter">U</span>
                <span className="spanletter">X</span>

                <span>&nbsp;</span>

                <span className="spanletter">D</span>
                <span className="spanletter">e</span>
                <span className="spanletter">s</span>
                <span className="spanletter">i</span>
                <span className="spanletter">g</span>
                <span className="spanletter">n</span>
                <span className="spanletter">e</span>
                <span className="spanletter">r</span>
              </p>
            </motion.div>

            <div className="buttons">
              <button className="portfoliobtn">
                <Link className="portfolioa" to="/portfolio">
                  Portfolio{" "}
                </Link>
              </button>
              <button className="contactbtn">
                <Link className="contacta" to="/contact">
                  Contact
                </Link>
              </button>
            </div>
          </MouseParallax>
        </div>

        <script src="anime.min.js"></script>
      </motion.main>

      <div className="mobile-home">
        <div className="imgdiv">
          <img className="img" src={Portrait} alt="imageofme"></img>
        </div>
        <h2 className="hi">
          {" "}
          <span className="spanletter">H</span>
          <span className="spanletter">i</span>
          <span className="spanletter">!</span>
          <h3 className="hiemoji">👋</h3>
          <span className="spanletter">&nbsp;</span>
          <span className="spanletter">I</span>
          <span className="spanletter">&nbsp;</span>
          <span className="spanletter">a</span>
          <span className="spanletter">m</span>
        </h2>
        <h1 className="rayan">
          <span className="spanletter">R</span>
          <span className="spanletter">a</span>
          <span className="spanletter">y</span>
          <span className="spanletter">a</span>
          <span className="spanletter">n</span>
        </h1>
        <h1 className="khyare">
          {" "}
          <span className="spanletter">K</span>
          <span className="spanletter">h</span>
          <span className="spanletter">y</span>
          <span className="spanletter">a</span>
          <span className="spanletter">r</span>
          <span className="spanletter">e</span>
        </h1>
        <p className="webdeveloper">Web Developer</p>
        <p className="uidesigner">UI/UX Designer</p>

        <div className="buttons">
          <button className="portfoliobtn">
            <Link className="portfolioa" to="/portfolio">
              Portfolio{" "}
            </Link>
          </button>
          <button className="contactbtn">
            <Link className="contacta" to="/contact">
              Contact
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
