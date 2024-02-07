import { useCallback } from "react";
import MusicCards from "./MusicCards";
import { useNavigate } from "react-router-dom";
import styles from "./OverallHeader.module.css";

const OverallHeader = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <section className={styles.overallHeader}>
      <h3 className={styles.sport}>Sport</h3>
      <MusicCards />
      <button className={styles.viewMoreWrapper} onClick={onFrameButtonClick}>
        <div className={styles.viewMore}>View More</div>
      </button>
    </section>
  );
};

export default OverallHeader;
