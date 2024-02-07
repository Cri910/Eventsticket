import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <button
              className={styles.connectWalletWrapper}
              onClick={onFrameButtonClick}
            >
              <b className={styles.connectWallet}>Connect Wallet</b>
            </button>
            <div className={styles.connectYourWalletWrapper}>
              <h1 className={styles.connectYourWallet}>Connect your wallet</h1>
            </div>
          </div>
        </div>
        <h1 className={styles.buyYourTicket}>Buy your ticket in 3 clicks</h1>
      </div>
    </div>
  );
};

export default FrameComponent5;
