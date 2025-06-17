import styles from './Card.module.css';
const Card = ({title, children}) => {
    return (
               <div className={styles.Card}>
                   <div className={styles.CardHeader}>
                       <h2>{title}</h2>
                        <>
                            {children}
                        </>
                    </div>
                </div>
    );
};

export default Card;