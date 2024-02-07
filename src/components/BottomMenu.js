import styles from "./BottomMenu.module.css";

const BottomMenu = () => {
  return (
    <footer className={styles.bottomMenu}>
      <div className={styles.bottomMenuChild} />
      <img
        className={styles.icons8Account1}
        loading="eager"
        alt=""
        src="/icons8-account-11.svg"
      />
      <div className={styles.bottomMenuInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.icons8Star11Wrapper}>
              <img
                className={styles.icons8Star11}
                loading="eager"
                alt=""
                src="/icons8-star-1-1.svg"
              />
            </div>
            <b className={styles.featured}>Featured</b>
          </div>
          <div className={styles.icons8Schedule11Wrapper}>
            <img
              className={styles.icons8Schedule11}
              loading="eager"
              alt=""
              src="/icons8-schedule-1-11.svg"
            />
          </div>
          <img
            className={styles.primengIconsV500wallet}
            loading="eager"
            alt=""
            src="/primeng-icons-v500wallet-1.svg"
          />
        </div>
      </div>
      <div className={styles.homeIndicatorLight}>
        <div className={styles.homeIndicator} />
      </div>
    </footer>
  );
};

export default BottomMenu;
