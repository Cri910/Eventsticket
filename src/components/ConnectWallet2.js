const ConnectWallet = () => {
  return (
    <div className="w-[616px] rounded-[14.94px] bg-background-dropdown-background-color shadow-[0px_37.3px_46.68px_-9.34px_rgba(0,_0,_0,_0.1),_0px_18.7px_18.67px_-9.34px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-col items-end justify-start pt-[30px] pb-[58px] pr-[18px] pl-[45px] box-border relative gap-[50px] tracking-[normal] text-left text-14xl-6 text-text-color-100 font-inter mq450:gap-[50px] mq450:pl-5 mq450:box-border">
      <div className="w-[866.4px] absolute my-0 mx-[!important] top-[44.8px] right-[-295.2px] leading-[44.81px] font-medium inline-block">
        Connect to wallet
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-[13px] pl-3">
        <div className="rounded-xs-2 bg-background-dropdown-background-color overflow-hidden flex flex-row items-center justify-center z-[1]">
          <img
            className="h-[44.8px] w-[44.8px] relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/x.svg"
          />
        </div>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-10xl-9 text-text-color-100 font-inter mq525:gap-[32px]">
        <div className="self-stretch flex flex-row items-center justify-center max-w-full">
          <div className="flex-1 rounded-xs-2 bg-whitesmoke shadow-[0px_1.9px_3.73px_rgba(0,_0,_0,_0.05)] box-border flex flex-row items-center justify-between py-0 pr-[26px] pl-[25px] relative gap-[20px] max-w-full border-[1.9px] border-solid border-gainsboro-200 mq450:flex-wrap">
            <div className="h-[29.9px] relative leading-[44.81px] font-semibold flex items-center mq450:text-5xl mq450:leading-[36px]">
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
        <div className="self-stretch flex flex-col items-end justify-start gap-[26px] max-w-full">
          <div className="self-stretch flex flex-row items-center justify-center max-w-full">
            <div className="flex-1 rounded-xs-2 bg-whitesmoke shadow-[0px_1.9px_3.73px_rgba(0,_0,_0,_0.05)] box-border overflow-hidden flex flex-row items-center justify-between py-[34px] pr-[49px] pl-[25px] gap-[20px] max-w-full border-[1.9px] border-solid border-gainsboro-200 mq525:flex-wrap mq525:pr-6 mq525:box-border">
              <div className="w-[288.2px] relative leading-[29.9px] font-semibold flex items-center shrink-0 mq450:text-5xl mq450:leading-[36px]">
                WalletConnect
              </div>
              <img
                className="h-[44.8px] w-[71px] relative"
                alt=""
                src="/group-13003.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-end pt-[45px] px-5 pb-3 relative text-7xl-1 text-slategray">
            <div className="w-full h-full absolute my-0 mx-[!important] top-[-0.1px] left-[0px] leading-[44.81px] font-medium inline-block mix-blend-normal mq450:text-2xl mq450:leading-[36px]">
              By connecting a wallet, you agree to Chainblock
            </div>
            <div className="h-[33.6px] relative leading-[59.75px] font-medium text-royalblue inline-block shrink-0 mix-blend-normal z-[1] mq450:text-2xl mq450:leading-[48px]">
              Terms of Service.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectWallet;
