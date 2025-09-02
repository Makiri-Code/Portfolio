import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.FooterContainer}>
      <p>&copy; All right reserved. </p>
      <strong>Amakiri Emmanuel ❤</strong>
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
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a
          className={styles.FaIcons}
          href="https://www.linkedin.com/in/emmanuel-amakiri-10a317174/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
