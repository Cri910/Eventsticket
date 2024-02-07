import SectionCardForm from "../components/SectionCardForm";
import Footer1 from "../components/Footer1";

const EventDetails = () => {
  return (
    <div className="w-full relative rounded-11xl bg-gray-300 overflow-hidden flex flex-col items-start justify-start gap-[86px]">
      <main className="self-stretch flex flex-col items-center justify-start gap-[25px] text-left text-smi text-background-dropdown-background-color font-space-grotesk">
        <SectionCardForm
          dimensions="/left-side.svg"
          rectangleDivWidth="100%"
          rectangleDivRight="-0.5px"
          frameButtonPadding="0px 16px 0px 8px"
          icons8HeartOutline1Padding="8px 17px 8px 16px"
          mUSICALPadding="0px 17px 0px 4px"
          anastasiaPadding="0px 1px 0px 0px"
          groupDivPadding="0px 4px"
          dECPadding="8px 18px 7px 15px"
        />
        <div className="w-[356px] flex flex-row items-start justify-start py-0 px-5 box-border">
          <div className="flex flex-row items-start justify-start gap-[15px]">
            <button className="cursor-pointer [border:none] p-2 bg-background-dropdown-background-color w-[76px] rounded-3xs flex flex-row items-center justify-center box-border">
              <div className="h-8 w-[76px] relative rounded-3xs bg-background-dropdown-background-color hidden" />
              <b className="relative text-smi tracking-[0.1em] font-mini text-black text-left z-[1]">
                ABOUT
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-2 pr-4 pl-[13px] bg-mediumorchid-200 rounded-3xs flex flex-row items-center justify-center">
              <div className="h-8 w-[124px] relative rounded-3xs bg-mediumorchid-200 hidden" />
              <div className="relative text-smi tracking-[0.1em] font-mini text-butt3 text-left z-[1]">
                PARTICIPANTS
              </div>
            </button>
          </div>
        </div>
        <section className="w-[355px] relative text-base leading-[150%] font-mini text-gray-900 text-left inline-block pl-5 pr-5">
          Lorem ipsum dolor sit amet, consectetur elit adipiscing elit.
          Venenatis pulvinar a amet in, suspendisse vitae, posuere eu tortor et.
          Und commodo, fermentum, mauris leo eget.
        </section>
        <div className="w-[356px] flex flex-row items-start justify-start py-0 px-5 box-border">
          <b className="relative tracking-[0.1em]">LOCATION</b>
        </div>
      </main>
      <img className="w-0 h-0 relative object-cover hidden" alt="" />
      <img className="w-1.5 h-1.5 relative hidden" alt="" />
      <Footer1
        propLeft="29.5px"
        propPadding="0px 21px 0px 20px"
        propPadding1="19px 51px 18px 20px"
        propGap="unset"
        propWidth="calc(100% - 1px)"
        propPosition="absolute"
        propMargin="0 !important"
        propTop="13.6px"
        propRight="21.5px"
      />
    </div>
  );
};

export default EventDetails;
