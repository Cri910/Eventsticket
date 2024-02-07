import { useMemo } from "react";

const FrameComponent2 = ({
  image3,
  rectangle2,
  rickStorms,
  eTH,
  icon,
  propTop,
  propHeight,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDiv7Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className="my-0 mx-[!important] absolute top-[-0.2px] left-[0px] rounded-8xs bg-darkslategray-100 overflow-hidden flex flex-row items-center justify-start pt-[9px] pb-[7px] pr-3 pl-2 gap-[7px] text-left text-5xs text-background-dropdown-background-color font-dm-mono"
      style={frameDiv6Style}
    >
      <div className="h-[47px] w-[71px] relative">
        <img
          className="absolute top-[0px] left-[1px] rounded-8xs w-[70px] h-[45.2px] object-cover"
          loading="eager"
          alt=""
          src={image3}
        />
        <img
          className="absolute top-[-0.1px] left-[0px] rounded-8xs w-full h-full object-cover z-[1]"
          alt=""
          src={rectangle2}
        />
      </div>
      <div className="flex flex-col items-start justify-start py-0 pr-[90px] pl-0 gap-[4px]">
        <div className="relative font-medium">{rickStorms}</div>
        <div className="flex flex-row items-center justify-start gap-[2px]">
          <img
            className="h-2 w-2 relative rounded-[50%] object-cover"
            loading="eager"
            alt=""
            src="/ellipse-6@2x.png"
          />
          <div className="relative font-medium">{eTH}</div>
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-start pt-0 px-0 pb-[25px]"
        style={frameDiv7Style}
      >
        <img
          className="w-5 h-[2.5px] relative z-[2]"
          loading="eager"
          alt=""
          src={icon}
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
