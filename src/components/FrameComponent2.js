import { useMemo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  rectangle2,
  reeceJackson,
  eTH,
  icon,
  propPadding,
  propPadding1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src={rectangle2}
        />
        <div className={styles.reeceJacksonParent}>
          <div className={styles.reeceJackson}>{reeceJackson}</div>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameItem}
              loading="eager"
              alt=""
              src="/ellipse-61@2x.png"
            />
            <div className={styles.eth}>{eTH}</div>
          </div>
        </div>
      </div>
      <div className={styles.iconWrapper} style={frameDiv3Style}>
        <img className={styles.icon} alt="" src={icon} />
      </div>
    </div>
  );
};

export default FrameComponent2;
