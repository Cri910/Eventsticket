import { useMemo } from "react";

const BottomMenu1 = ({ propWidth, propGap }) => {
  const rectangleDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const continueFrameStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border relative gap-[14px] max-w-full z-[1] text-left text-sm text-background-dropdown-background-color font-poppins">
      <div
        className="w-full h-full absolute my-0 mx-[!important] top-[0.9px] bottom-[-0.9px] left-[-0.6px] rounded-t-xl rounded-b-none [background:linear-gradient(180deg,_#1c233d,_rgba(125,_122,_216,_0))] shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(30px)]"
        style={rectangleDiv1Style}
      />
      <b className="w-[66px] relative hidden z-[1]">Featured</b>
      <img
        className="w-8 h-8 absolute my-0 mx-[!important] top-[29.9px] right-[39.6px] overflow-hidden shrink-0 z-[1]"
        loading="eager"
        alt=""
        src="/icons8-account-1.svg"
      />
      <div className="w-[296px] flex flex-row items-start justify-start py-0 px-[46px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div
          className="flex-1 flex flex-row items-start justify-between gap-[20px]"
          style={continueFrameStyle}
        >
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
          />
          <div className="w-8 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <img
              className="w-8 h-8 relative overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src="/icons8-schedule-1-1.svg"
            />
          </div>
          <div className="w-10 flex flex-col items-start justify-start pt-1 pb-0 pr-px pl-0 box-border">
            <img
              className="w-[39px] h-[39px] relative overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src="/primeng-icons-v500wallet.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-0 box-border max-w-full">
        <div className="h-[34px] flex-1 relative max-w-full z-[1]">
          <div className="absolute bottom-[8px] left-[calc(50%_-_66.5px)] rounded-81xl bg-darkslategray-200 w-[134px] h-[5px]" />
        </div>
      </div>
    </div>
  );
};

export default BottomMenu1;
