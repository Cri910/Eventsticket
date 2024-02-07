import BottomMenu from "../components/BottomMenu";

const EventTicketsFeatured = () => {
  return (
    <div className="w-full relative rounded-11xl bg-gray-300 overflow-hidden flex flex-col items-end justify-start pt-3 px-0 pb-0 box-border gap-[14px] tracking-[normal] text-left text-smi text-background-dropdown-background-color font-space-grotesk">
      <div className="self-stretch h-[26px] flex flex-row items-start justify-start py-0 pr-3.5 pl-[15px] box-border max-w-full">
        <header className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full">
          <img
            className="h-[21px] w-[54px] relative"
            loading="eager"
            alt=""
            src="/left-side4.svg"
          />
          <div className="h-[11px] flex flex-row items-end justify-start gap-[5px]">
            <img
              className="h-[10.7px] w-[17px] relative"
              loading="eager"
              alt=""
              src="/mobile-signal3.svg"
            />
            <img
              className="h-[11px] w-[15.3px] relative min-h-[11px]"
              loading="eager"
              alt=""
              src="/wifi3.svg"
            />
            <input
              className="m-0 h-[11.3px] w-[24.3px] relative"
              type="checkbox"
            />
          </div>
        </header>
      </div>
      <section className="w-[366px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-left text-smi text-gray-700 font-poppins">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
            <div className="self-stretch flex flex-row items-end justify-start gap-[43px] mq450:gap-[43px]">
              <div className="relative tracking-[0.1em] whitespace-nowrap">
                DECEMBER 16, 9:10 PM
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3">
                <button className="cursor-pointer [border:none] py-2.5 pr-[7px] pl-[11px] bg-mediumorchid-200 rounded-3xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumorchid-400">
                  <div className="h-8 w-[124px] relative rounded-3xs bg-mediumorchid-200 hidden" />
                  <b className="relative text-3xs tracking-[0.1em] font-mini text-butt3 text-left z-[1]">
                    CONNECT WALLET
                  </b>
                </button>
              </div>
            </div>
            <h1 className="m-0 h-[39px] relative text-11xl font-medium font-dm-mono text-background-dropdown-background-color inline-block">
              Explore events
            </h1>
          </div>
          <div className="w-[315px] h-[50px] rounded-mini bg-dimgray-200 flex flex-row items-start justify-between pt-[13px] pb-3 pr-[15px] pl-[9px] box-border gap-[20px]">
            <div className="h-[50px] w-[315px] relative rounded-mini bg-dimgray-200 hidden" />
            <div className="w-[78px] flex flex-row items-end justify-start gap-[5px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                alt=""
                src="/icons8-search-1.svg"
              />
              <input
                className="w-[calc(100%_-_48px)] [border:none] [outline:none] inline-block font-poppins text-sm bg-[transparent] h-[21px] flex-1 relative font-bold text-background-dropdown-background-color text-left min-w-[29px] z-[1]"
                placeholder="Search"
                type="text"
              />
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/icons8-slider-1.svg"
            />
          </div>
        </div>
      </section>
      <img className="w-0 h-0 relative object-cover hidden" alt="" />
      <img className="w-1.5 h-1.5 relative hidden" alt="" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px]">
        <b className="relative tracking-[0.1em]">FEATURED</b>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border max-w-full text-left text-smi text-gray-800 font-poppins">
        <div className="w-[580px] flex flex-col items-start justify-start gap-[30px] max-w-[164%] shrink-0">
          <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
            <div className="w-[255px] flex flex-col items-end justify-start pt-[15px] px-[11px] pb-[55px] box-border relative gap-[100px] min-w-[255px] mq450:flex-1 mq450:gap-[100px]">
              <img
                className="w-full h-full absolute my-0 mx-[!important] top-[-0.4px] right-[0.3px] bottom-[0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
                loading="eager"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="rounded-mini bg-gray-900 [backdrop-filter:blur(10px)] flex flex-col items-center justify-start pt-2 pb-0 pr-[19px] pl-[15px] z-[1]">
                <div className="w-[60px] h-[60px] relative rounded-mini bg-gray-900 [backdrop-filter:blur(10px)] hidden z-[1]" />
                <div className="h-5 relative tracking-[0.1em] inline-block z-[1]">
                  DEC
                </div>
                <b className="h-[39px] relative text-7xl inline-block text-darkslategray-300 z-[1] mt-[-7px]">
                  21
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[18px] text-gray-700">
                <div className="h-5 relative tracking-[0.1em] inline-block z-[1]">
                  CONCERT
                </div>
              </div>
            </div>
            <div className="h-[250px] flex-1 relative opacity-[0.7] min-w-[201px] text-gray-700">
              <div className="absolute top-[0px] left-[0px] w-[248px] flex flex-col items-start justify-start pt-[175px] px-[18px] pb-[18px] box-border gap-[1px]">
                <img
                  className="w-full h-full absolute my-0 mx-[!important] top-[-0.4px] right-[0px] bottom-[0.4px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-3@2x.png"
                />
                <div className="w-[62px] h-5 relative tracking-[0.1em] inline-block pr-5 z-[1]">
                  SHOW
                </div>
                <h2 className="m-0 w-[138px] h-9 relative text-5xl font-bold font-inherit text-background-dropdown-background-color inline-block pr-5 z-[1]">
                  Fire Show
                </h2>
              </div>
              <img
                className="absolute top-[-0.4px] left-[0px] rounded-3xs w-[295px] h-[250px] object-cover z-[2]"
                loading="eager"
                alt=""
                src="/rectangle-22@2x.png"
              />
              <img
                className="absolute h-full w-full top-[-0.16%] right-[0.1%] bottom-[0.16%] left-[-0.1%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover z-[3]"
                alt=""
                src="/rectangle-462@2x.png"
              />
            </div>
          </div>
          <div className="w-[333px] flex flex-row items-start justify-start py-0 px-[9px] box-border max-w-full text-background-dropdown-background-color font-space-grotesk">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
              <b className="w-[81px] relative tracking-[0.1em] inline-block pr-5">
                FOR YOU
              </b>
              <div className="self-stretch flex flex-row items-center justify-start pt-7 pb-[30px] pr-[7px] pl-5 relative gap-[20px] text-mini">
                <div className="h-full w-full absolute my-0 mx-[!important] top-[-0.4px] right-[0px] bottom-[0.4px] left-[0px] rounded-xl [background:linear-gradient(180deg,_rgba(30,_43,_75,_0.97),_rgba(0,_0,_0,_0.24))] opacity-[0.8]" />
                <div className="h-[50px] w-[50px] relative rounded-mini bg-background-dropdown-background-color z-[1]">
                  <div className="absolute top-[-0.4px] left-[0px] rounded-mini bg-background-dropdown-background-color w-full h-full hidden" />
                  <img
                    className="absolute top-[2.1px] left-[4.5px] w-[41px] h-[41px] overflow-hidden z-[2]"
                    loading="eager"
                    alt=""
                    src="/primeng-icons-v500wallet1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                  <b className="w-[195px] relative inline-block pr-5 z-[1]">
                    Don’t have a wallet yet?
                  </b>
                  <div className="relative text-smi font-medium font-poppins z-[1]">
                    <p className="m-0">Don't worry, click here and create</p>
                    <p className="m-0">{`your personalized wallet. `}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomMenu />
    </div>
  );
};

export default EventTicketsFeatured;
