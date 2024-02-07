import SectionCardForm from "../components/SectionCardForm";
import Footer1 from "../components/Footer1";
import styles from "./EventDetails.module.css";

const EventDetails = () => {
  return (
    <div className={styles.eventDetails}>
      <main className={styles.frameParent}>
        <SectionCardForm
          dimensions="/left-side3.svg"
          rectangleDivWidth="100%"
          rectangleDivRight="-0.5px"
          frameButtonPadding="0px var(--padding-base) 0px var(--padding-5xs)"
          icons8HeartOutline1Padding="var(--padding-5xs) var(--padding-mid) var(--padding-5xs) var(--padding-base)"
          mUSICALPadding="0px var(--padding-mid) 0px var(--padding-9xs)"
          anastasiaPadding="0px var(--padding-12xs) 0px 0px"
          groupDivPadding="0px var(--padding-9xs)"
          dECPadding="var(--padding-5xs) var(--padding-lg) var(--padding-6xs) var(--padding-mini)"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.about}>ABOUT</b>
            </button>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.participants}>PARTICIPANTS</div>
            </button>
          </div>
        </div>
        <section className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
          Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et.
          Und commodo, fermentum, mauris leo eget.
        </section>
        <div className={styles.locationWrapper}>
          <b className={styles.location}>LOCATION</b>
        </div>
      </main>
      <img className={styles.notchIcon} alt="" />
      <img className={styles.recordingIndicatorIcon} alt="" />
      <Footer1
        propLeft="29.5px"
        propPadding="0px var(--padding-2xl) 0px var(--padding-xl)"
        propPadding1="var(--padding-lgi) var(--padding-32xl) var(--padding-lg) var(--padding-xl)"
        propGap="unset"
        propWidth="calc(100% - 1px)"
        propPosition="absolute"
        propMargin="0 !important"
        propTop="13.6px"
        propRight="21.5px"
      />
    </div>
  );
};

export default EventDetails;
