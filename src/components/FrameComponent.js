import LogoCBART1 from "./LogoCBART1";
import styles from "./FrameComponent6.module.css";

const FrameComponent1 = () => {
  return (
    <footer className={styles.desktop2Inner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.logoCbArtParent}>
              <LogoCBART1 />
              <div className={styles.theOnlySiteThatAllowsYouWrapper}>
                <h2 className={styles.theOnlySiteContainer}>
                  <p className={styles.theOnlySite}>
                    The only site that allows you to purchase tickets
                  </p>
                  <p
                    className={styles.toYourFavorite}
                  >{`to your favorite events through cryptocurrencies.        `}</p>
                </h2>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.vectorIcon}
                    loading="eager"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.ellipseGroup}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.vectorIcon1}
                    loading="eager"
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.vectorIcon2}
                    loading="eager"
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
                <div className={styles.ellipseParent1}>
                  <div className={styles.ellipseDiv} />
                  <img
                    className={styles.vectorIcon3}
                    loading="eager"
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.marketplaceParent}>
                  <h1 className={styles.marketplace}>Marketplace</h1>
                  <h1 className={styles.explore}>Explore</h1>
                  <h1 className={styles.events}>Events</h1>
                  <h1 className={styles.createWallet}>Create wallet</h1>
                  <h1 className={styles.virtualReality}>Virtual Reality</h1>
                </div>
                <div className={styles.resourcesParent}>
                  <h1 className={styles.resources}>Resources</h1>
                  <h1 className={styles.helpCenter}>Help Center</h1>
                  <h1 className={styles.partners}>Partners</h1>
                  <h1 className={styles.blog}>Blog</h1>
                  <h1 className={styles.newsletter}>Newsletter</h1>
                </div>
              </div>
              <div className={styles.companyParent}>
                <h1 className={styles.company}>Company</h1>
                <h1 className={styles.aboutUs}>About Us</h1>
                <h1 className={styles.careers}>Careers</h1>
                <h1 className={styles.support}>Support</h1>
                <div className={styles.communityWrapper}>
                  <h1 className={styles.community}>{`Community `}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright2022MoreAllRightParent}>
          <h2 className={styles.copyright2022More}>
            Copyright 2022 More. All right reserved.
          </h2>
          <div className={styles.privacyPolicyParent}>
            <h2 className={styles.privacyPolicy}>Privacy Policy</h2>
            <h2 className={styles.termsConditions}>{`Terms & Conditions`}</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent1;
