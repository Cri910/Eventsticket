import MusicCards from "./MusicCards";
import styles from "./HeaderContainer.module.css";

const HeaderContainer = () => {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.textFrameLogo}>
        <div className={styles.logoFrameChainblock}>
          <div className={styles.mainContentParent}>
            <img
              className={styles.imageRemovebgPreview6Icon}
              loading="eager"
              alt=""
              src="/imageremovebgpreview-6@2x.png"
            />
          </div>
          <img
            className={styles.imageRemovebgPreview121}
            loading="eager"
            alt=""
            src="/imageremovebgpreview-12-1@2x.png"
          />
          <div className={styles.expandArea}>
            <img
              className={styles.imageRemovebgPreview131}
              loading="eager"
              alt=""
              src="/imageremovebgpreview-13-1@2x.png"
            />
          </div>
          <img
            className={styles.imageRemovebgPreview71}
            loading="eager"
            alt=""
            src="/imageremovebgpreview-7-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.infoCardFrame}>
        <div className={styles.exploreEvents}>Explore events</div>
        <h3 className={styles.music} data-scroll-to="musicText">
          Music
        </h3>
      </div>
      <MusicCards />
    </section>
  );
};

export default HeaderContainer;
