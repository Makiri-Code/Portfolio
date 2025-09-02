import styles from "./Card.module.css";
import AOS from "aos";
const Card = ({ title, children, dataAos }) => {
  AOS.init();
  return (
    <div className={styles.Card} data-aos={dataAos} data-aos-duration="1000">
      <div className={styles.CardHeader}>
        <h2>{title}</h2>
        <>{children}</>
      </div>
    </div>
  );
};

export default Card;
