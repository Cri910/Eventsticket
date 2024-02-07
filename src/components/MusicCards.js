import Button from "./Button";
import styles from "./MusicCards.module.css";

const MusicCards = () => {
  return (
    <div className={styles.musicCards}>
      <div className={styles.infoCard}>
        <img
          className={styles.rectangleFrameIcon}
          loading="eager"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className={styles.innerCardFrame}>
          <div className={styles.primaryContent}>
            <div className={styles.newMusicalFrame}>
              <div className={styles.anastasiaParent}>
                <b className={styles.anastasia}>{`Anastasia `}</b>
                <b className={styles.theNewMusical}>The new musical</b>
              </div>
              <Button />
            </div>
            <div className={styles.sportCardFrame}>
              <div className={styles.price}>Price</div>
              <div className={styles.eTHIcon}>
                <div className={styles.priceFrame}>
                  <img
                    className={styles.priceFrameChild}
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                  <div className={styles.eth}>1.90 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoCard1}>
        <img
          className={styles.infoCardChild}
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className={styles.innerCardFrame1}>
          <div className={styles.primaryContent1}>
            <div className={styles.frameParent}>
              <div className={styles.anastasiaGroup}>
                <b className={styles.anastasia1}>{`Anastasia `}</b>
                <b className={styles.theNewMusical1}>The new musical</b>
              </div>
              <Button />
            </div>
            <div className={styles.sportCardFrame1}>
              <div className={styles.price1}>Price</div>
              <div className={styles.eTHIcon1}>
                <div className={styles.priceFrame1}>
                  <img
                    className={styles.priceFrameItem}
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                  <div className={styles.eth1}>1.90 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoCard2}>
        <img className={styles.infoCardItem} alt="" src="/rectangle-2@2x.png" />
        <div className={styles.innerCardFrame2}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.anastasiaContainer}>
                <b className={styles.anastasia2}>{`Anastasia `}</b>
                <b className={styles.theNewMusical2}>The new musical</b>
              </div>
              <Button />
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price2}>Price</div>
              <div className={styles.frameWrapper}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                  <div className={styles.eth2}>1.90 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCards;
