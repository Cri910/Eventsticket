import { useMemo } from "react";

const SectionCardForm = ({
  dimensions,
  rectangleDivWidth,
  rectangleDivRight,
  frameButtonPadding,
  icons8HeartOutline1Padding,
  mUSICALPadding,
  anastasiaPadding,
  groupDivPadding,
  dECPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: rectangleDivWidth,
      right: rectangleDivRight,
    };
  }, [rectangleDivWidth, rectangleDivRight]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: frameButtonPadding,
    };
  }, [frameButtonPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: icons8HeartOutline1Padding,
    };
  }, [icons8HeartOutline1Padding]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: mUSICALPadding,
    };
  }, [mUSICALPadding]);

  const musicFrameStyle = useMemo(() => {
    return {
      padding: anastasiaPadding,
    };
  }, [anastasiaPadding]);

  const decTextStyle = useMemo(() => {
    return {
      padding: groupDivPadding,
    };
  }, [groupDivPadding]);

  const groupDivStyle = useMemo(() => {
    return {
      padding: dECPadding,
    };
  }, [dECPadding]);

  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-3 pb-[13px] pr-[15px] pl-[21px] relative gap-[193px] text-left text-smi text-gray-700 font-space-grotesk">
      <div
        className="w-[calc(100%_-_4px)] h-[calc(100%_-_1px)] absolute my-0 mx-[!important] top-[0.4px] right-[3.5px] bottom-[0.6px] left-[0.5px]"
        style={frameDivStyle}
      >
        <img
          className="absolute h-full w-full top-[-0.4px] right-[0.5px] bottom-[0.4px] left-[-0.5px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/group-2@2x.png"
        />
        <div className="absolute h-full w-full top-[-0.4px] right-[0.5px] bottom-[0.4px] left-[-0.5px] [background:linear-gradient(180deg,_#000,_#000_0.01%,_rgba(0,_0,_0,_0))] z-[1]" />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[17px]">
        <header className="self-stretch flex flex-row items-center justify-between">
          <img
            className="h-[21px] w-[54px] relative z-[2]"
            loading="eager"
            alt=""
            src={dimensions}
          />
          <div className="h-[11px] flex flex-row items-end justify-start gap-[6px]">
            <img
              className="h-[10.7px] w-[17px] relative z-[2]"
              loading="eager"
              alt=""
              src="/mobile-signal.svg"
            />
            <img
              className="h-[11px] w-[15.3px] relative min-h-[11px] z-[2]"
              loading="eager"
              alt=""
              src="/wifi.svg"
            />
            <input
              className="m-0 h-[11.3px] w-[24.3px] relative z-[2]"
              type="checkbox"
            />
          </div>
        </header>
        <div
          className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-2.5"
          style={frameDiv1Style}
        >
          <div className="flex-1 flex flex-row items-start justify-between">
            <button className="cursor-pointer [border:none] p-0 bg-gray-600 h-10 w-14 relative rounded-mini [backdrop-filter:blur(10px)] z-[2]">
              <div className="absolute top-[-0.4px] left-[-0.5px] rounded-mini bg-gray-600 [backdrop-filter:blur(10px)] w-14 h-10 hidden" />
              <img
                className="absolute top-[7.6px] left-[15.5px] w-6 h-6 overflow-hidden z-[3]"
                alt=""
                src="/icons8-left-1.svg"
              />
            </button>
            <div
              className="rounded-mini bg-gray-600 [backdrop-filter:blur(10px)] flex flex-row items-start justify-start py-2 px-4 gap-[17px] z-[2]"
              style={frameDiv2Style}
            >
              <div className="h-10 w-24 relative rounded-mini bg-gray-600 [backdrop-filter:blur(10px)] hidden" />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[3]"
                loading="eager"
                alt=""
                src="/icons8-heart-outline-1.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[3]"
                loading="eager"
                alt=""
                src="/icons8-share-rounded-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-1.5"
        style={frameDiv3Style}
      >
        <div className="h-20 flex-1 relative">
          <div className="absolute top-[0px] left-[5px] tracking-[0.1em] z-[2]">
            MUSICAL
          </div>
          <div
            className="absolute top-[14px] left-[0px] w-[318px] flex flex-row items-start justify-between text-11xl text-background-dropdown-background-color font-poppins"
            style={musicFrameStyle}
          >
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <h1 className="m-0 h-[45px] relative text-inherit font-bold font-inherit inline-block z-[2]">
                Anastasia
              </h1>
              <div
                className="flex flex-row items-start justify-start py-0 px-[5px] text-smi text-gray-700 font-space-grotesk"
                style={decTextStyle}
              >
                <div className="relative tracking-[0.1em] z-[2]">
                  STARTING 9:10 PM
                </div>
              </div>
            </div>
            <div
              className="rounded-mini bg-background-dropdown-background-color [backdrop-filter:blur(10px)] flex flex-col items-center justify-start pt-2 pb-[7px] pr-[19px] pl-[15px] z-[2] text-smi text-gray-800 font-mini"
              style={groupDivStyle}
            >
              <div className="w-[60px] h-[60px] relative rounded-mini bg-background-dropdown-background-color [backdrop-filter:blur(10px)] hidden z-[1]" />
              <div className="relative tracking-[0.1em] z-[1]">DEC</div>
              <b className="h-8 relative text-7xl inline-block text-darkslategray-300 z-[1] mt-[-3px]">
                21
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCardForm;
