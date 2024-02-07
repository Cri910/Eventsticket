import styles from "./LogoCBART.module.css";

const LogoCBART = () => {
  return (
    <div className={styles.logoCbArt}>
      <div className={styles.logoCbArt1}>
        <img
          className={styles.logo1Icon}
          loading="eager"
          alt=""
          src="/logo-1@2x.png"
        />
        <div className={styles.chainblockArt}>
          <span>{`Chainblock `}</span>
          <span className={styles.art}>ART</span>
        </div>
      </div>
    </div>
  );
};

export default LogoCBART;
