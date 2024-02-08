import Crypto1 from "./Crypto1";

const Wallet = () => {
  return (
    <div className="w-[2339.1px] flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-lightsteelblue-200 flex flex-row items-start justify-start pt-[109px] px-[51px] pb-[168px] box-border gap-[91px] max-w-full text-left text-10xl-9 text-text-color-100 font-inter mq1025:pt-[71px] mq1025:pb-[109px] mq1025:box-border mq450:pt-[46px] mq450:pb-[71px] mq450:box-border mq750:gap-[91px] mq1125:flex-wrap mq1125:gap-[91px] mq1125:pl-[25px] mq1125:pr-[25px] mq1125:box-border">
        <div className="h-[831.3px] w-[2339.1px] relative bg-lightsteelblue-200 hidden max-w-full" />
        <div className="w-[616px] rounded-[14.94px] bg-background-dropdown-background-color shadow-[0px_37.3px_46.68px_-9.34px_rgba(0,_0,_0,_0.1),_0px_18.7px_18.67px_-9.34px_rgba(0,_0,_0,_0.04)] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[45px] pb-[58px] pr-0 pl-[26px] box-border gap-[33px] min-w-[616px] max-w-full mq1025:min-w-full mq750:gap-[33px] mq750:pt-[29px] mq750:pb-[38px] mq750:box-border mq1125:flex-1">
          <div className="w-[572px] flex flex-row items-start justify-start py-0 px-0 box-border max-w-full text-14xl-6">
            <div className="w-[867px] flex flex-row items-center justify-center max-w-[152%] shrink-0">
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 box-border relative max-w-full">
                <div className="flex-1 relative leading-[44.81px] font-medium inline-block max-w-full mq1025:text-[27px] mq1025:leading-[36px] mq450:text-xl mq450:leading-[27px]">
                  Connect to wallet
                </div>
                <div className="my-0 mx-[!important] absolute top-[-15.1px] right-[325.8px] rounded-xs-2 bg-background-dropdown-background-color overflow-hidden flex flex-row items-center justify-center z-[1]">
                  <img
                    className="h-[44.8px] w-[44.8px] relative overflow-hidden shrink-0"
                    loading="eager"
                    alt=""
                    src="/x.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-[18px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-center justify-center max-w-full">
              <div className="flex-1 rounded-xs-2 bg-whitesmoke shadow-[0px_1.9px_3.73px_rgba(0,_0,_0,_0.05)] box-border flex flex-row items-center justify-between py-0 pr-[26px] pl-[25px] relative gap-[20px] max-w-full border-[1.9px] border-solid border-gainsboro-200 mq450:flex-wrap">
                <div className="relative leading-[44.81px] font-semibold flex items-center h-[29.9px] mq450:text-5xl mq450:leading-[36px]">
                  Metamask
                </div>
                <img
                  className="h-28 w-28 relative"
                  loading="eager"
                  alt=""
                  src="/metamask.svg"
                />
                <img
                  className="h-[29.9px] w-[29.9px] absolute my-0 mx-[!important] right-[194.4px] bottom-[38.9px] overflow-hidden shrink-0 z-[1]"
                  loading="eager"
                  alt=""
                  src="/information-circle.svg"
                />
                <div className="absolute my-0 mx-[!important] bottom-[25.7px] left-[199.6px] text-7xl-1 leading-[44.81px] font-medium text-slategray mix-blend-normal z-[1] mq450:text-2xl mq450:leading-[36px]">
                  Networks
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-[18px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-end justify-start gap-[26px] max-w-full">
              <div className="self-stretch flex flex-row items-center justify-center max-w-full">
                <div className="flex-1 rounded-xs-2 bg-whitesmoke shadow-[0px_1.9px_3.73px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-row items-center justify-between py-[34px] pr-[49px] pl-[25px] gap-[20px] max-w-full border-[1.9px] border-solid border-gainsboro-200 mq750:flex-wrap mq750:pr-6 mq750:box-border">
                  <div className="w-[288.2px] relative leading-[44.81px] font-semibold flex items-center h-[29.9px] shrink-0 mq450:text-5xl mq450:leading-[36px]">
                    WalletConnect
                  </div>
                  <img
                    className="h-[44.8px] w-[71px] relative"
                    alt=""
                    src="/group-13003.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center relative text-7xl-1 text-slategray">
                <div className="self-stretch h-[90px] relative leading-[44.81px] font-medium inline-block mix-blend-normal mq450:text-2xl mq450:leading-[36px]">
                  By connecting a wallet, you agree to Chainblock
                </div>
                <div className="h-[33.6px] absolute my-0 mx-[!important] bottom-[11.5px] left-[148.3px] leading-[59.75px] font-medium text-royalblue inline-block mix-blend-normal z-[1] mq450:text-2xl mq450:leading-[48px]">
                  Terms of Service.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Crypto2 />
      </section>
    </div>
  );
};

export default Wallet;
