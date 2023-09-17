import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import Home from "./pages/home/Home";
import Steam from "./pages/steam/Steam";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Omega from "./pages/omega/Omega";
import Header from "./pages/header/Header";
import { AnimatePresence } from "framer-motion";
import Festirap from "./pages/festirap/Festirap";
import Finalshow from "./pages/finalshow/Finalshow";
import Chatrix from "./pages/chatrix/Chatrix";
import Quizapp from "./pages/quizapp/quizapp";
import ThreeJS from "./pages/threejs/threejs";
import Learnify from "./pages/learnify/learnify";
import Funkymood from "./pages/funkymood/Funkymood";
import KunstInHuis from "./pages/kunstinhuis/KunstInHuis";
import Footer from "./pages/footer/Footer";

export const ThemeContext = createContext(null);

function App() {
  // const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 0);
  // }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.title = "Rayan Khyare";
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="App" id={theme}>
          <Header themefunction={toggleTheme} theme={theme} />

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio/omega" element={<Omega />} />
              <Route path="/portfolio/festirap" element={<Festirap />} />
              <Route path="/portfolio/steamredesign" element={<Steam />} />
              <Route path="/portfolio/finalshow" element={<Finalshow />} />
              <Route path="/portfolio/chatrix" element={<Chatrix />} />
              <Route path="/portfolio/quizapp" element={<Quizapp />} />
              <Route path="/portfolio/threejs" element={<ThreeJS />} />
              <Route path="/portfolio/learnify" element={<Learnify />} />
              <Route path="/portfolio/funkymood" element={<Funkymood />} />
              <Route path="/portfolio/kunstinhuis" element={<KunstInHuis />} />
            </Routes>
          </AnimatePresence>

          <Footer />
        </div>
      </Router>
      <script type="text/javascript" src="fullpage.js"></script>
    </ThemeContext.Provider>
  );
}

export default App;
