import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Projects.module.css";
import xpacy from "../../assets/xpacy-portfolio.jpeg";
import crwnclothing from "../../assets/crwn-clothing.png";
import makzplayer from "../../assets/Makz-player.png";
const Projects = () => {
  const slides = [
    <div
      className={styles.ProjectImgContainer}
      style={{ backgroundImage: `url(${xpacy})` }}
    >
      <div className={styles.ProjectDescription}>
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
      </div>
    </div>,
    <div
      className={styles.ProjectImgContainer}
      style={{ backgroundImage: `url(${crwnclothing})` }}
    >
      <div className={styles.ProjectDescription}>
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
      </div>
    </div>,
    <div
      className={styles.ProjectImgContainer}
      style={{ backgroundImage: `url(${makzplayer})` }}
    >
      <div className={styles.ProjectDescription}>
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
      </div>
    </div>,
  ];
  return (
    <Card title={"My Recent Works"} dataAos={"fade-up"}>
      <Carousel slides={slides} />
    </Card>
  );
};

export default Projects;
