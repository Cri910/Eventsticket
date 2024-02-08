const EventDetails = () => {
  return (
    <div className="w-full relative rounded-11xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start gap-[86px] tracking-[normal] text-left text-xs text-butt3 font-dm-mono">
      <main className="self-stretch flex flex-col items-center justify-start gap-[25px] max-w-full text-left text-smi text-background-dropdown-background-color font-space-grotesk">
        <section className="self-stretch flex flex-col items-center justify-start pt-3 pb-[13px] pr-[15px] pl-[21px] relative gap-[193px] text-left text-smi text-gray-900 font-space-grotesk">
          <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[2.5px] bottom-[0px] left-[0.5px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0.5px] bottom-[0px] left-[-0.5px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/group-2@2x.png"
            />
            <div className="absolute h-full w-full top-[0px] right-[0.5px] bottom-[0px] left-[-0.5px] [background:linear-gradient(180deg,_#000,_#000_0.01%,_rgba(0,_0,_0,_0))] z-[1]" />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[17px]">
            <header className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <img
                className="h-[21px] w-[54px] relative z-[2]"
                loading="eager"
                alt=""
                src="/left-side3.svg"
              />
              <div className="h-[11px] flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="h-[10.7px] w-[17px] relative z-[2]"
                  loading="eager"
                  alt=""
                  src="/mobile-signal3.svg"
                />
                <img
                  className="h-[11px] w-[15.3px] relative min-h-[11px] z-[2]"
                  loading="eager"
                  alt=""
                  src="/wifi3.svg"
                />
                <input
                  className="m-0 h-[11.3px] w-[24.3px] relative z-[2]"
                  type="checkbox"
                />
              </div>
            </header>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-2.5">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                <button className="cursor-pointer [border:none] p-0 bg-gray-600 h-10 w-14 relative rounded-mini [backdrop-filter:blur(10px)] z-[2]">
                  <div className="absolute top-[0px] left-[-0.5px] rounded-mini bg-gray-600 [backdrop-filter:blur(10px)] w-full h-full hidden" />
                  <img
                    className="absolute top-[8px] left-[15.5px] w-6 h-6 overflow-hidden z-[3]"
                    alt=""
                    src="/icons8-left-1.svg"
                  />
                </button>
                <div className="rounded-mini bg-gray-600 [backdrop-filter:blur(10px)] flex flex-row items-start justify-start py-2 px-4 gap-[16px] z-[2]">
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
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-1.5">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                <div className="relative tracking-[0.1em] z-[2]">MUSICAL</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mt-[-4px] text-11xl text-background-dropdown-background-color font-poppins mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <h1 className="m-0 h-[45px] relative text-inherit font-bold font-inherit inline-block z-[2]">
                    Anastasia
                  </h1>
                  <div className="flex flex-row items-start justify-start py-0 px-[5px] text-smi text-gray-900 font-space-grotesk">
                    <div className="relative tracking-[0.1em] whitespace-nowrap z-[2]">
                      STARTING 9:10 PM
                    </div>
                  </div>
                </div>
                <div className="rounded-mini bg-background-dropdown-background-color [backdrop-filter:blur(10px)] flex flex-col items-center justify-start pt-2 pb-[7px] pr-[19px] pl-[15px] z-[2] text-smi text-gray-700 font-mini">
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
        <div className="w-[355px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] py-2 pr-[15px] pl-[13px] bg-mediumorchid-200 rounded-3xs flex flex-row items-center justify-center hover:bg-mediumorchid-400">
              <div className="h-8 w-[76px] relative rounded-3xs bg-mediumorchid-200 hidden" />
              <div className="relative text-smi tracking-[0.1em] font-mini text-background-dropdown-background-color text-left z-[1]">
                ABOUT
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-2 pr-4 pl-[13px] bg-background-dropdown-background-color rounded-3xs flex flex-row items-center justify-center hover:bg-gainsboro-100">
              <div className="h-8 w-[124px] relative rounded-3xs bg-background-dropdown-background-color hidden" />
              <div className="relative text-smi tracking-[0.1em] font-mini text-black text-left z-[1]">
                PARTICIPANTS
              </div>
            </button>
          </div>
        </div>
        <section className="w-[355px] relative text-base leading-[150%] font-mini text-gray-800 text-left inline-block max-w-full pl-5 pr-5">
          Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
          Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et.
          Und commodo, fermentum, mauris leo eget.
        </section>
        <div className="w-[355px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <b className="relative tracking-[0.1em]">LOCATION</b>
        </div>
      </main>
      <img className="w-0 h-0 relative object-cover hidden" alt="" />
      <img className="w-1.5 h-1.5 relative hidden" alt="" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full">
        <img
          className="h-[150px] w-[315px] absolute my-0 mx-[!important] top-[-67px] left-[calc(50%_-_158.5px)] rounded-xl object-cover"
          alt=""
          src="/location@2x.png"
        />
        <div className="flex-1 rounded-t-xl rounded-b-none [background:linear-gradient(180deg,_#1c233d,_rgba(125,_122,_216,_0))] shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(30px)] flex flex-col items-center justify-start pt-[30px] px-0 pb-0 box-border gap-[13px] max-w-full z-[1]">
          <div className="self-stretch h-[130px] relative rounded-t-xl rounded-b-none [background:linear-gradient(180deg,_#1c233d,_rgba(125,_122,_216,_0))] shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(30px)] hidden" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[31px]">
            <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[49px] mq450:gap-[49px]">
              <div className="h-[46px] w-[98px] flex flex-col items-start justify-start gap-[3px]">
                <div className="relative z-[2]">Current Bid</div>
                <div className="h-[26px] relative text-xl font-medium text-background-dropdown-background-color inline-block z-[2]">
                  1.90 ETH
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[19px] px-3.5 pb-[18px] bg-[transparent] flex-1 flex flex-row items-center justify-start box-border relative min-w-[100px] whitespace-nowrap">
                <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini [background:linear-gradient(98.26deg,_rgba(246,_135,_255,_0.8),_rgba(84,_92,_113,_0.8))] z-[2]" />
                <b className="relative text-smi tracking-[0.1em] font-mini text-background-dropdown-background-color text-left z-[3]">
                  BUY A TICKET
                </b>
                <img
                  className="h-6 w-6 absolute my-0 mx-[!important] top-[14px] right-[26.5px] overflow-hidden shrink-0 z-[3]"
                  alt=""
                  src="/icons8-new-ticket-1.svg"
                />
              </button>
            </div>
          </div>
          <footer className="self-stretch h-[34px] relative z-[2]">
            <div className="absolute bottom-[8px] left-[calc(50%_-_66.5px)] rounded-81xl bg-darkslategray-200 w-[134px] h-[5px]" />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
