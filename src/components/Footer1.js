import { useMemo } from "react";

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
    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 relative text-left text-xs text-butt3 font-dm-mono">
      <img
        className="w-[315px] absolute my-0 mx-[!important] top-[-67.4px] left-[calc(50%_-_158.5px)] rounded-xl h-[150px] object-cover"
        alt=""
        src="/rectangle-7@2x.png"
        style={rectangleIconStyle}
      />
      <div className="flex-1 rounded-t-xl rounded-b-none [background:linear-gradient(180deg,_#1c233d,_rgba(125,_122,_216,_0))] shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(30px)] flex flex-col items-center justify-start pt-[30px] px-0 pb-0 gap-[13px] z-[1]">
        <div className="self-stretch relative rounded-t-xl rounded-b-none [background:linear-gradient(180deg,_#1c233d,_rgba(125,_122,_216,_0))] shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(30px)] h-[130px] hidden" />
        <div
          className="flex flex-row items-end justify-start py-0 px-5 gap-[43px]"
          style={bidsFrameStyle}
        >
          <div className="w-[98px] flex flex-col items-start justify-start gap-[4px]">
            <div className="relative z-[2]">Current Bid</div>
            <div className="h-[26px] relative text-xl font-medium text-background-dropdown-background-color inline-block z-[2]">
              1.90 ETH
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] pt-3.5 px-5 pb-[15px] bg-[transparent] flex flex-row items-center justify-start relative gap-[7px]"
            style={frameButtonStyle}
          >
            <div
              className="w-full absolute my-0 mx-[!important] h-full top-[-0.4px] right-[0px] bottom-[0.4px] left-[0px] rounded-mini [background:linear-gradient(98.26deg,_#f687ff,_#545c71)] opacity-[0.8] z-[2]"
              style={rectangleDivStyle}
            />
            <b className="relative text-smi tracking-[0.1em] font-mini text-background-dropdown-background-color text-left z-[3]">
              BUY A TICKET
            </b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[3]"
              alt=""
              src="/icons8-new-ticket-1.svg"
              style={icons8NewTicket1Style}
            />
          </button>
        </div>
        <footer className="self-stretch h-[34px] relative z-[2]">
          <div className="absolute bottom-[8px] left-[calc(50%_-_66.5px)] rounded-81xl bg-darkslategray-200 w-[134px] h-[5px]" />
        </footer>
      </div>
    </div>
  );
};

export default Footer1;
