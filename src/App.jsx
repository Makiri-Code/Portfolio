import Header from "./components/Header/Header";
import styles from "./App.module.css";
import HeaderText from "./components/Header-txt/HeaderText";
import AboutMe from "./components/About-me/AboutMe";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact-me/Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import { useEffect, useState } from "react";
import AOS from "aos";

function App() {
  AOS.init();
  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <>
      <Header />
      <main className={styles.MainContainer}>
        <HeaderText />
        <div className={styles.Container}>
          <AboutMe />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
      {scrollPosition >= 999 && scrollPosition <= 2940 && <Resume />}
    </>
  );
}

export default App;
