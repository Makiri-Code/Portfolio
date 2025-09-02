import { useState, useEffect } from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./HeaderText.module.css";
import AOS from "aos";
const HeaderText = () => {
  AOS.init();
  const [showNextType, setShowNextType] = useState(true);
  const [text] = useTypewriter({
    words: [
      "Front-end Web Developer 💻",
      "React.Js Developer 🚀",
      "UI/UX Integration 😎",
    ],
    loop: 1,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
    onLoopDone: () => setShowNextType(false),
  });

  return (
    <header className={styles.HeaderTextContainer} data-aos="fade-up">
      <div className={styles.HeaderText}>
        <h1>I am Emmanuel Amakiri</h1>
        {showNextType ? (
          <p>
            {text}
            <Cursor cursorStyle={"_"} />
          </p>
        ) : (
          <p>
            <Typewriter
              words={[
                "Front-end Web Developer 💻 | React.Js Developer 🚀 | UI/UX Integration 😎",
              ]}
              loop={1}
              cursor
              cursorStyle={"|"}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        )}
        <p>
          <a
            className={styles.FaIcons}
            href="https://web.facebook.com/profile.php?id=100076691955707"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            className={styles.FaIcons}
            href="https://twitter.com/Makiri_manuel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            className={styles.FaIcons}
            href="https://www.linkedin.com/in/emmanuel-amakiri-10a317174/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </p>
      </div>
    </header>
  );
};

export default HeaderText;
