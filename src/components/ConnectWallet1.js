import styles from "./ConnectWallet1.module.css";

const ConnectWallet = () => {
  return (
    <div className={styles.connectWallet}>
      <div className={styles.connectWalletInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.headingParent}>
            <div className={styles.heading}>Connect to wallet</div>
            <div className={styles.modalsdismissButton}>
              <img
                className={styles.xIcon}
                loading="eager"
                alt=""
                src="/x.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.connectWalletChild}>
        <div className={styles.metamaskWrapper}>
          <div className={styles.metamask}>
            <div className={styles.titleFont}>Metamask</div>
            <img
              className={styles.metamaskIcon}
              loading="eager"
              alt=""
              src="/metamask.svg"
            />
            <img
              className={styles.informationCircleIcon}
              loading="eager"
              alt=""
              src="/information-circle.svg"
            />
            <div className={styles.networks}>Networks</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent}>
          <div className={styles.walletconnectWrapper}>
            <div className={styles.walletconnect}>
              <div className={styles.titleFont1}>WalletConnect</div>
              <img
                className={styles.walletconnectChild}
                alt=""
                src="/group-13003.svg"
              />
            </div>
          </div>
          <div className={styles.byConnectingAWalletYouAgParent}>
            <div className={styles.byConnectingA}>
              By connecting a wallet, you agree to Chainblock
            </div>
            <div className={styles.termsOfService}>Terms of Service.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
