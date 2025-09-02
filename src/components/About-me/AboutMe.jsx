import styles from "./AboutMe.module.css";
import profile from "../../assets/image.png";
import Card from "../Card/Card";
import Button from "../Button/Button";
import AOS from "aos";
const AboutMe = () => {
  AOS.init();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/EmmanuelAmakiriResume.pdf";
    link.target = "_blank"; // Open in new tab
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Card title={"About me"} dataAos={"fade-right"}>
      <div className={styles.ProfileImgContainer}>
        <div
          className={styles.ImgContainer}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={profile} alt="" lazyloading />
        </div>
        <div className={styles.AboutMeTextContainer}>
          <p>
            A Frontend Developer with expertise in React, HTML, CSS, JavaScript,
            and RESTful API integration, demonstrating an impressive track
            record in building interactive and responsive web applications. My
            key achievements include a 25% increase in user engagement through
            responsive design implementation and a 30% decrease in load time by
            optimizing frontend performance.
          </p>
          <div className={styles.btnContainer}>
            <Button type={"btn"} onClick={handleDownload}>
              Download CV
            </Button>
            <Button
              type={"contact"}
              link={"link"}
              href={`https://wa.me/+2348164670014?text=Hello%2C%20I%20am%20interested%20in%20your%20web%20development%20services.`}
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
