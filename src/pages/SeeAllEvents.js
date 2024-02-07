import EventCard from "../components/EventCard";
import styles from "./SeeAllEvents.module.css";

const SeeAllEvents = () => {
  return (
    <div className={styles.seeAllEvents}>
      <header className={styles.frameParent}>
        <div className={styles.mobileSignalWifiFrame}>
          <div className={styles.batteryCapVector}>
            <i className={styles.time}>9:41</i>
            <img
              className={styles.leftSideIcon}
              loading="eager"
              alt=""
              src="/left-side2.svg"
            />
          </div>
          <div className={styles.backFrameWrapper}>
            <div className={styles.backFrame}>
              <img
                className={styles.backIcon}
                loading="eager"
                alt=""
                src="/back1.svg"
              />
              <h2 className={styles.helloAshfak}>Events</h2>
            </div>
          </div>
        </div>
        <div className={styles.searchFrame}>
          <div className={styles.moreFrame}>
            <div className={styles.weeklyScheduleGroup}>
              <div className={styles.dayFrame}>
                <img
                  className={styles.cellularConnectionIcon}
                  alt=""
                  src="/cellular-connection.svg"
                />
                <img
                  className={styles.mobileSignalIcon}
                  loading="eager"
                  alt=""
                  src="/mobile-signal2.svg"
                />
              </div>
              <div className={styles.dayFrame1}>
                <img className={styles.wifiIcon} alt="" src="/wifi2.svg" />
                <img
                  className={styles.wifiIcon1}
                  loading="eager"
                  alt=""
                  src="/wifi21.svg"
                />
              </div>
              <div className={styles.battery}>
                <img
                  className={styles.capIcon}
                  loading="eager"
                  alt=""
                  src="/cap.svg"
                />
                <div className={styles.capacity} />
                <div className={styles.satMayPMText}>
                  <input className={styles.border} type="checkbox" />
                  <input className={styles.battery1} type="checkbox" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.searchParent}>
            <img
              className={styles.searchIcon}
              loading="eager"
              alt=""
              src="/search.svg"
            />
            <img
              className={styles.moreIcon}
              loading="eager"
              alt=""
              src="/more1.svg"
            />
          </div>
        </div>
      </header>
      <main className={styles.seeAllEventsInner}>
        <section className={styles.frameGroup}>
          <EventCard
            dimensionCode="/group-33349@2x.png"
            eventDateTime="Wed, Apr 28 •
5:30 PM
"
            locationName="Radius Gallery • Santa Cruz, CA
"
          />
          <EventCard
            dimensionCode="/group-33349-1@2x.png"
            eventDateTime="Sat, May 1 •
2:00 PM
"
            locationName="Lot 13 • Oakland, CA
"
            propPadding="var(--padding-6xs) var(--padding-lg) var(--padding-6xs) var(--padding-5xs)"
            propBorderRadius="unset"
            propWidth="unset"
            propAlignSelf="stretch"
            propAlignSelf1="unset"
          />
          <EventCard
            dimensionCode="/group-33349-2@2x.png"
            eventDateTime="Sat, Apr 24 •
1:30 PM
"
            locationName="53 Bush St • San Francisco, CA
"
            propPadding="var(--padding-4xs) var(--padding-9xs) 0px var(--padding-5xs)"
            propBorderRadius="unset"
            propWidth="205px"
            propAlignSelf="unset"
            propAlignSelf1="stretch"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.iconbookmark} />
              <img
                className={styles.frameItem}
                loading="eager"
                alt=""
                src="/group-33349-3@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.friApr23600PmParent}>
                  <div className={styles.friApr23}>Fri, Apr 23 • 6:00 PM</div>
                  <div className={styles.imGoingTo}>
                    International Gala Music Festival
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <input
                    className={styles.frameInner}
                    checked={true}
                    type="radio"
                  />
                  <div className={styles.min}>Lot 13 • Oakland, CA</div>
                </div>
              </div>
            </div>
          </div>
          <EventCard
            dimensionCode="/rectangle-211@2x.png"
            eventDateTime="Mon, Jun 21 •
10:00 PM
"
            locationName="Longboard Margarita Bar "
            propPadding="var(--padding-4xs) var(--padding-lgi) var(--padding-8xs) var(--padding-xs)"
            propBorderRadius="5px"
            propWidth="unset"
            propAlignSelf="stretch"
            propAlignSelf1="unset"
          />
        </section>
      </main>
      <img className={styles.notchIcon} alt="" />
      <img className={styles.recordingIndicatorIcon} alt="" />
      <div className={styles.seeAllEventsChild}>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <div className={styles.iconbookmark1} />
          <img
            className={styles.groupIcon}
            loading="eager"
            alt=""
            src="/group-33349-4@2x.png"
          />
          <div className={styles.frameParent1}>
            <div className={styles.sunApr251015AmParent}>
              <div className={styles.sunApr25}>Sun, Apr 25 • 10:15 AM</div>
              <div className={styles.imGoingTo1}>
                International Gala Music Festival
              </div>
            </div>
            <div className={styles.frameParent2}>
              <input
                className={styles.groupInput}
                checked={true}
                type="radio"
              />
              <div
                className={styles.min1}
              >{`36 Guild Street London, UK  `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllEvents;
