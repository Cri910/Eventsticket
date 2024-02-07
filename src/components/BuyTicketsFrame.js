import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";

const BuyTicketsFrame = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[5px] box-border gap-[46px] max-w-full text-left text-lg text-background-dropdown-background-color font-dm-mono mq450:gap-[46px]">
      <div className="w-[413px] flex flex-row items-start justify-start py-0 pr-[9px] pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-col items-center justify-start gap-[24px] max-w-full">
          <h1 className="m-0 w-[173px] relative text-inherit font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">
            Buy your tickets
          </h1>
          <h1 className="m-0 self-stretch h-[46px] relative text-17xl font-medium font-space-grotesk inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:text-3xl mq900:text-10xl">
            Top Events of the week
          </h1>
        </div>
      </div>
      <div className="self-stretch h-[249px] flex flex-row flex-wrap items-start justify-start relative gap-[30px_8px] text-5xs">
        <FrameComponent2
          image3="/image-3@2x.png"
          rectangle2="/rectangle-2@2x.png"
          rickStorms="Rick Storms"
          eTH="19,400.50 ETH"
          icon="/icon.svg"
        />
        <FrameComponent1
          rectangle2="/rectangle-2@2x.png"
          samSon="Sam Son"
          eTH="6,200.50 ETH"
          icon1="/icon-1.svg"
        />
        <FrameComponent1
          rectangle2="/rectangle-2@2x.png"
          samSon="Jake Robert"
          eTH="8,400.50 ETH"
          icon1="/icon-1.svg"
          propTop="-0.2px"
          propLeft="606px"
          propPadding="0px 1px 3px 0px"
        />
        <FrameComponent2
          image3="/image-3-1@2x.png"
          rectangle2="/rectangle-2-3@2x.png"
          rickStorms="Joe Forest"
          eTH="10,400.50 ETH"
          icon="/icon-1.svg"
          propTop="92.8px"
          propHeight="6px"
        />
        <FrameComponent1
          rectangle2="/rectangle-2-3@2x.png"
          samSon="Reece Jackson"
          eTH="7,400.50 ETH"
          icon1="/icon-1.svg"
          propTop="92.8px"
          propLeft="300px"
          propPadding="0px 1px 3px 0px"
        />
        <FrameComponent1
          rectangle2="/rectangle-2-3@2x.png"
          samSon="Scott Moses"
          eTH="8,450.50 ETH"
          icon1="/icon-1.svg"
          propTop="92.8px"
          propLeft="606px"
          propPadding="0px 1px 3px 0px"
        />
        <div className="my-0 mx-[!important] absolute top-[185.8px] left-[0px] rounded-8xs bg-darkslategray-100 overflow-hidden flex flex-row items-center justify-start pt-[9px] pb-[7px] pr-3 pl-2 gap-[7px]">
          <img
            className="h-[47px] w-[71px] relative rounded-8xs object-cover"
            alt=""
            src="/rectangle-2-6@2x.png"
          />
          <div className="flex flex-col items-start justify-start py-0 pr-[94px] pl-0 gap-[4px]">
            <div className="relative font-medium">lara Smith</div>
            <div className="flex flex-row items-center justify-start gap-[2px]">
              <img
                className="h-2 w-2 relative rounded-[50%] object-cover"
                alt=""
                src="/ellipse-6@2x.png"
              />
              <div className="relative font-medium">8,700.50 ETH</div>
            </div>
          </div>
          <div className="h-1.5 flex flex-col items-start justify-start pt-0 pb-[3px] pr-px pl-0 box-border">
            <img className="w-5 h-[2.5px] relative" alt="" src="/icon-1.svg" />
          </div>
        </div>
        <FrameComponent1
          rectangle2="/rectangle-2-6@2x.png"
          samSon="Drink Water"
          eTH="6,400.50 ETH"
          icon1="/icon-7.svg"
          propTop="185.8px"
          propLeft="300px"
          propPadding="4px 1px 0px 0px"
        />
        <FrameComponent1
          rectangle2="/rectangle-2-6@2x.png"
          samSon="Rick Hardy"
          eTH="7,490.50 ETH"
          icon1="/icon-1.svg"
          propTop="185.8px"
          propLeft="606px"
          propPadding="0px 1px 3px 0px"
        />
      </div>
    </div>
  );
};

export default BuyTicketsFrame;
