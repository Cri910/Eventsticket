import ConnectWallet from "./ConnectWallet1";
import Crypto1 from "./Crypto2";
import styles from "./Wallet.module.css";

const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <ConnectWallet1 />
        <Crypto2 />
      </section>
    </div>
  );
};

export default Wallet;
