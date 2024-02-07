import styles from "./Crypto2.module.css";

const Crypto1 = () => {
  return (
    <div className={styles.crypto}>
      <div className={styles.rectangle} />
      <b className={styles.recent}>Recent</b>
      <div className={styles.cryptoInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.btcParent}>
              <img
                className={styles.btcIcon}
                loading="eager"
                alt=""
                src="/btc.svg"
              />
              <div className={styles.btcWrapper}>
                <div className={styles.btc}>BTC</div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ethParent}>
              <img
                className={styles.ethIcon}
                loading="eager"
                alt=""
                src="/eth.svg"
              />
              <div className={styles.ethWrapper}>
                <div className={styles.eth}>ETH</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.litecoinLtcParent}>
              <img
                className={styles.litecoinLtcIcon}
                loading="eager"
                alt=""
                src="/litecoin-ltc@2x.png"
              />
              <div className={styles.litecoinWrapper}>
                <div className={styles.litecoin}>LITECOIN</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.usdtParent}>
              <img
                className={styles.usdtIcon}
                loading="eager"
                alt=""
                src="/usdt.svg"
              />
              <div className={styles.usdtWrapper}>
                <div className={styles.usdt}>USDT</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.xrpParent}>
              <img
                className={styles.xrpIcon}
                loading="eager"
                alt=""
                src="/xrp.svg"
              />
              <div className={styles.xprWrapper}>
                <div className={styles.xpr}>XPR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto1;
