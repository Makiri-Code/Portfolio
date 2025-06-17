import Card from "../Card/Card";
import styles from './Skills.module.css';
import html from '../../assets/logo/html.png';
import css from '../../assets/logo/css.png';
import javascript from '../../assets/logo/javascript-removebg-preview.png';
import react from '../../assets/logo/image-removebg-preview.png';
import rest from '../../assets/logo/rest_api.png';
import git from '../../assets/logo/git.png';
const Skills = () => {
    const skills = [
        {
            imgSrc: html,
            title: 'HTML 5',
        },
        {
            imgSrc: css,
            title: 'CSS 3',
        },
        {
            imgSrc: javascript,
            title: 'JavaScript',
        },
        {
            imgSrc: react,
            title: 'React.Js',
        },
        {
            imgSrc: rest,
            title: 'Rest API',
        },
        {
            imgSrc: git,
            title: 'Git/GitHub',
        },
    ]
    return (
        <Card
            title={'My Tech Skills'}
        >
            <div className={styles.SkillsContainer}>
               {
                    skills.map(({title, imgSrc}, index) => (
                        <div className={styles.Skills} key={index}>
                            <img src={imgSrc} alt="" />
                            <h3>{title}</h3>
                        </div>
                    ))
               }
            </div>
        </Card>
    );
};

export default Skills;