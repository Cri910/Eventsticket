import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.calendar92342421Parent}>
          <img
            className={styles.calendar92342421Icon}
            loading="eager"
            alt=""
            src="/calendar-9234242-1.svg"
          />
          <h2 className={styles.chooseTheEvent}>Choose the event</h2>
          <div className={styles.searchForTheContainer}>
            <p className={styles.searchForThe}>
              Search for the event you want to
            </p>
            <p className={styles.participateInAmong}>
              participate in among all those on the site.
            </p>
            <p className={styles.clickOnIt}>
              Click on it and choose the payment method:
            </p>
            <p className={styles.cryptoOrCredit}>
              {" "}
              Crypto or Credit Card. If you choose to pay by card,
            </p>
            <p className={styles.proceedWithEntering}>
              proceed with entering your data and purchasing.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.createOrConnectTheWalletParent}>
        <h2 className={styles.createOrConnect}>Create or connect the wallet</h2>
        <div className={styles.ifYouChooseCryptocurrenciesWrapper}>
          <div className={styles.ifYouChooseContainer}>
            <p className={styles.ifYouChoose}>
              If you choose cryptocurrencies as your
            </p>
            <p className={styles.paymentMethod}>
              payment method, you have two options:
            </p>
            <p
              className={styles.connectYourWallet}
            >{`connect your wallet or, if you don't have one, `}</p>
            <p className={styles.createOneQuickly}>
              create one quickly and easily.
            </p>
            <p className={styles.youJustHave}>
              You just have to copy and paste the info of your
            </p>
            <p className={styles.newWalletAnd}>new wallet and you're done!</p>
          </div>
        </div>
        <img
          className={styles.wallet101415651Icon}
          loading="eager"
          alt=""
          src="/wallet-10141565-1.svg"
        />
      </div>
      <div className={styles.ticket60302311Parent}>
        <img
          className={styles.ticket60302311Icon}
          loading="eager"
          alt=""
          src="/ticket-6030231-1.svg"
        />
        <h2 className={styles.enjoyTheEvent}>Enjoy the event</h2>
        <div className={styles.oncePaymentHasContainer}>
          <p className={styles.oncePaymentHas}>Once payment has been made,</p>
          <p className={styles.youWillReceive}>
            you will receive a confirmation email
          </p>
          <p className={styles.andYourTicket}>and your ticket for the event.</p>
          <p className={styles.dontForgetTo}>
            Don't forget to leave us a nice review!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
