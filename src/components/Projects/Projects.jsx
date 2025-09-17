import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Projects.module.css";
import xpacy from "../../assets/xpacy-front.png";
import crwnclothing from "../../assets/crwn-clothing.png";
import makzplayer from "../../assets/Makz-player.png";
import fastReactPizza from "../../assets/fast-react-pizza.png";
const Projects = () => {
  const slides = [
    <div
      className={styles.ProjectImgContainer}
      style={{ backgroundImage: `url(${xpacy})` }}
    >
      <a
        className={styles.ProjectDescription}
        href="https://xpacy.com"
        target="_blank"
      >
        <h3>Xpacy Web App</h3>
        <p>
          Xpacy is a platform revolutionizing real estate administration with
          its integrated facility management features and property enhancement
          services that cater to property owners, tenants, investors and
          enthusiasts alike.
        </p>
        <a href="https://xpacy.com" target="_blank">
          {" "}
          <i class="fa-solid fa-link"></i> Xpacy.com{" "}
        </a>
      </a>
    </div>,
    <div
      className={styles.ProjectImgContainer}
      style={{ backgroundImage: `url(${crwnclothing})` }}
    >
      <a
        className={styles.ProjectDescription}
        href="https://crwn-clothing-app-omega.vercel.app/"
        target="_blank"
      >
        <h3>Crown Clothing Web App</h3>
        <p>
          The CRWN Clothing demo is a full-featured, visually appealing shopping
          app built to demonstrate my understanding of React + Redux
          architecture, Firebase integration (auth & database), Stripe-powered
          checkout and Production styling and routing.
        </p>
        <a href="https://crwn-clothing-app-omega.vercel.app/" target="_blank">
          {" "}
          <i class="fa-solid fa-link"></i> CrwnClothing.com{" "}
        </a>
      </a>
    </div>,
    <div
      className={styles.ProjectImgContainer}
      style={{ backgroundImage: `url(${makzplayer})` }}
    >
      <a
        className={styles.ProjectDescription}
        href="https://makz-player.vercel.app/"
        target="_blank"
      >
        <h3>🎵 Makz Player</h3>
        <p>
          {" "}
          Makz is a lightweight, React-based media player deployed via Vercel.
          It lets users Play audio or video files directly in the browser.
        </p>
        <a href="https://makz-player.vercel.app/" target="_blank">
          {" "}
          <i class="fa-solid fa-link"></i> Makz Player{" "}
        </a>
      </a>
    </div>,
    <div
      className={styles.ProjectImgContainer}
      style={{ backgroundImage: `url(${fastReactPizza})` }}
    >
      <a
        className={styles.ProjectDescription}
        href="https://fast-react-pizza-ashy-psi.vercel.app/"
        target="_blank"
      >
        <h3>🍕 Fast React Pizza Co.</h3>
        <p>
          Fast React Pizza Co. is a pizza ordering platform built with React,
          Redux and React Router to show potential employers my understanding of
          state management, consistent data flow and a beautiful UI as a plus 😁
        </p>
        <a href="https://fast-react-pizza-ashy-psi.vercel.app/" target="_blank">
          <i class="fa-solid fa-link"></i> Fast React Pizza
        </a>
      </a>
    </div>,
  ];
  return (
    <Card title={"My Recent Works"} dataAos={"fade-up"} id={"projects"}>
      <Carousel slides={slides} />
    </Card>
  );
};

export default Projects;
