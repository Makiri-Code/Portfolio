import styles from "./Resume.module.css";
import { MdCloudDownload } from "react-icons/md";
const Resume = () => {
  return (
    <button
      className={styles.DownloadIcon}
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      title="Download CV"
    >
      <MdCloudDownload />
    </button>
  );
};

export default Resume;
