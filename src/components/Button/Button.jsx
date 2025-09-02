import styles from "./Button.module.css";
function Button({ children, type, link, href, ...otherProps }) {
  if (link)
    return (
      <a href={href} className={styles[type]} target="_blank">
        {children}
      </a>
    );
  return (
    <button className={styles[type]} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
