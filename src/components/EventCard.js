import { useMemo } from "react";

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

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const frameDiv5Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className="self-stretch rounded-2xl bg-darkslategray-100 shadow-[0px_10px_35px_rgba(87,_92,_138,_0.06)] flex flex-row items-start justify-start pt-[7px] pb-1.5 pr-1 pl-[11px] gap-[15px] text-left text-smi text-color-primary-blue font-space-grotesk"
      style={groupDiv1Style}
    >
      <div className="h-[106px] w-[327px] relative rounded-2xl bg-darkslategray-100 shadow-[0px_10px_35px_rgba(87,_92,_138,_0.06)] hidden" />
      <div className="h-4 w-[16.1px] relative hidden" />
      <img
        className="h-[93px] w-[79px] relative object-contain z-[1]"
        loading="eager"
        alt=""
        src={dimensionCode}
        style={groupIconStyle}
      />
      <div className="h-[85px] flex-1 flex flex-col items-start justify-start gap-[10px]">
        <div
          className="w-[205px] flex-1 flex flex-col items-start justify-start gap-[3px]"
          style={frameDiv4Style}
        >
          <div className="relative font-light z-[1]">{eventDateTime}</div>
          <div className="self-stretch flex-1 relative text-mini font-medium text-background-dropdown-background-color z-[1]">
            International Gala Music Festival
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[5px] text-butt3"
          style={frameDiv5Style}
        >
          <input
            className="border-darkslategray-100 accent-darkslategray-100 cursor-pointer m-0 h-3.5 w-3.5 relative z-[1]"
            checked={true}
            type="radio"
          />
          <div className="relative font-light z-[1]">{locationName}</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
