import BottomMenu1 from "../components/BottomMenu1";
import styles from "./WalletMob.module.css";

const WalletMob = () => {
  return (
    <div className={styles.walletMob}>
      <section className={styles.walletMobChild} />
      <div className={styles.walletMobItem} />
      <section className={styles.containerFrame}>
        <div className={styles.buttonFrame}>
          <img className={styles.g430Icon} alt="" src="/g430.svg" />
          <div className={styles.paymentMethodSelector}>
            <div className={styles.choosePaymentMethodWrapper}>
              <h3 className={styles.choosePaymentMethod}>
                Choose payment method
              </h3>
            </div>
            <div className={styles.paymentMethodSelectorChild} />
            <img
              className={styles.path534Icon}
              loading="eager"
              alt=""
              src="/path534.svg"
            />
          </div>
        </div>
      </section>
      <section className={styles.colorGroupFrame}>
        <div className={styles.buttonColor}>
          <div className={styles.wrapperGroup18177}>
            <img
              className={styles.wrapperGroup18177Child}
              loading="eager"
              alt=""
              src="/group-181771.svg"
            />
          </div>
          <div className={styles.frameContinue}>
            <div className={styles.continue}>CONNECT WALLET</div>
            <div className={styles.continue1}>CONNECT WALLET</div>
          </div>
          <div className={styles.ellipseSeparator} />
        </div>
        <div className={styles.buttonColor1}>
          <div className={styles.wrapperGroup181771}>
            <img
              className={styles.wrapperGroup18177Item}
              loading="eager"
              alt=""
              src="/group-18177-1.svg"
            />
          </div>
          <div className={styles.continue2}>CREATE WALLET</div>
        </div>
      </section>
      <footer className={styles.starIconFrame}>
        <BottomMenu1 />
        <img
          className={styles.icons8Star11}
          alt=""
          src="/icons8-star-1-1-1.svg"
        />
        <b className={styles.wallet}>Wallet</b>
      </footer>
      <img className={styles.notchIcon} alt="" />
      <section className={styles.batteryFrame}>
        <div className={styles.wifiFrame}>
          <div className={styles.mobileSignalFrame} />
          <img
            className={styles.moreVerticalIcon}
            loading="eager"
            alt=""
            src="/morevertical.svg"
          />
          <input className={styles.battery} type="checkbox" />
          <img
            className={styles.wifiIcon}
            loading="eager"
            alt=""
            src="/wifi1.svg"
          />
          <img
            className={styles.mobileSignalIcon}
            loading="eager"
            alt=""
            src="/mobile-signal1.svg"
          />
        </div>
      </section>
      <img className={styles.recordingIndicatorIcon} alt="" />
      <div className={styles.walletMobInner}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.arrowLeftIcon}
            loading="eager"
            alt=""
            src="/arrowleft.svg"
          />
          <img
            className={styles.leftSideIcon}
            loading="eager"
            alt=""
            src="/left-side1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletMob;
