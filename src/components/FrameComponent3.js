import { useMemo } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({
  samSon,
  eTH,
  propFlex,
  propPadding,
  propPadding1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="eager"
          alt=""
          src="/rectangle-21@2x.png"
        />
        <div className={styles.samSonParent}>
          <div className={styles.samSon}>{samSon}</div>
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
      <div className={styles.iconWrapper} style={frameDiv1Style}>
        <img className={styles.icon} alt="" src="/icon-1.svg" />
      </div>
    </div>
  );
};

export default FrameComponent3;
