import { useMemo } from "react";
import styles from "./SectionCardForm.module.css";

const SectionCardForm = ({
  dimensions,
  rectangleDivWidth,
  rectangleDivRight,
  frameButtonPadding,
  icons8HeartOutline1Padding,
  mUSICALPadding,
  anastasiaPadding,
  groupDivPadding,
  dECPadding,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      width: rectangleDivWidth,
      right: rectangleDivRight,
    };
  }, [rectangleDivWidth, rectangleDivRight]);

  const frameDiv5Style = useMemo(() => {
    return {
      padding: frameButtonPadding,
    };
  }, [frameButtonPadding]);

  const frameDiv6Style = useMemo(() => {
    return {
      padding: icons8HeartOutline1Padding,
    };
  }, [icons8HeartOutline1Padding]);

  const frameDiv7Style = useMemo(() => {
    return {
      padding: mUSICALPadding,
    };
  }, [mUSICALPadding]);

  const musicFrameStyle = useMemo(() => {
    return {
      padding: anastasiaPadding,
    };
  }, [anastasiaPadding]);

  const decTextStyle = useMemo(() => {
    return {
      padding: groupDivPadding,
    };
  }, [groupDivPadding]);

  const groupDivStyle = useMemo(() => {
    return {
      padding: dECPadding,
    };
  }, [dECPadding]);

  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup} style={frameDiv4Style}>
        <img className={styles.frameChild} alt="" src="/group-2@2x.png" />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.frameContainer}>
        <header className={styles.leftSideParent}>
          <img
            className={styles.leftSideIcon}
            loading="eager"
            alt=""
            src={dimensions}
          />
          <div className={styles.mobileSignalParent}>
            <img
              className={styles.mobileSignalIcon}
              loading="eager"
              alt=""
              src="/mobile-signal3.svg"
            />
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi3.svg"
            />
            <input className={styles.battery} type="checkbox" />
          </div>
        </header>
        <div className={styles.frameWrapper} style={frameDiv5Style}>
          <div className={styles.frameDiv}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameInner} />
              <img
                className={styles.icons8Left1}
                alt=""
                src="/icons8-left-1.svg"
              />
            </button>
            <div className={styles.rectangleGroup} style={frameDiv6Style}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.icons8HeartOutline1}
                loading="eager"
                alt=""
                src="/icons8-heart-outline-1.svg"
              />
              <img
                className={styles.icons8ShareRounded1}
                loading="eager"
                alt=""
                src="/icons8-share-rounded-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1} style={frameDiv7Style}>
        <div className={styles.musicalParent}>
          <div className={styles.musical}>MUSICAL</div>
          <div className={styles.musicFrame} style={musicFrameStyle}>
            <div className={styles.anastasiaLabel}>
              <h1 className={styles.anastasia}>Anastasia</h1>
              <div className={styles.decText} style={decTextStyle}>
                <div className={styles.starting910Pm}>STARTING 9:10 PM</div>
              </div>
            </div>
            <div className={styles.rectangleContainer} style={groupDivStyle}>
              <div className={styles.frameChild1} />
              <div className={styles.dec}>DEC</div>
              <b className={styles.buyTicketButton}>21</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCardForm;
