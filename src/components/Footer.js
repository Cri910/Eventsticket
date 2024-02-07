import LogoCBART from "./LogoCBART";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoFrame}>
        <div className={styles.logoFrame1}>
          <LogoCBART1 />
          <div className={styles.theOnlySiteThatAllowsYouWrapper}>
            <div className={styles.theOnlySiteContainer}>
              <p className={styles.theOnlySite}>
                The only site that allows you to purchase tickets
              </p>
              <p
                className={styles.toYourFavorite}
              >{`to your favorite events through cryptocurrencies.        `}</p>
            </div>
          </div>
        </div>
        <div className={styles.groupFrame}>
          <img
            className={styles.groupFrameChild}
            loading="eager"
            alt=""
            src="/group-33518.svg"
          />
        </div>
        <div className={styles.copyright2022More}>
          Copyright 2022 More. All right reserved.
        </div>
      </div>
      <div className={styles.frameExploreEventsCreatewal}>
        <div className={styles.exploreFrame}>
          <h3 className={styles.marketplace}>Marketplace</h3>
          <div className={styles.explore}>Explore</div>
          <div className={styles.events}>Events</div>
          <div className={styles.createWallet}>Create wallet</div>
          <div className={styles.virtualReality}>Virtual Reality</div>
        </div>
        <div className={styles.eventExplorerParent}>
          <div className={styles.eventExplorer}>
            <div className={styles.helpCenterFrame}>
              <h3 className={styles.resources}>Resources</h3>
              <div className={styles.helpCenter}>Help Center</div>
              <div className={styles.partners}>Partners</div>
              <div className={styles.blog}>Blog</div>
              <div className={styles.newsletter}>Newsletter</div>
            </div>
            <div className={styles.aboutUsFrame}>
              <h3 className={styles.company}>Company</h3>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.careers}>Careers</div>
              <div className={styles.support}>Support</div>
              <div className={styles.privacyPolicyTermsCondition}>
                <div className={styles.community}>{`Community `}</div>
              </div>
            </div>
          </div>
          <div className={styles.footerFrame}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
