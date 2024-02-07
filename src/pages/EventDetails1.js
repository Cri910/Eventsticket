import SectionCardForm from "../components/SectionCardForm";
import Footer1 from "../components/Footer1";
import styles from "./EventDetails1.module.css";

const EventDetails1 = () => {
  return (
    <div className={styles.eventDetails}>
      <main className={styles.frameParent}>
        <SectionCardForm dimensions="/left-side4.svg" />
        <div className={styles.locationMarker}>
          <div className={styles.aboutParticipantsFrame}>
            <button className={styles.aboutParticipantsTitle}>
              <div className={styles.aboutParticipantsTitleChild} />
              <b className={styles.about}>ABOUT</b>
            </button>
            <button className={styles.aboutParticipantsTitle1}>
              <div className={styles.aboutParticipantsTitleItem} />
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
      <Footer1 />
    </div>
  );
};

export default EventDetails1;
