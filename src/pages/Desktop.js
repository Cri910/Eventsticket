import { useCallback } from "react";
import Nav1 from "../components/Nav1";
import Buyyourticket from "../components/Buyyourticket";
import { useNavigate } from "react-router-dom";
import BuyTicketsFrame from "../components/BuyTicketsFrame";
import MarketplaceText from "../components/MarketplaceText";

const Desktop = () => {
  const navigate = useNavigate();

  const onWalletConnectFrameClick = useCallback(() => {
    navigate("/pay-methoddefault");
  }, [navigate]);

  const onFooterComponentClick = useCallback(() => {
    navigate("/pay-methodcreate-wallet");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-300 flex flex-col items-center justify-start pt-8 pb-[62px] pr-[58px] pl-[60px] box-border gap-[64px] tracking-[normal] mq450:gap-[64px] mq700:gap-[64px] mq700:pl-[30px] mq700:pr-[29px] mq700:box-border">
      <Nav1 />
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[17px] box-border gap-[30px] max-w-full shrink-0 text-left text-lg font-dm-mono">
        <h1 className="m-0 w-[206px] relative text-inherit font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">
          Connect your wallet
        </h1>
        <Buyyourticket />
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-6">
          <button
            className="cursor-pointer [border:none] py-2.5 pr-9 pl-[39px] bg-[transparent] rounded-8xs [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap"
            onClick={onWalletConnectFrameClick}
          >
            <b className="relative text-mini font-space-grotesk text-butt3 text-left">
              Buy Now
            </b>
          </button>
        </div>
        <BuyTicketsFrame />
        <button className="cursor-pointer py-2.5 pr-7 pl-[31px] bg-[transparent] rounded-8xs overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-background-dropdown-background-color hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
          <b className="relative text-mini font-space-grotesk text-butt3 text-left">
            See others
          </b>
        </button>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-px pl-0 box-border max-w-full shrink-0 text-left text-5xl text-background-dropdown-background-color font-space-grotesk">
        <div className="flex-1 bg-darkslategray-300 overflow-hidden flex flex-col items-center justify-start pt-[60px] pb-[62px] pr-5 pl-[21px] box-border gap-[24px] max-w-full">
          <div className="flex flex-col items-center justify-start gap-[5px] max-w-full shrink-0">
            <h1 className="m-0 w-[281px] relative text-inherit font-medium font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:text-[19px]">
              Don’t have a Wallet yet?
            </h1>
            <h2 className="m-0 relative text-smi font-medium font-poppins text-center">
              <p className="m-0">{`Don't worry, click below and create your personalized wallet. `}</p>
              <p className="m-0">
                You can choose between custodial or non-custodial wallets.
              </p>
            </h2>
          </div>
          <button
            className="cursor-pointer py-2.5 pr-[21px] pl-7 bg-color-primary-blue rounded-8xs overflow-hidden flex flex-row items-center justify-end whitespace-nowrap border-[1px] border-solid border-background-dropdown-background-color hover:bg-mediumorchid-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100"
            onClick={onFooterComponentClick}
          >
            <b className="relative text-mini font-space-grotesk text-butt3 text-left">
              Create your wallet
            </b>
          </button>
        </div>
      </section>
      <div className="w-[123.9px] h-20 relative hidden" />
      <MarketplaceText />
    </div>
  );
};

export default Desktop;
