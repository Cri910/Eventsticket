import { useCallback } from "react";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

const FrameComponent11 = () => {
  const onFrameButton1Click = useCallback(() => {
    // Please sync "Modal" to the project
  }, []);

  return (
    <section className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.buyYourTicketsParent}>
            <h1 className={styles.buyYourTickets}>Buy your tickets</h1>
            <h1 className={styles.topEventsOf}>Top Events of the week</h1>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.image3Parent}>
                  <img
                    className={styles.image3Icon}
                    loading="eager"
                    alt=""
                    src="/image-3@2x.png"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/rectangle-21@2x.png"
                  />
                </div>
                <div className={styles.rickStormsParent}>
                  <div className={styles.rickStorms}>Rick Storms</div>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameItem}
                      loading="eager"
                      alt=""
                      src="/ellipse-61@2x.png"
                    />
                    <div className={styles.eth}>19,400.50 ETH</div>
                  </div>
                </div>
                <div className={styles.iconWrapper}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                </div>
              </div>
              <FrameComponent3 samSon="Sam Son" eTH="6,200.50 ETH" />
              <FrameComponent3
                samSon="Jake Robert"
                eTH="8,400.50 ETH"
                propFlex="0.9745"
                propPadding="var(--padding-4xs) var(--padding-xl) var(--padding-6xs) var(--padding-5xs)"
                propPadding1="0px 0px var(--padding-10xs)"
              />
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.image3Group}>
                  <img
                    className={styles.image3Icon1}
                    loading="eager"
                    alt=""
                    src="/image-3-1@2x.png"
                  />
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/rectangle-2-3@2x.png"
                  />
                </div>
                <div className={styles.joeForestParent}>
                  <div className={styles.joeForest}>Joe Forest</div>
                  <div className={styles.ellipseGroup}>
                    <img
                      className={styles.ellipseIcon}
                      loading="eager"
                      alt=""
                      src="/ellipse-61@2x.png"
                    />
                    <div className={styles.eth1}>10,400.50 ETH</div>
                  </div>
                </div>
                <div className={styles.iconContainer}>
                  <img className={styles.icon1} alt="" src="/icon-1.svg" />
                </div>
              </div>
              <FrameComponent2
                rectangle2="/rectangle-2-3@2x.png"
                reeceJackson="Reece Jackson"
                eTH="7,400.50 ETH"
                icon="/icon-1.svg"
              />
              <FrameComponent2
                rectangle2="/rectangle-2-3@2x.png"
                reeceJackson="Scott Moses"
                eTH="8,450.50 ETH"
                icon="/icon-1.svg"
                propPadding="var(--padding-4xs) var(--padding-xl) var(--padding-6xs) var(--padding-5xs)"
                propPadding1="0px 0px var(--padding-10xs)"
              />
              <div className={styles.rectangleParent}>
                <img
                  className={styles.rectangleIcon}
                  loading="eager"
                  alt=""
                  src="/rectangle-2-6@2x.png"
                />
                <div className={styles.laraSmithParent}>
                  <div className={styles.laraSmith}>lara Smith</div>
                  <div className={styles.ellipseContainer}>
                    <img
                      className={styles.frameChild1}
                      loading="eager"
                      alt=""
                      src="/ellipse-61@2x.png"
                    />
                    <div className={styles.eth2}>8,700.50 ETH</div>
                  </div>
                </div>
                <div className={styles.iconFrame}>
                  <img className={styles.icon2} alt="" src="/icon-1.svg" />
                </div>
              </div>
              <FrameComponent2
                rectangle2="/rectangle-2-6@2x.png"
                reeceJackson="Drink Water"
                eTH="6,400.50 ETH"
                icon="/icon-7.svg"
                propPadding="var(--padding-4xs) var(--padding-4xl) var(--padding-6xs) var(--padding-5xs)"
                propPadding1="var(--padding-8xs) var(--padding-12xs) 0px 0px"
              />
              <FrameComponent2
                rectangle2="/rectangle-2-6@2x.png"
                reeceJackson="Rick Hardy"
                eTH="7,490.50 ETH"
                icon="/icon-1.svg"
                propPadding="var(--padding-4xs) var(--padding-xl) var(--padding-6xs) var(--padding-5xs)"
                propPadding1="0px 0px var(--padding-10xs)"
              />
            </div>
          </div>
        </div>
        <button className={styles.seeOthersWrapper}>
          <b className={styles.seeOthers}>See others</b>
        </button>
      </div>
      <div className={styles.frameParent5}>
        <div className={styles.dontHaveAWalletYetParent}>
          <h1 className={styles.dontHaveA}>Don’t have a Wallet yet?</h1>
          <h2 className={styles.dontWorryClickContainer}>
            <p
              className={styles.dontWorryClick}
            >{`Don't worry, click below and create your personalized wallet. `}</p>
            <p className={styles.youCanChoose}>
              You can choose between custodial or non-custodial wallets.
            </p>
          </h2>
        </div>
        <button
          className={styles.createYourWalletWrapper}
          onClick={onFrameButton1Click}
        >
          <b className={styles.createYourWallet}>Create your wallet</b>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent11;
