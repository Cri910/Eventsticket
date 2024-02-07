import { useMemo } from "react";
import styles from "./Footer1.module.css";

const Footer1 = ({
  propLeft,
  propPadding,
  propPadding1,
  propGap,
  propWidth,
  propPosition,
  propMargin,
  propTop,
  propRight,
}) => {
  const rectangleIconStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const bidsFrameStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameButtonStyle = useMemo(() => {
    return {
      padding: propPadding1,
      gap: propGap,
    };
  }, [propPadding1, propGap]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const icons8NewTicket1Style = useMemo(() => {
    return {
      position: propPosition,
      margin: propMargin,
      top: propTop,
      right: propRight,
    };
  }, [propPosition, propMargin, propTop, propRight]);

  return (
    <div className={styles.ticketRectangle}>
      <img
        className={styles.ticketRectangleChild}
        alt=""
        src="/rectangle-7@2x.png"
        style={rectangleIconStyle}
      />
      <div className={styles.containerFrame}>
        <div className={styles.containerFrameChild} />
        <div className={styles.bidsFrame} style={bidsFrameStyle}>
          <div className={styles.buttonFrame}>
            <div className={styles.currentBid}>Current Bid</div>
            <div className={styles.eth}>1.90 ETH</div>
          </div>
          <button className={styles.rectangleParent} style={frameButtonStyle}>
            <div className={styles.frameChild} style={rectangleDivStyle} />
            <b className={styles.buyATicket}>BUY A TICKET</b>
            <img
              className={styles.icons8NewTicket1}
              alt=""
              src="/icons8-new-ticket-1.svg"
              style={icons8NewTicket1Style}
            />
          </button>
        </div>
        <footer className={styles.homeIndicatorLight}>
          <div className={styles.homeIndicator} />
        </footer>
      </div>
    </div>
  );
};

export default Footer1;
