import "./header.css";

import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import BurgerNav from "../burgernav/BurgerNav";

export default function Header(props) {
  // anime({
  //   targets: "ul",
  //   translateY: [-95, 0],
  //   duration: 1500,
  //   easing: "easeInOutQuad",
  //   opacity: [0, 1],
  //   fadeIn: true,
  //   delay: anime.stagger(200),
  // });

  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 375,
  });

  tl.add({
    targets: ".logoheader",
    translateY: [-95, 0],
  });

  tl.add({
    targets: "#portfolio",
    translateY: [-95, 0],
  });

  tl.add({
    targets: "#about",
    translateY: [-95, 0],
  });

  tl.add({
    targets: "#contact",
    translateY: [-95, 0],
  });

  const [isReallyOn, setIsReallyOn] = useState(false);

  const toggleSwitch = () => setIsReallyOn(!isReallyOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <header>
      <Link to="/">
        <motion.h1
          className="logoheader"
          transition={{ default: { ease: "easeOut" } }}
          whileHover={{ scale: 1.05 }}
        >
          RK
        </motion.h1>
      </Link>
      <ul>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "lactive-class" : "not-active-class"
          }
        >
          <motion.li
            transition={{ default: { ease: "easeOut" } }}
            whileHover={{ scale: 1.05 }}
            id="portfolio"
          >
            Portfolio<b className="point">.</b>{" "}
          </motion.li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "lactive-class" : "not-active-class"
          }
        >
          <motion.li
            transition={{ default: { ease: "easeOut" } }}
            whileHover={{ scale: 1.05 }}
            id="about"
          >
            About<b className="point">.</b>
          </motion.li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "lactive-class" : "not-active-class"
          }
        >
          <motion.li
            transition={{ default: { ease: "easeOut" } }}
            whileHover={{ scale: 1.05 }}
            id="contact"
          >
            Contact<b className="point">.</b>
          </motion.li>
        </NavLink>
      </ul>

      <div
        className="switch"
        data-ison={isReallyOn}
        // eslint-disable-next-line react/prop-types
        onClick={(toggleSwitch, props.themefunction)}
        // eslint-disable-next-line react/no-unknown-property, react/prop-types
        checked={props.theme === "light"}
      >
        <motion.div
          className="handle"
          layout
          transition={spring}
          onClick={toggleSwitch}
        />
      </div>

      <BurgerNav />
    </header>
  );
}
