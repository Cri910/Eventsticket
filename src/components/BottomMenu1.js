import { useMemo } from "react";
import styles from "./BottomMenu1.module.css";

const BottomMenu1 = ({ propWidth, propGap }) => {
  const rectangleDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const continueFrameStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.bottomMenu}>
      <div className={styles.bottomMenuChild} style={rectangleDiv1Style} />
      <b className={styles.featured}>Featured</b>
      <img
        className={styles.icons8Account1}
        loading="eager"
        alt=""
        src="/icons8-account-1.svg"
      />
      <div className={styles.buttonColorFrame}>
        <div className={styles.continueFrame} style={continueFrameStyle}>
          <img className={styles.icons8Star11} loading="eager" alt="" />
          <div className={styles.scheduleIcon}>
            <img
              className={styles.icons8Schedule11}
              loading="eager"
              alt=""
              src="/icons8-schedule-1-1.svg"
            />
          </div>
          <div className={styles.homeIndicatorLight}>
            <img
              className={styles.primengIconsV500wallet}
              loading="eager"
              alt=""
              src="/primeng-icons-v500wallet.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomMenu1}>
        <div className={styles.homeIndicatorLight1}>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
};

export default BottomMenu1;
