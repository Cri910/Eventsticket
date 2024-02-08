import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PayMethodDefault = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/connect-wallet");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/pay-methodcreate-wallet");
  }, [navigate]);

  return (
    <div className="w-[683px] rounded-[3.44px] bg-darkslategray-300 box-border overflow-hidden flex flex-col items-center justify-start pt-[21px] px-0 pb-[153px] relative gap-[93px] tracking-[normal] border-[3.4px] border-solid border-color-primary-blue mq450:gap-[93px]">
      <header className="w-full h-[94.6px] absolute my-0 mx-[!important] top-[0px] right-[0px] left-[0px] rounded-8xs [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))]" />
      <section className="self-stretch flex flex-col items-center justify-start gap-[23px] max-w-full text-left text-21xl text-background-dropdown-background-color font-space-grotesk">
        <h1 className="m-0 w-[526px] h-[51px] relative text-inherit font-bold font-inherit inline-block max-w-full pl-5 pr-5 z-[1]">
          Choose payment method
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-2 pb-0 pr-0.5 pl-0 box-border [row-gap:20px] max-w-full text-center text-base text-color-primary-blue font-open-sans">
          <div className="flex-1 flex flex-col items-center justify-start gap-[12px] min-w-[222px] max-w-full">
            <div className="w-[92px] relative leading-[24px] font-semibold inline-block pl-5 pr-5">
              Crypto
            </div>
            <div className="self-stretch h-1 relative bg-color-primary-blue" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[12px] min-w-[222px] max-w-full ml-[-1px] text-gray-4 mq450:ml-0">
            <div className="w-32 relative leading-[24px] font-semibold inline-block pl-5 pr-5">
              Credit Card
            </div>
            <div className="self-stretch h-1 relative bg-text-2nd-lightest" />
          </div>
        </div>
      </section>
      <div className="w-[397px] flex flex-row items-start justify-start py-0 pr-[25px] pl-5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[37px] max-w-full mq450:gap-[37px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
            <button
              className="cursor-pointer [border:none] p-2.5 bg-brand-primary-lightest flex-1 rounded flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap hover:bg-lightsteelblue-100"
              onClick={onButtonClick}
            >
              <div className="relative text-sm font-medium font-space-grotesk text-darkslategray-300 whitespace-pre-wrap text-left">{`CONNECT WALLET      `}</div>
            </button>
          </div>
          <button
            className="cursor-pointer [border:none] p-2.5 bg-color-primary-blue self-stretch rounded flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumorchid-300"
            onClick={onButton1Click}
          >
            <div className="relative text-sm font-medium font-space-grotesk text-darkslategray-300 text-left">
              CREATE WALLET
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayMethodDefault;
