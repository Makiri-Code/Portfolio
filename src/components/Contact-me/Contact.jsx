import Card from "../Card/Card";
import styles from "./Contact.module.css";
import blur from "../../assets/svg-shape-11.svg";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <Card title={"Get In Touch With Me"} dataAos={"fade-up"}>
      <div className={styles.ContactContainer}>
        <div className={styles.ContactText}>
          <p>
            <span>🚀 Let’s Build Something Awesome Together!</span> Got an idea,
            a project, or just want to say hi? I’m always up for a chat! Drop me
            a message — I’d love to hear from you!
          </p>
          <a href="https://github.com/Makiri-Code/" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100076691955707"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-amakiri-10a317174/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/Makiri_manuel" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <div className={styles.ImageContainer}>
          {/* <img src={blur} alt="" /> */}
          {/* <img src={profile} alt="" /> */}
        </div>
      </div>
    </Card>
  );
};

export default Contact;
