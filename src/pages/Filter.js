const Filter = () => {
  return (
    <div className="w-full h-[812px] relative bg-ghostwhite overflow-hidden flex flex-col items-center justify-start pt-[153px] pb-0 pr-0 pl-5 box-border gap-[640px]">
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-0">
        <div className="flex flex-row items-start justify-start relative">
          <div className="h-[754px] w-[375px] absolute my-0 mx-[!important] bottom-[-562px] left-[-20px]">
            <div className="absolute w-[calc(100%_-_28px)] top-[0px] right-[14.1px] left-[13.9px] rounded-t-19xl rounded-b-none bg-gray-900 [filter:blur(5.44px)] h-[732px] mix-blend-normal z-[1]" />
            <form className="m-0 absolute top-[13px] left-[-0.1px] rounded-t-19xl rounded-b-none bg-gray-200 w-[375px] h-[741px] z-[2]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-19xl rounded-b-none bg-gray-200 hidden" />
              <div className="absolute h-[0.67%] w-[6.93%] top-[1.62%] right-[46.67%] bottom-[97.71%] left-[46.4%] rounded-[2.5px] bg-darkgray-300 z-[1]" />
              <div className="absolute top-[506px] left-[20px] text-base leading-[34px] font-medium font-space-grotesk text-butt3 text-left flex items-center z-[3]">
                Select price range
              </div>
              <div className="absolute top-[506px] left-[267px] text-lg leading-[34px] font-light font-space-grotesk text-color-primary-blue text-right flex items-center z-[3]">
                ETH 0,1-10
              </div>
              <img
                className="absolute top-[555px] left-[20px] w-[333px] h-[66px] z-[3]"
                loading="eager"
                alt=""
                src="/group-18303.svg"
              />
              <button className="cursor-pointer [border:none] p-0 bg-color-primary-blue absolute top-[665px] left-[169px] rounded-sm w-[185px] h-[58px] z-[3]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full hidden"
                  alt=""
                  src="/rectangle.svg"
                />
                <div className="absolute top-[calc(50%_-_10px)] left-[36.76%] text-base tracking-[1px] uppercase font-medium font-space-grotesk text-background-dropdown-background-color text-center z-[1]">
                  Apply
                </div>
              </button>
              <button className="cursor-pointer p-0 bg-background-dropdown-background-color absolute top-[665px] left-[20px] rounded-sm box-border w-[130px] h-[58px] z-[3] border-[1px] border-solid border-butt3">
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-background-dropdown-background-color box-border w-[131px] h-[59px] hidden border-[1px] border-solid border-butt3" />
                <div className="absolute top-[calc(50%_-_9.5px)] left-[30.23%] text-base tracking-[1px] uppercase font-medium font-space-grotesk text-color-typography-title text-center z-[1]">
                  Reset
                </div>
              </button>
              <h3 className="m-0 absolute top-[29px] left-[19.1px] text-6xl leading-[133.33%] font-light font-space-grotesk text-butt3 text-left flex items-center z-[3]">
                Filter
              </h3>
              <div className="absolute top-[422px] left-[20px] rounded-mini bg-background-dropdown-background-color box-border w-[334px] h-[60px] z-[3] border-[1px] border-solid border-butt3">
                <div className="absolute top-[0px] left-[0px] rounded-mini bg-background-dropdown-background-color box-border w-[334px] h-[60px] hidden border-[1px] border-solid border-butt3" />
                <img
                  className="absolute top-[25px] left-[311px] w-[4.5px] h-[9px] z-[1]"
                  alt=""
                  src="/vector-arrow.svg"
                />
                <input
                  className="[border:none] [outline:none] font-light font-space-grotesk text-base bg-[transparent] absolute top-[18px] left-[71px] leading-[25px] text-gray-400 text-left flex items-center z-[1]"
                  placeholder="Milan, Italy"
                  type="text"
                />
                <img
                  className="absolute top-[8px] left-[8px] w-[45px] h-[45px] z-[1]"
                  alt=""
                  src="/group-18207.svg"
                />
              </div>
              <div className="absolute top-[376px] left-[19.1px] text-base leading-[34px] font-medium font-space-grotesk text-color-typography-title text-left flex items-center z-[3]">
                Location
              </div>
              <div className="absolute top-[206px] left-[20px] text-base leading-[34px] font-medium font-space-grotesk text-butt3 text-left flex items-center z-[3]">{`Time & Date`}</div>
              <button className="cursor-pointer p-0 bg-background-dropdown-background-color absolute top-[252px] left-[20px] rounded-3xs box-border w-[81px] h-[42px] z-[3] border-[1px] border-solid border-gainsboro-100">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-background-dropdown-background-color box-border w-[81px] h-[42px] hidden border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[9px] left-[18px] text-mini leading-[25px] font-light font-space-grotesk text-gray-100 text-center z-[1]">
                  Today
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-color-primary-blue absolute top-[252px] left-[113px] rounded-3xs w-[110px] h-[42px] z-[3]">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-color-primary-blue w-[110px] h-[42px] hidden" />
                <div className="absolute top-[9px] left-[20px] text-mini leading-[25px] font-light font-space-grotesk text-background-dropdown-background-color text-center z-[1]">
                  Tomorrow
                </div>
              </button>
              <button className="cursor-pointer p-0 bg-background-dropdown-background-color absolute top-[252px] left-[235px] rounded-3xs box-border w-[107px] h-[42px] z-[3] border-[1px] border-solid border-gainsboro-100">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-background-dropdown-background-color box-border w-[107px] h-[42px] hidden border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[9px] left-[14.1px] text-mini leading-[25px] font-light font-space-grotesk text-gray-100 text-center z-[1]">
                  This week
                </div>
              </button>
              <div className="absolute top-[308px] left-[20px] rounded-3xs bg-background-dropdown-background-color box-border w-[241px] h-[42px] z-[3] border-[1px] border-solid border-gainsboro-100">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-background-dropdown-background-color box-border w-[241px] h-[42px] hidden border-[1px] border-solid border-gainsboro-100" />
                <div className="absolute top-[9px] left-[45px] text-mini leading-[25px] font-light font-space-grotesk text-gray-100 text-center z-[1]">
                  Choose from calendar
                </div>
                <img
                  className="absolute h-[55.48%] w-[8.71%] top-[21.43%] right-[85.48%] bottom-[23.1%] left-[5.81%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/calendar@2x.png"
                />
                <img
                  className="absolute top-[17px] left-[216px] w-[4.5px] h-[9px] z-[1]"
                  alt=""
                  src="/vector-arrow.svg"
                />
              </div>
            </form>
          </div>
          <nav className="m-0 flex flex-row items-start justify-start py-0 pr-[3px] pl-0 gap-[15px] z-[3] text-center text-sm text-butt3 font-space-grotesk">
            <div className="flex flex-col items-center justify-start gap-[11px]">
              <div className="w-[63.3px] h-[63.3px] relative flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[9px] [transform:scale(1.685)]"
                  loading="eager"
                  alt=""
                  src="/group-18316.svg"
                />
              </div>
              <div className="relative leading-[23px] font-light">Sports</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[11px]">
              <img
                className="w-[63.3px] h-[63.3px] relative"
                loading="eager"
                alt=""
                src="/group-18314.svg"
              />
              <div className="relative leading-[23px] font-light">Music</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[11px]">
              <div className="w-[63.3px] h-[63.3px] relative flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[9px] [transform:scale(1.685)]"
                  loading="eager"
                  alt=""
                  src="/group-18315.svg"
                />
              </div>
              <div className="relative leading-[23px] font-light">Art</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[11px]">
              <img
                className="w-[63.3px] h-[63.3px] relative"
                loading="eager"
                alt=""
                src="/group-18317.svg"
              />
              <div className="relative leading-[23px] font-light">Food</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[11px]">
              <img
                className="w-[63.3px] h-[63.3px] relative"
                loading="eager"
                alt=""
                src="/group-18317-1.svg"
              />
              <div className="w-[34px] relative leading-[23px] font-light inline-block">
                Food
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section className="w-[375px] h-full absolute my-0 mx-[!important] top-[0px] right-[-1px] bottom-[0px] bg-gray-500" />
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-0.5 text-left text-smi text-blueviolet-200 font-space-grotesk">
        <div className="flex-1 rounded-sm bg-background-dropdown-background-color flex flex-row flex-wrap items-start justify-start pt-2 pb-[9px] pr-3 pl-2 gap-[11px]">
          <div className="h-[109px] w-[329px] relative rounded-sm bg-background-dropdown-background-color hidden" />
          <img
            className="h-[92px] w-[92.6px] relative rounded-3xs object-cover min-h-[92px] z-[1]"
            alt=""
            src="/input-frame@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[11px] min-w-[133px]">
            <div className="self-stretch h-16 flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch h-5 flex flex-row items-end justify-between py-0 pr-px pl-0 box-border">
                <div className="self-stretch w-[116px] relative leading-[19.24px] font-medium inline-block z-[1]">
                  10 June • 9:00 PM
                </div>
                <img className="h-4 w-[16.1px] relative z-[1]" alt="" />
              </div>
              <b className="self-stretch flex-1 relative text-base text-black z-[1]">
                International Gala Music Festival
              </b>
            </div>
            <div className="w-[189px] h-[17px] flex flex-row items-end justify-start py-0 pr-px pl-0 box-border gap-[5px] text-darkgray-100">
              <img className="h-4 w-4 relative z-[1]" alt="" />
              <div className="self-stretch flex-1 relative font-light whitespace-pre-wrap z-[1]">{`36 Guild Street London, UK  `}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filter;
