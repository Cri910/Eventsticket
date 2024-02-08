const PayMethodCreateWallet = () => {
  return (
    <div className="w-[683px] rounded-[3.44px] bg-darkslategray-300 box-border overflow-hidden flex flex-col items-center justify-start pt-[21px] px-0 pb-16 gap-[22px] tracking-[normal] text-left text-21xl text-background-dropdown-background-color font-space-grotesk border-[3.4px] border-solid border-color-primary-blue">
      <div className="flex flex-row items-start justify-start py-0 px-5 relative">
        <header className="h-[94.6px] w-[682.8px] absolute my-0 mx-[!important] right-[-192.8px] bottom-[-22.8px] rounded-8xs [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))]" />
        <h1 className="m-0 h-[51px] relative text-inherit font-bold font-inherit inline-block z-[1]">
          Create Wallet
        </h1>
      </div>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 pb-[22px] px-0 box-border max-w-full text-left text-sm text-color-primary-blue font-space-grotesk">
        <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-2 pb-0 pr-px pl-0 box-border [row-gap:20px] max-w-full text-center text-base font-open-sans">
            <div className="flex-1 flex flex-col items-center justify-start gap-[12px] min-w-[222px] max-w-full">
              <div className="w-[92px] relative leading-[24px] font-semibold inline-block pl-5 pr-5">
                Crypto
              </div>
              <div className="self-stretch h-1 relative bg-color-primary-blue" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[222px] max-w-full text-gray-4">
              <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
                <div className="w-32 relative leading-[24px] font-semibold inline-block pl-5 pr-5">
                  Credit Card
                </div>
                <div className="self-stretch h-1 relative bg-text-2nd-lightest" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-11 box-border max-w-full text-background-dropdown-background-color mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-7 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[31px] relative gap-[14px]">
                <div className="relative font-medium">Address</div>
                <input
                  className="[outline:none] bg-darkslategray-300 self-stretch h-[39.6px] rounded-8xs-3 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-[10.319066047668457px] min-w-[250px] border-[1.7px] border-solid border-background-dropdown-background-color"
                  type="text"
                />
                <img
                  className="w-[17.5px] h-[17.5px] absolute my-0 mx-[!important] right-[24px] bottom-[42.8px] z-[1]"
                  loading="eager"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="self-stretch h-[72px] flex flex-col items-start justify-start relative gap-[14px] z-[2] mt-[-14px] text-base text-butt3 font-poppins">
                <input
                  className="w-[75px] [border:none] [outline:none] font-medium font-space-grotesk text-sm bg-[transparent] h-[18px] relative text-background-dropdown-background-color text-left inline-block"
                  placeholder="Private key"
                  type="text"
                />
                <div className="self-stretch flex-1 rounded-8xs-3 bg-darkslategray-300 overflow-hidden flex flex-row items-start justify-start p-[10.319066047668457px] border-[1.7px] border-solid border-background-dropdown-background-color">
                  <div className="h-6 w-[173px] relative hidden whitespace-nowrap">
                    name@example.com
                  </div>
                </div>
                <img
                  className="w-[17.5px] h-[17.5px] absolute my-0 mx-[!important] right-[24.2px] bottom-[11px] z-[1]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-[50px] pl-[49px] text-butt3">
            <div className="flex flex-row items-center justify-start py-1 pr-px pl-0 gap-[15px]">
              <div className="h-4 w-4 relative">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1.5px] border-solid border-butt3">
                  <div className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] rounded-12xs bg-purple-blue hidden" />
                  <div className="absolute w-6/12 top-[calc(50%_-_1px)] right-[25%] left-[25%] rounded-12xs bg-purple-blue h-0.5 hidden" />
                </div>
              </div>
              <div className="relative font-medium">Lorem Ipsum</div>
            </div>
          </div>
        </div>
      </section>
      <button className="cursor-pointer [border:none] p-2.5 bg-brand-primary-lightest w-[349px] rounded flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap hover:bg-lightsteelblue-100 mq450:w-[calc(100%_-_40px)]">
        <div className="w-[303px] relative text-sm font-medium font-space-grotesk text-darkslategray-300 text-left inline-block pl-5 pr-5">
          DOWNLOAD YOUR WALLET INFORMATION
        </div>
      </button>
    </div>
  );
};

export default PayMethodCreateWallet;
