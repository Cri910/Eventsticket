import { useCallback } from "react";

const TicketDetails1 = () => {
  const onVectorIconClick = useCallback(() => {
    // Please sync "Component 5" to the project
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    // Please sync "Component 5" to the project
  }, []);

  return (
    <div className="w-full relative bg-gray-300 overflow-hidden flex flex-col items-center justify-start pt-[60px] px-0 pb-0 box-border gap-[12px] tracking-[normal] text-left text-5xl text-background-dropdown-background-color font-space-grotesk">
      <img
        className="w-0 h-[1.4px] absolute my-0 mx-[!important] top-[203.8px] left-[32.6px]"
        loading="eager"
        alt=""
        src="/g4301.svg"
      />
      <img className="w-0 h-0 relative object-cover hidden z-[1]" alt="" />
      <img className="w-1.5 h-1.5 relative hidden z-[2]" alt="" />
      <div className="w-[189px] h-[174px] absolute my-0 mx-[!important] top-[0px] left-[-53.9px]">
        <header className="absolute top-[0px] left-[-0.1px] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(185,_218,_251,_0.5)_0deg,_rgba(152,_149,_238,_0.5)_285deg,_rgba(236,_172,_173,_0.5)_359.96deg,_rgba(197,_84,_146,_0.5)_360deg)] [filter:blur(100px)] w-full h-full" />
        <img
          className="absolute top-[59.9px] left-[74.9px] w-[22px] h-[22px] z-[1]"
          loading="eager"
          alt=""
          src="/back1.svg"
        />
        <img
          className="absolute top-[13.9px] left-[73.4px] w-[54px] h-[21px] z-[1]"
          loading="eager"
          alt=""
          src="/left-side1.svg"
        />
      </div>
      <div className="w-[268px] flex flex-row items-start justify-start pt-0 px-5 pb-[31px] box-border shrink-0">
        <div className="flex flex-col items-center justify-center relative">
          <div className="w-[227px] h-[209px] absolute my-0 mx-[!important] top-[-135px] right-[-194.6px]">
            <div className="absolute top-[0px] left-[-0.1px] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(185,_218,_251,_0.7)_0deg,_rgba(152,_149,_238,_0.7)_0.04deg,_rgba(197,_84,_146,_0.7)_0.07deg,_rgba(236,_172,_173,_0.7)_95.99deg)] [filter:blur(100px)] w-full h-full" />
            <img
              className="absolute top-[139.5px] left-[127.4px] w-[22px] h-[22px] z-[1]"
              loading="eager"
              alt=""
              src="/more1.svg"
            />
            <input
              className="m-0 absolute top-[94.3px] left-[136.4px] w-[24.3px] h-[11.3px] z-[1]"
              type="checkbox"
            />
            <img
              className="absolute top-[94.3px] left-[116.1px] w-[15.3px] h-[11px] z-[1]"
              loading="eager"
              alt=""
              src="/wifi1.svg"
            />
            <img
              className="absolute top-[94.6px] left-[94.1px] w-[17px] h-[10.7px] z-[1]"
              loading="eager"
              alt=""
              src="/mobile-signal1.svg"
            />
          </div>
          <h1 className="m-0 h-[31px] relative text-inherit font-medium font-inherit inline-block z-[1]">
            Ticket details
          </h1>
        </div>
      </div>
      <section className="w-[348px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[21px] max-w-full shrink-0 text-left text-sm text-background-dropdown-background-color font-space-grotesk">
        <div className="w-[222px] flex flex-row items-start justify-start py-0 pr-2 pl-[7px] box-border">
          <div className="flex-1 relative font-medium z-[1]">
            When do you want to book?
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-0 pr-0 pl-[3px] relative text-right text-xs text-m3-sys-light-on-surface-variant font-m3-body-small">
          <img
            className="h-[1.4px] w-0 absolute my-0 mx-[!important] top-[29.8px] left-[-0.5px]"
            loading="eager"
            alt=""
            src="/path5341.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 gap-[40px] mq450:gap-[40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch rounded-xl flex flex-row items-center justify-center z-[1] text-left text-silver-200 font-inter">
                <div className="flex-1 rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-foundation-blue-blue-50">
                  <div className="flex-1 rounded-3xs flex flex-row items-start justify-between py-3 pr-[19px] pl-4 gap-[20px]">
                    <div className="relative">08/09/2024</div>
                    <img
                      className="h-5 w-5 relative cursor-pointer"
                      alt=""
                      src="/vector.svg"
                      onClick={onVectorIconClick}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-row items-center justify-center">
                <div className="flex-1 rounded-3xs flex flex-row items-center justify-center border-[1px] border-solid border-foundation-blue-blue-50">
                  <div className="flex-1 rounded-3xs flex flex-row items-center justify-between py-3 pr-[18px] pl-4 gap-[20px]">
                    <input
                      className="w-[46px] [border:none] [outline:none] font-inter text-xs bg-[transparent] h-[15px] relative text-silver-200 text-left inline-block whitespace-nowrap"
                      placeholder="9:41 PM"
                      type="text"
                    />
                    <img
                      className="h-5 w-5 relative cursor-pointer"
                      alt=""
                      src="/vector-11.svg"
                      onClick={onVectorIcon2Click}
                    />
                    <img
                      className="h-5 w-5 relative hidden min-h-[20px]"
                      alt=""
                    />
                    <div className="h-[42px] hidden flex-col items-center justify-center">
                      <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                        <div className="flex flex-row items-center justify-center py-2 px-[15px]">
                          <img
                            className="h-[18px] w-[18px] relative rounded-6xs"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-[9px] w-[5px] relative object-contain hidden"
                      alt=""
                    />
                    <img
                      className="h-5 w-5 relative hidden min-h-[20px]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="h-5 w-[210px] hidden flex-row items-start justify-start pt-1 px-4 pb-0 box-border">
                  <div className="self-stretch flex-1 relative leading-[16px]">
                    0/75 words
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start z-[1]">
                <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
                  <div className="self-stretch rounded-3xs flex flex-col items-start justify-start border-[1px] border-solid border-foundation-blue-blue-50">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-11 rounded-3xs flex flex-row items-center justify-start py-1 px-4 box-border font-inter text-xs text-silver-200 min-w-[182px]"
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start pt-1 px-4 pb-0">
                    <div className="h-4 flex-1 relative leading-[16px] inline-block">
                      0/75 words
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start z-[1]">
                <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
                  <div className="self-stretch rounded-3xs flex flex-col items-start justify-start border-[1px] border-solid border-foundation-blue-blue-50">
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-11 rounded-3xs flex flex-row items-center justify-start py-1 px-4 box-border font-inter text-xs text-silver-200 min-w-[182px]"
                      placeholder="Phone"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch hidden flex-row items-start justify-start pt-1 px-4 pb-0">
                    <div className="h-4 flex-1 relative leading-[16px] inline-block">
                      0/75 words
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative text-left text-sm text-silver-100 font-body-b2-medium">
              <div className="h-[209px] w-[227px] absolute my-0 mx-[!important] top-[-147.6px] left-[4.4px] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(185,_218,_251,_0.7)_0deg,_rgba(152,_149,_238,_0.7)_0.04deg,_rgba(197,_84,_146,_0.7)_0.07deg,_rgba(236,_172,_173,_0.7)_95.99deg)] [filter:blur(100px)]" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[19px] z-[1]">
                <div className="self-stretch rounded-3xs flex flex-col items-start justify-start border-[1px] border-solid border-foundation-blue-blue-50">
                  <div className="self-stretch h-[54px] rounded-t rounded-b-none flex flex-row items-center justify-start py-1 pr-0 pl-4 box-border gap-[12px]">
                    <div className="h-[52px] flex flex-col items-start justify-center py-0 pr-[34px] pl-0 box-border">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative">
                          <span>Number of tickets *</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[22px] text-center text-xl font-inter">
                      <img
                        className="h-9 w-9 relative min-h-[36px]"
                        loading="eager"
                        alt=""
                        src="/.svg"
                      />
                      <b className="relative">1</b>
                      <img
                        className="h-9 w-9 relative min-h-[36px]"
                        alt=""
                        src="/-1.svg"
                      />
                    </div>
                    <img className="h-[5px] w-[9px] relative hidden" alt="" />
                    <img
                      className="h-[9px] w-[5px] relative object-contain hidden"
                      alt=""
                    />
                    <div className="h-[38px] hidden flex-col items-center justify-center">
                      <div className="w-[38px] h-9 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-px box-border">
                        <div className="flex flex-row items-center justify-center p-2">
                          <img
                            className="h-5 w-5 relative rounded-6xs"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-6 w-[34px] relative rounded object-cover hidden"
                      alt=""
                    />
                  </div>
                </div>
                <div className="self-stretch hidden flex-row items-start justify-start pt-1 pb-0 pr-4 pl-0 text-right text-2xs text-foundation-blue-blue-300">
                  <div className="h-3.5 w-[335px] relative inline-block shrink-0 max-w-[116%]">
                    0/75 words
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch h-[298px] flex flex-row items-start justify-end py-0 px-0 box-border max-w-full text-left text-sm text-background-dropdown-background-color font-body-b2-medium mq450:h-auto">
        <div className="w-[483px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-[128%] shrink-0">
          <div className="w-[787px] flex flex-row items-start justify-start gap-[9px] max-w-[163%] shrink-0 mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[279px] max-w-full">
              <div className="self-stretch h-[390px] flex flex-col items-start justify-start gap-[97px] mq450:gap-[97px]">
                <div className="self-stretch flex flex-row items-start justify-end">
                  <div className="w-[301px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[37px] mq450:gap-[37px]">
                    <div className="w-[197px] flex flex-row items-center justify-start py-0 pr-[26px] pl-0 box-border">
                      <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
                        <div className="w-[176.5px] h-6 relative font-medium flex items-center shrink-0">
                          Add to Calendar
                        </div>
                      </div>
                      <div className="rounded-xl bg-darkgray-200 overflow-hidden flex flex-row items-center justify-end py-0.5 pr-0.5 pl-[18px] z-[1]">
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/-2.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2.5 text-center text-base text-darkslategray-100 font-space-grotesk">
                      <div className="flex-1 flex flex-row items-center justify-center py-[19px] pr-6 pl-5 relative">
                        <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[-0.3px] bottom-[0px] left-[0.3px] flex items-center justify-center z-[0]">
                          <img
                            className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[10px] [transform:scale(2.207)]"
                            loading="eager"
                            alt=""
                            src="/group-18177.svg"
                          />
                        </div>
                        <div className="relative tracking-[1px] uppercase font-medium z-[1]">
                          CONFIRM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[209px] flex-1 relative rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(185,_203,_251,_0.4)_0deg,_rgba(236,_172,_173,_0.4)_95.99deg,_rgba(152,_149,_238,_0.4)_112.5deg,_rgba(197,_84,_146,_0.4)_196.88deg,_rgba(144,_162,_248,_0.4)_292.5deg)] [filter:blur(100px)]" />
              </div>
            </div>
            <div className="h-[322px] w-[349px] relative rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(185,_218,_251,_0.5)_0deg,_rgba(236,_172,_173,_0.5)_95.99deg,_rgba(152,_149,_238,_0.5)_206.25deg,_rgba(144,_162,_248,_0.5)_292.5deg,_rgba(197,_84,_146,_0.5)_360deg)] [filter:blur(100px)] [transform:_rotate(180deg)] min-w-[349px] max-w-full mq450:flex-1 mq450:min-w-full" />
          </div>
        </div>
      </section>
      <section className="w-[375px] my-0 mx-[!important] absolute right-[-0.1px] bottom-[0px] flex flex-row items-end justify-center pt-[31px] px-0 pb-0 box-border max-w-full z-[1]">
        <footer className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[-0.4px] bottom-[0px] left-[0.4px] rounded-t-xl rounded-b-none [background:linear-gradient(180deg,_#1c233d,_rgba(125,_122,_216,_0))] shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(30px)]" />
        <div className="h-[66px] flex-1 flex flex-row flex-wrap items-center justify-center relative gap-[50px] max-w-full z-[1]">
          <img
            className="h-8 w-8 absolute my-0 mx-[!important] top-[0px] left-[48.5px] overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/icons8-star-1-11.svg"
          />
          <img
            className="h-8 w-8 absolute my-0 mx-[!important] top-[0px] left-[130.5px] overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/calendar1.svg"
          />
          <img
            className="h-8 w-8 absolute my-0 mx-[!important] top-[0px] left-[212.5px] overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/primeng-icons-v500wallet1.svg"
          />
          <img
            className="h-8 w-8 absolute my-0 mx-[!important] top-[0px] left-[294.5px] overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/icons8-account-11.svg"
          />
          <div className="h-[34px] w-[375px] absolute my-0 mx-[!important] top-[32px] left-[0px]">
            <div className="absolute bottom-[8px] left-[calc(50%_-_66.5px)] rounded-81xl bg-darkslategray-200 w-[134px] h-[5px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketDetails1;
