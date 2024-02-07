import { useCallback } from "react";
import Nav from "./Nav";
import LogoCBART from "./LogoCBART";

const FrameComponent = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='musicText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className="self-stretch flex flex-col items-end justify-start py-0 pr-[9px] pl-2.5 box-border gap-[22px] max-w-full shrink-0 text-left text-8xl-4 text-background-dropdown-background-color font-poppins">
      <Nav />
      <div className="self-stretch flex flex-row items-end justify-start gap-[15px] max-w-full mq900:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[51px] min-w-[312px] max-w-full mq700:gap-[51px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
            <LogoCBART1 />
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[9px] pr-0 pl-3 box-border max-w-full text-41xl font-space-grotesk">
              <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
                <h1 className="m-0 h-[231px] relative text-inherit font-bold font-inherit inline-block mq450:text-17xl mq900:text-29xl">
                  <p className="m-0">{`Discover `}</p>
                  <p className="m-0">the events and</p>
                  <p className="m-0">pay with Crypto</p>
                </h1>
                <div className="relative text-smi font-medium font-poppins whitespace-pre-wrap">
                  <p className="m-0">
                    The only site that allows you to purchase tickets
                  </p>
                  <p className="m-0">{`to your favorite events through cryptocurrencies.        `}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-3.5">
              <button
                className="cursor-pointer [border:none] pt-[9px] pb-2.5 pr-[37px] pl-[33px] bg-[transparent] rounded-8xs [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap"
                onClick={onButtonClick}
              >
                <b className="relative text-sm font-poppins text-butt3 text-left">
                  Discover Now
                </b>
              </button>
            </div>
          </div>
          <div className="w-[410px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full text-17xl font-space-grotesk">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
              <div className="h-[51px] flex flex-col items-start justify-start gap-[10px]">
                <b className="flex-1 relative mq450:text-3xl mq900:text-10xl">
                  35k+
                </b>
                <b className="relative text-xs text-butt3">{`Tickets sold `}</b>
              </div>
              <div className="h-[51px] flex flex-col items-center justify-start gap-[10px]">
                <b className="flex-1 relative mq450:text-3xl mq900:text-10xl">
                  15k+
                </b>
                <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-[18px] text-xs text-butt3">
                  <b className="relative">Events</b>
                </div>
              </div>
              <div className="h-[50px] flex flex-col items-start justify-start gap-[9px]">
                <b className="flex-1 relative mq450:text-3xl mq900:text-10xl">
                  25k+
                </b>
                <div className="flex flex-row items-start justify-start py-0 px-[11px] text-xs text-butt3">
                  <b className="relative">Clients</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[404px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border min-w-[404px] max-w-full text-sm font-space-grotesk mq700:min-w-full mq900:flex-1">
          <div className="self-stretch rounded-3xs bg-darkslategray-100 overflow-hidden flex flex-col items-center justify-start pt-[30px] pb-[18px] pr-[17px] pl-10 box-border gap-[27px] max-w-full mq700:pt-5 mq700:pb-5 mq700:box-border">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-0 box-border max-w-full">
              <img
                className="h-[348px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover z-[5]"
                loading="eager"
                alt=""
                src="/frame-58@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="w-[338px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
                  <b className="relative">Louvre Museum</b>
                  <div className="h-7 w-[99px] relative">
                    <img
                      className="absolute top-[-0.2px] left-[-0.3px] rounded-[50%] w-[29px] h-7 object-cover"
                      alt=""
                      src="/anastasia-box@2x.png"
                    />
                    <img
                      className="absolute top-[-0.2px] left-[14.7px] rounded-[50%] w-[29px] h-7 object-cover z-[1]"
                      alt=""
                      src="/anastasia-box@2x.png"
                    />
                    <img
                      className="absolute top-[-0.2px] left-[34.7px] rounded-[50%] w-[29px] h-7 object-cover z-[2]"
                      alt=""
                      src="/anastasia-box@2x.png"
                    />
                    <img
                      className="absolute top-[-0.2px] left-[49.7px] rounded-[50%] w-[29px] h-7 object-cover z-[3]"
                      alt=""
                      src="/anastasia-box@2x.png"
                    />
                    <img
                      className="absolute top-[-0.2px] left-[69.7px] rounded-[50%] w-[29px] h-7 object-cover z-[4]"
                      loading="eager"
                      alt=""
                      src="/ellipse-5@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-5xs text-dimgray-200 font-dm-mono">
                <div className="w-[340px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
                    <div className="relative whitespace-pre-wrap">
                      Current Bid
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[35px] pl-0">
                      <div className="relative font-medium whitespace-pre-wrap">
                        Current Bid
                      </div>
                    </div>
                    <div className="relative font-medium">Ending In</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px] text-3xs text-background-dropdown-background-color mq450:flex-wrap">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <img
                      className="h-2 w-2 relative rounded-[50%] object-cover"
                      loading="eager"
                      alt=""
                      src="/ellipse-6@2x.png"
                    />
                    <div className="relative font-medium">0.45 ETH</div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[46px]">
                    <div className="relative font-medium">900 Authors</div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[2px] min-w-[49px]">
                    <img
                      className="h-[8.7px] w-[6.9px] relative"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <div className="relative font-medium">10h 43m 26s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
