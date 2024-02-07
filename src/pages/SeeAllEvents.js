import EventCard from "../components/EventCard";

const SeeAllEvents = () => {
  return (
    <div className="w-full relative rounded-11xl bg-gray-300 overflow-hidden flex flex-col items-center justify-start pt-3 pb-[21px] pr-[15px] pl-[21px] box-border gap-[11px] text-left text-smi text-color-primary-blue font-space-grotesk">
      <header className="self-stretch flex flex-row items-center justify-between text-center text-mini text-gray-300 font-dm-mono">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-row items-center justify-start pt-px pb-0 pr-[22px] pl-0 relative">
            <i className="relative tracking-[-0.3px]">9:41</i>
            <img
              className="h-full w-[calc(100%_-_1px)] absolute my-0 mx-[!important] top-[-0.8px] right-[0.4px] bottom-[0.8px] left-[0.6px] max-w-full overflow-hidden max-h-full z-[1]"
              loading="eager"
              alt=""
              src="/left-side3.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-[3px] text-left text-5xl text-background-dropdown-background-color font-space-grotesk">
            <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[10px]">
              <img
                className="h-[22px] w-[22px] relative"
                loading="eager"
                alt=""
                src="/back1.svg"
              />
              <h2 className="m-0 h-[31px] relative text-inherit font-medium font-inherit inline-block">
                Events
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[25px]">
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
            <div className="h-3 flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[4px]">
              <div className="h-[11px] w-[17px] relative">
                <img
                  className="absolute top-[-0.8px] left-[0px] w-[17px] h-[10.7px] hidden"
                  alt=""
                  src="/cellular-connection.svg"
                />
                <img
                  className="absolute top-[0.2px] left-[0.4px] w-[17px] h-[10.7px] z-[1]"
                  loading="eager"
                  alt=""
                  src="/mobile-signal2.svg"
                />
              </div>
              <div className="h-[11px] w-[15px] relative">
                <img
                  className="absolute top-[-1.1px] left-[-0.1px] w-[15.3px] h-[11px] hidden"
                  alt=""
                  src="/wifi.svg"
                />
                <img
                  className="absolute top-[-0.1px] left-[0.4px] w-[15.3px] h-[11px] z-[1]"
                  loading="eager"
                  alt=""
                  src="/wifi2.svg"
                />
              </div>
              <div className="h-[11.3px] w-[24.3px] relative">
                <img
                  className="absolute top-[3.7px] right-[0px] w-[1.3px] h-1 mix-blend-normal"
                  loading="eager"
                  alt=""
                  src="/cap.svg"
                />
                <div className="absolute top-[2px] right-[4.3px] rounded-[1.33px] bg-gray-300 w-[18px] h-[7.3px] z-[1]" />
                <div className="absolute top-[0.1px] left-[-0.1px] w-[25px] h-3">
                  <input
                    className="m-0 absolute top-[-0.1px] left-[0.1px] rounded-[2.67px] box-border w-[22px] h-[11.3px] opacity-[0.35] mix-blend-normal border-[1px] border-solid border-gray-300"
                    type="checkbox"
                  />
                  <input
                    className="m-0 absolute top-[0.9px] left-[0.8px] w-[24.3px] h-[11.3px]"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-0 gap-[15px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="eager"
              alt=""
              src="/search.svg"
            />
            <img
              className="h-[22px] w-[22px] relative"
              loading="eager"
              alt=""
              src="/more1.svg"
            />
          </div>
        </div>
      </header>
      <main className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[3px]">
        <section className="flex-1 flex flex-col items-start justify-start gap-[12px] text-left text-smi text-color-primary-blue font-space-grotesk">
          <EventCard
            dimensionCode="/group-33349@2x.png"
            eventDateTime="Wed, Apr 28 •
5:30 PM
"
            locationName="Radius Gallery • Santa Cruz, CA
"
          />
          <EventCard
            dimensionCode="/group-33349-1@2x.png"
            eventDateTime="Sat, May 1 •
2:00 PM
"
            locationName="Lot 13 • Oakland, CA
"
            propPadding="7px 18px 7px 8px"
            propBorderRadius="unset"
            propWidth="unset"
            propAlignSelf="stretch"
            propAlignSelf1="unset"
          />
          <EventCard
            dimensionCode="/group-33349-2@2x.png"
            eventDateTime="Sat, Apr 24 •
1:30 PM
"
            locationName="53 Bush St • San Francisco, CA
"
            propPadding="9px 4px 0px 8px"
            propBorderRadius="unset"
            propWidth="205px"
            propAlignSelf="unset"
            propAlignSelf1="stretch"
          />
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5px] pr-px pl-0">
            <div className="flex-1 rounded-2xl bg-darkslategray-100 shadow-[0px_10px_35px_rgba(87,_92,_138,_0.06)] flex flex-row flex-wrap items-start justify-start pt-[7px] pb-1.5 pr-[21px] pl-2 gap-[16px]">
              <div className="h-[106px] w-[327px] relative rounded-2xl bg-darkslategray-100 shadow-[0px_10px_35px_rgba(87,_92,_138,_0.06)] hidden" />
              <div className="h-4 w-[16.1px] relative hidden" />
              <img
                className="h-[93px] w-[79.2px] relative object-contain z-[1]"
                loading="eager"
                alt=""
                src="/group-33349-3@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[132px]">
                <div className="self-stretch h-[58px] flex flex-col items-start justify-start gap-[3px]">
                  <div className="relative font-light z-[1]">
                    Fri, Apr 23 • 6:00 PM
                  </div>
                  <div className="self-stretch flex-1 relative text-mini font-medium text-background-dropdown-background-color z-[2]">
                    International Gala Music Festival
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[5px] text-butt3">
                  <input
                    className="border-darkslategray-100 accent-darkslategray-100 cursor-pointer m-0 h-3.5 w-3.5 relative z-[1]"
                    checked={true}
                    type="radio"
                  />
                  <div className="relative font-light z-[1]">
                    Lot 13 • Oakland, CA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EventCard
            dimensionCode="/rectangle-21@2x.png"
            eventDateTime="Mon, Jun 21 •
10:00 PM
"
            locationName="Longboard Margarita Bar "
            propPadding="9px 19px 5px 12px"
            propBorderRadius="5px"
            propWidth="unset"
            propAlignSelf="stretch"
            propAlignSelf1="unset"
          />
        </section>
      </main>
      <img className="w-0 h-0 relative object-cover hidden" alt="" />
      <img className="w-1.5 h-1.5 relative hidden" alt="" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-[3px]">
        <div className="flex-1 rounded-2xl bg-darkslategray-100 shadow-[0px_10px_35px_rgba(87,_92,_138,_0.06)] flex flex-row flex-wrap items-start justify-start pt-[7px] pb-1.5 pr-[19px] pl-2 gap-[18px]">
          <div className="h-[106px] w-[327px] relative rounded-2xl bg-darkslategray-100 shadow-[0px_10px_35px_rgba(87,_92,_138,_0.06)] hidden" />
          <div className="h-4 w-[16.1px] relative hidden" />
          <img
            className="h-[93px] w-[79.4px] relative object-contain z-[1]"
            loading="eager"
            alt=""
            src="/group-33349-4@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[132px]">
            <div className="self-stretch h-[59px] flex flex-col items-start justify-start gap-[4px]">
              <div className="relative font-light z-[1]">
                Sun, Apr 25 • 10:15 AM
              </div>
              <div className="self-stretch flex-1 relative text-mini font-medium text-background-dropdown-background-color z-[1]">
                International Gala Music Festival
              </div>
            </div>
            <div className="flex flex-row items-end justify-start py-0 pr-px pl-0 gap-[5px] text-darkgray-100">
              <input
                className="border-darkslategray-100 accent-darkslategray-100 cursor-pointer m-0 h-4 w-4 relative z-[1]"
                checked={true}
                type="radio"
              />
              <div className="relative font-light whitespace-pre-wrap z-[1]">{`36 Guild Street London, UK  `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeAllEvents;
