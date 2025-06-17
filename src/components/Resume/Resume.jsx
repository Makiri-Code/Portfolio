import styles from './Resume.module.css';
import { MdCloudDownload } from "react-icons/md";
const Resume = () => {
    const handleClick = () => {
        const link = document.createElement('a');
        link.href = '/EmmanuelAmakiriResume.pdf';
        link.download = 'EmmanuelAmakiriResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <button className={styles.DownloadIcon} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" title="Download CV" onClick={handleClick}>
            <MdCloudDownload/>
        </button>
    );
};

export default Resume;