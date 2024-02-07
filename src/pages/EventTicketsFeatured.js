import BottomMenu from "../components/BottomMenu";
import styles from "./EventTicketsFeatured.module.css";

const EventTicketsFeatured = () => {
  return (
    <div className={styles.eventTicketsFeatured}>
      <div className={styles.eventTicketsFeaturedInner}>
        <header className={styles.leftSideParent}>
          <img
            className={styles.leftSideIcon}
            loading="eager"
            alt=""
            src="/left-side5.svg"
          />
          <div className={styles.mobileSignalParent}>
            <img
              className={styles.mobileSignalIcon}
              loading="eager"
              alt=""
              src="/mobile-signal4.svg"
            />
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi4.svg"
            />
            <input className={styles.battery} type="checkbox" />
          </div>
        </header>
      </div>
      <section className={styles.eventTicketsFeaturedChild}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.december16910PmParent}>
              <div className={styles.december16910}>DECEMBER 16, 9:10 PM</div>
              <div className={styles.collectWalletButtonWrapper}>
                <button className={styles.collectWalletButton}>
                  <div className={styles.collectWalletButtonChild} />
                  <b className={styles.connectWallet}>CONNECT WALLET</b>
                </button>
              </div>
            </div>
            <h1 className={styles.exploreEvents}>Explore events</h1>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.searchBarChild} />
            <div className={styles.icons8Search1Parent}>
              <img
                className={styles.icons8Search1}
                alt=""
                src="/icons8-search-1.svg"
              />
              <input
                className={styles.search}
                placeholder="Search"
                type="text"
              />
            </div>
            <img
              className={styles.icons8Slider1}
              alt=""
              src="/icons8-slider-1.svg"
            />
          </div>
        </div>
      </section>
      <img className={styles.notchIcon} alt="" />
      <img className={styles.recordingIndicatorIcon} alt="" />
      <div className={styles.featuredWrapper}>
        <b className={styles.featured}>FEATURED</b>
      </div>
      <section className={styles.frameSection}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.maskGroupParent}>
              <img
                className={styles.maskGroupIcon}
                loading="eager"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.dec}>DEC</div>
                <b className={styles.b}>21</b>
              </div>
              <div className={styles.concertWrapper}>
                <div className={styles.concert}>CONCERT</div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/rectangle-3@2x.png"
                />
                <div className={styles.show}>SHOW</div>
                <h2 className={styles.fireShow}>Fire Show</h2>
              </div>
              <img
                className={styles.frameInner}
                loading="eager"
                alt=""
                src="/rectangle-2111@2x.png"
              />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-462@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.forYouParent}>
              <b className={styles.forYou}>FOR YOU</b>
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <img
                    className={styles.primengIconsV500wallet}
                    loading="eager"
                    alt=""
                    src="/primeng-icons-v500wallet1.svg"
                  />
                </div>
                <div className={styles.dontHaveAWalletYetParent}>
                  <b className={styles.dontHaveA}>Don’t have a wallet yet?</b>
                  <div className={styles.dontWorryClickContainer}>
                    <p className={styles.dontWorryClick}>
                      Don't worry, click here and create
                    </p>
                    <p
                      className={styles.yourPersonalizedWallet}
                    >{`your personalized wallet. `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomMenu />
    </div>
  );
};

export default EventTicketsFeatured;
