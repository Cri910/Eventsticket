import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const navigate = useNavigate();

  const onNavClick = useCallback(() => {
    navigate("/connect-wallet");
  }, [navigate]);

  const onBuyTicketsTextClick = useCallback(() => {
    // Please sync "Pay method/Default" to the project
  }, []);

  const onCreateWalletTextClick = useCallback(() => {
    // Please sync "Pay method/Create wallet" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='musicText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header className={styles.nav} onClick={onNavClick}>
      <div className={styles.menuHome}>
        <b className={styles.explore}>Explore</b>
        <div className={styles.buyTickets} onClick={onBuyTicketsTextClick}>
          Buy Tickets
        </div>
        <div className={styles.createWallet} onClick={onCreateWalletTextClick}>
          Create wallet
        </div>
        <div className={styles.community}>Community</div>
        <div className={styles.search}>
          <input className={styles.search1} placeholder="Search" type="text" />
          <div className={styles.anastasiaCardParent}>
            <img
              className={styles.anastasiaCardIcon}
              alt=""
              src="/anastasia-card.svg"
            />
            <img className={styles.priceIcon} alt="" src="/vector-1.svg" />
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={onButtonClick}>
        <b className={styles.connectWallet}>Connect Wallet</b>
      </button>
    </header>
  );
};

export default Nav;
