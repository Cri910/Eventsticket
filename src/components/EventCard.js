import { useMemo } from "react";
import styles from "./EventCard.module.css";

const EventCard = ({
  dimensionCode,
  eventDateTime,
  locationName,
  propPadding,
  propBorderRadius,
  propWidth,
  propAlignSelf,
  propAlignSelf1,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const frameDiv8Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const frameDiv9Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.frameChild} />
      <div className={styles.iconbookmark} />
      <img
        className={styles.frameItem}
        loading="eager"
        alt=""
        src={dimensionCode}
        style={groupIconStyle}
      />
      <div className={styles.frameParent}>
        <div className={styles.wedApr28530PmParent} style={frameDiv8Style}>
          <div className={styles.wedApr28}>{eventDateTime}</div>
          <div className={styles.imGoingTo}>
            International Gala Music Festival
          </div>
        </div>
        <div className={styles.frameGroup} style={frameDiv9Style}>
          <input className={styles.frameInner} checked={true} type="radio" />
          <div className={styles.min}>{locationName}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
