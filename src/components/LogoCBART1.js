import styles from "./LogoCBART1.module.css";

const LogoCBART1 = () => {
  return (
    <div className={styles.logoCbArt}>
      <div className={styles.logoCbArt1}>
        <img
          className={styles.logo1Icon}
          loading="eager"
          alt=""
          src="/logo-11@2x.png"
        />
        <div className={styles.chainblockArt}>
          <span>{`Chainblock `}</span>
          <span className={styles.art}>ART</span>
        </div>
      </div>
    </div>
  );
};

export default LogoCBART1;
