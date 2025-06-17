import HeaderBackground from "../../assets/image.png";
import styles from './Header.module.css';
const Header = () => {
    
    return (
        <div className={styles.Background} style={{backgroundImage: `url(${HeaderBackground})`}} />
    );
};

export default Header;