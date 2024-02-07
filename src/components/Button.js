import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles.button}>
      <b className={styles.buy}>Buy</b>
    </button>
  );
};

export default Button;
