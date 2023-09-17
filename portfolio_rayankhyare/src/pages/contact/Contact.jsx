import { useEffect } from "react";
import "./contact.css";
import anime from "animejs/lib/anime.es.js";
import { motion } from "framer-motion";
import { MouseParallax } from "react-just-parallax";

export default function Contact() {
  useEffect(() => {
    var tl = anime.timeline({
      // -> from '28px' to '100%',
      easing: "easeInOutQuad",
      duration: 800,
      delay: anime.stagger(100),
    });

    tl.add({
      targets: ".name",
      width: ["0%", "91%"],
    });

    tl.add(
      {
        targets: ".email",
        width: ["0%", "91%"],
      },
      "-=600"
    );

    tl.add(
      {
        targets: ".contacttextarea",
        width: ["0%", "90%"],
      },
      "-=650"
    );

    tl.add(
      {
        targets: ".contactbutton",
        translateY: [300, 0],
      },
      "-=700"
    );
  }, []);

  return (
    <div className="contact-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="contact-desktop">
          <motion.div whileTap={{ scale: 0.995 }} class="contactformdiv">
            <MouseParallax
              className="parallaxeffect"
              enableOnTouchDevice
              parallaxContainerRef
              strength="0.05"
            >
              <h1 className="contacttitle">Let&apos;s work together !</h1>

              <form
                className="contactform"
                action="https://formsubmit.co/rkhyare@gmail.com"
                method="POST"
              >
                <input
                  className="contactinput name"
                  type="text"
                  name="name"
                  placeholder="Name🙍"
                  required
                />

                <input
                  className="contactinput email"
                  name="email"
                  type="email"
                  placeholder="Email ✉️"
                  required
                />

                <textarea
                  className="contacttextarea"
                  placeholder="Write a message 💬"
                  name="message"
                  required
                />
                <button className="contactbutton">Send</button>
              </form>
              <div className="fourthpartabout">
                <p className="internshiptext">
                  You can also contact me on the following platforms :
                </p>

                <div className="buttoncontainers">
                  <button className="linkedinbtn">
                    <a
                      className="linkedina"
                      href="https://www.linkedin.com/in/rayankhyare/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Linkedin
                    </a>
                  </button>
                </div>
              </div>
            </MouseParallax>
          </motion.div>
        </div>
      </motion.div>

      <div className="contact-mobile">
        <motion.div whileTap={{ scale: 0.995 }} class="contactformdiv">
          <h1 className="contacttitle">Let&apos;s work together !</h1>

          <form
            className="contactform"
            action="https://formsubmit.co/rkhyare@gmail.com"
            method="POST"
          >
            <input
              className="contactinput name-mobile"
              type="text"
              name="name"
              placeholder="Name🙍"
              required
            />

            <input
              className="contactinput email-mobile"
              name="email"
              type="email"
              placeholder="Email ✉️"
              required
            />

            <textarea
              className="contacttextarea-mobile"
              placeholder="Write a message 💬"
              name="message"
              required
            />
            <button className="contactbutton-mobile">Send</button>
          </form>
          <div className="fourthpartabout">
            <p className="internshiptext">
              You can also contact me on <br></br>the following platforms :
            </p>

            <div className="buttoncontainers">
              <button className="linkedinbtn">
                <a
                  className="linkedina"
                  href="https://www.linkedin.com/in/rayankhyare/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
