import { useCallback } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent11 from "../components/FrameComponent1";
import FrameComponent1 from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop = () => {
  const onFrameButtonClick = useCallback(() => {
    // Please sync "Modal" to the project
  }, []);

  return (
    <div className={styles.desktop2}>
      <section className={styles.desktop2Inner}>
        <div className={styles.frameParent}>
          <FrameComponent5 />
          <FrameComponent4 />
          <div className={styles.frameGroup}>
            <button
              className={styles.buyNowWrapper}
              onClick={onFrameButtonClick}
            >
              <b className={styles.buyNow}>Buy Now</b>
            </button>
            <button className={styles.watchVideoWrapper}>
              <b className={styles.watchVideo}>Watch Video</b>
            </button>
          </div>
        </div>
      </section>
      <FrameComponent11 />
      <div className={styles.desktop2Child} />
      <FrameComponent1 />
    </div>
  );
};

export default Desktop;
