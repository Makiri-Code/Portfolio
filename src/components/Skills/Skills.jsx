import Card from "../Card/Card";
import styles from "./Skills.module.css";
import html from "../../assets/logo/html.png";
import css from "../../assets/logo/css.png";
import javascript from "../../assets/logo/javascript-removebg-preview.png";
import react from "../../assets/logo/image-removebg-preview.png";
import rest from "../../assets/logo/rest_api.png";
import git from "../../assets/logo/git.png";
import redux from "../../assets/logo/redux.png";
import tailwind from "../../assets/logo/tailwind.jpeg";
const skill = [
  {
    imgSrc: html,
    title: "HTML 5",
  },
  {
    imgSrc: css,
    title: "CSS 3",
  },
  {
    imgSrc: javascript,
    title: "JavaScript",
  },
  {
    imgSrc: react,
    title: "React.Js",
  },
  {
    imgSrc: redux,
    title: "Redux.Js",
  },
  {
    imgSrc: tailwind,
    title: "Tailwind",
  },
  {
    imgSrc: rest,
    title: "Rest API",
  },
  {
    imgSrc: git,
    title: "Git/GitHub",
  },
];
const Skills = () => {
  return (
    <Card title={"Tech Stack"} dataAos={"zoom-in"}>
      <div className={styles.SkillsContainer}>
        <div className={styles.SkillsWrapper}>
          {skill.map(({ title, imgSrc }, index) => (
            <div className={styles.Skills} key={`first-${index}`}>
              <img src={imgSrc} alt={title} />
              <h3>{title}</h3>
            </div>
          ))}

          {/* duplicate set for seamless loop */}
          {skill.map(({ title, imgSrc }, index) => (
            <div className={styles.Skills} key={`second-${index}`}>
              <img src={imgSrc} alt={title} />
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Skills;
