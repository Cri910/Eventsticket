import { useMemo } from "react";

const FrameComponent1 = ({
  rectangle2,
  samSon,
  eTH,
  icon1,
  propTop,
  propLeft,
  propPadding,
}) => {
  const frameDiv8Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const frameDiv9Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="w-[294px] my-0 mx-[!important] absolute top-[-0.2px] left-[300px] rounded-8xs bg-darkslategray-100 overflow-hidden shrink-0 flex flex-row items-center justify-between pt-[9px] pb-[7px] pr-[18px] pl-2 box-border gap-[20px] text-left text-5xs text-background-dropdown-background-color font-dm-mono"
      style={frameDiv8Style}
    >
      <div className="flex flex-row items-center justify-start gap-[7px]">
        <img
          className="h-[47px] w-[71px] relative rounded-8xs object-cover"
          alt=""
          src={rectangle2}
        />
        <div className="flex flex-col items-start justify-start gap-[4px]">
          <div className="relative font-medium">{samSon}</div>
          <div className="flex flex-row items-center justify-start gap-[2px]">
            <img
              className="h-2 w-2 relative rounded-[50%] object-cover"
              alt=""
              src="/ellipse-6@2x.png"
            />
            <div className="relative font-medium">{eTH}</div>
          </div>
        </div>
      </div>
      <div
        className="h-1.5 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border"
        style={frameDiv9Style}
      >
        <img className="w-5 h-[2.5px] relative" alt="" src={icon1} />
      </div>
    </div>
  );
};

export default FrameComponent1;
