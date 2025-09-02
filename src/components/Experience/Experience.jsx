import Card from "../Card/Card";
import styles from "./Experience.module.css";

const Experience = () => {
  const experience = [
    {
      duration: "October, 2024 - Present",
      jobTitle: "Frontend Web Developer",
      link: {
        linkText: "Xpacy-Ltd. 🏠",
        target: "https://xpacy.com",
      },
      jobRole: [
        "Developed an interactive dashboard using React, improving data visibility and decision-making for 10+ teams.",
        "Collaborated with UI/UX designer to implement responsive web designs, resulting in a 25% increase in user engagement.",
        "Optimized frontend performance using code-splitting and lazy loading techniques, decreasing load time by 30%.",
        "Integrated RESTful APIs to enhance application functionality, leading to a more seamless user experience.",
      ],
    },
    {
      duration: "June, 2023 - January, 2024",
      jobTitle: "Frontend Web Developer Intern",
      link: {
        linkText: "Crwn Clothing 👚",
        target: "https://crwn-clothing-app-omega.vercel.app/",
      },
      jobRole: [
        "Assisted in the development of a web application using React, which improved data processing efficiency by 20%.",
        "Collaborated with UI/UX designer to implement responsive web designs, resulting in a 25% increase in user engagement.",
        "Integrated Google Firebase backend services to enhance application functionality, leading to a more seamless user experience.",
      ],
    },
  ];
  return (
    <Card title={"Work Experience"} dataAos={"fade-down"}>
      {experience.map(({ duration, link, jobTitle, jobRole }, index) => (
        <div className={styles.ExperienceContent} key={index}>
          <small>{duration}</small>
          <h3>
            {jobTitle} -{" "}
            <a href={link.target} target="_blank" rel="noopener noreferrer">
              {link.linkText}
            </a>
          </h3>
          <ul>
            {jobRole.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      ))}
    </Card>
  );
};

export default Experience;
