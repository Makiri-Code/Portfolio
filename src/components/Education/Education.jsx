import Card from "../Card/Card";
import styles from "./Education.module.css";
const Education = () => {
  const courses = [
    {
      year: "July, 2023",
      certificate: "Programming With JavaScript",
      school: "Coursera",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/V6QSTJNANQMJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      year: "September, 2023",
      certificate: "React.Js Basics",
      school: "Meta - Coursera",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/RVRMQCJQCSVV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      year: "November, 2023",
      certificate: "Advanced React.Js",
      school: "Meta - Coursera",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/ZUV564NL8PHP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
  ];
  return (
    <Card title={"Training & Courses"} dataAos={"fade-right"}>
      <div className={styles.EducationContainer}>
        {courses.map(
          ({ year, certificate, certificate_link, school }, index) => (
            <div className={styles.EducationCard} key={index}>
              <div className={styles.CardBody}>
                <small>{year}</small>
                <h3>{certificate}</h3>
                <p>{school}</p>
              </div>
              <div className={styles.CardFooter}>
                <a
                  href={certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See certificate{" "}
                  <i class="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </Card>
  );
};

export default Education;
