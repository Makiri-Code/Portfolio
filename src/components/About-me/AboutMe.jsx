import styles from './AboutMe.module.css';
import profile from '../../assets/image.png';
import Card from '../Card/Card';
const AboutMe = () => {
    return (
        <Card title={'About me'}>
            <div className={styles.ProfileImgContainer}>
                <div className={styles.ImgContainer}>
                    <img src={profile} alt="" />
                </div>
                <div className={styles.AboutMeTextContainer}>
                    <p>
                        A Frontend Developer with expertise in React, HTML, CSS, JavaScript, and RESTful API integration, demonstrating an impressive track record in building interactive and responsive web applications. My key achievements include a 25% increase in user engagement through responsive design implementation and a 30% decrease in load time by optimizing frontend performance.
                    </p>
                </div>
            </div>
        </Card>
        
    );
};

export default AboutMe;