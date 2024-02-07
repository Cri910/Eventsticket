import BottomMenu1 from "../components/BottomMenu1";
import styles from "./CreateWalletMobile.module.css";

const CreateWalletMobile = () => {
  return (
    <div className={styles.createWalletMobile}>
      <section className={styles.createWalletMobileChild} />
      <div className={styles.createWalletMobileItem} />
      <section className={styles.frameContainer}>
        <div className={styles.frameContainerInner}>
          <div className={styles.createYourWalletTextParent}>
            <div className={styles.createYourWalletText}>
              <div className={styles.cryptoCreditCardFrame}>
                <div className={styles.tabsHorizontalContainer} />
                <img
                  className={styles.moreIcon}
                  loading="eager"
                  alt=""
                  src="/more.svg"
                />
                <input className={styles.battery} type="checkbox" />
                <img
                  className={styles.wifiIcon}
                  loading="eager"
                  alt=""
                  src="/wifi.svg"
                />
                <img
                  className={styles.mobileSignalIcon}
                  loading="eager"
                  alt=""
                  src="/mobile-signal.svg"
                />
              </div>
            </div>
            <div className={styles.addressFieldContainer}>
              <div className={styles.privateKeyField}>
                <img className={styles.g430Icon} alt="" src="/g430.svg" />
                <div className={styles.vectorPath}>
                  <img
                    className={styles.path534Icon}
                    loading="eager"
                    alt=""
                    src="/path534.svg"
                  />
                  <div className={styles.rectangleFrame} />
                  <div className={styles.textLabel}>
                    <h2 className={styles.createYourWallet}>
                      Create your wallet
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className={styles.notchIcon} alt="" />
      <div className={styles.frameTabsContainer}>
        <div className={styles.cryptoCreditCard}>
          <div className={styles.tabsItemHorizontalWrapper}>
            <div className={styles.tabsItemHorizontal}>
              <div className={styles.logIn}>Crypto</div>
              <div className={styles.activeIndicator} />
            </div>
          </div>
          <div className={styles.tabsItemHorizontalContainer}>
            <div className={styles.tabsItemHorizontal1}>
              <div className={styles.guestWrapper}>
                <div className={styles.guest}>Credit Card</div>
              </div>
              <div className={styles.activeIndicator1} />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.recordingIndicatorIcon} alt="" />
      <div className={styles.createWalletMobileInner}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.backIcon}
            loading="eager"
            alt=""
            src="/back.svg"
          />
          <img
            className={styles.leftSideIcon}
            loading="eager"
            alt=""
            src="/left-side.svg"
          />
        </div>
      </div>
      <section className={styles.frameSection}>
        <div className={styles.frameParent}>
          <div className={styles.addressParent}>
            <input
              className={styles.address}
              placeholder="Address"
              type="text"
            />
            <div className={styles.fieldParent}>
              <div className={styles.field}>
                <div className={styles.textGoesHere}>Your phone number</div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameItem} />
              <input
                className={styles.privateKey}
                placeholder="Private key"
                type="text"
              />
            </div>
            <div className={styles.fieldGroup}>
              <div className={styles.field1}>
                <div className={styles.textGoesHere1}>Your phone number</div>
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector-12.svg" />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.buttonColorWrapper}>
        <div className={styles.buttonColor}>
          <div className={styles.wrapperGroup18177}>
            <img
              className={styles.wrapperGroup18177Child}
              loading="eager"
              alt=""
              src="/group-18177.svg"
            />
          </div>
          <div className={styles.continue}>DOWNLOAD WALLET INFO</div>
        </div>
      </div>
      <section className={styles.bottomMenuParent}>
        <BottomMenu1 propWidth="375px" propGap="unset" />
        <img
          className={styles.icons8Star11}
          alt=""
          src="/icons8-star-1-1-1.svg"
        />
        <b className={styles.wallet}>Wallet</b>
      </section>
    </div>
  );
};

export default CreateWalletMobile;
