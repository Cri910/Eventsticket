const PayMethodCreditCard = () => {
  return (
    <div className="w-[683px] rounded-[3.44px] bg-darkslategray-300 box-border overflow-hidden flex flex-col items-center justify-start pt-[21px] pb-[75px] pr-0 pl-1 gap-[30px] border-[3.4px] border-solid border-color-primary-blue">
      <section className="self-stretch flex flex-col items-center justify-start gap-[23px] text-left text-21xl text-background-dropdown-background-color font-space-grotesk">
        <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-5">
          <div className="flex flex-row items-start justify-start relative">
            <header className="h-[94.6px] w-[682.8px] absolute my-0 mx-[!important] bottom-[-22.8px] left-[calc(50%_-_341px)] rounded-8xs [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))]" />
            <h1 className="m-0 h-[51px] relative text-inherit font-bold font-inherit inline-block z-[1]">
              Pay with credit card
            </h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start pt-2 pb-0 pr-0.5 pl-0 text-center text-base text-gray-4 font-open-sans">
          <div className="flex-1 flex flex-col items-center justify-start gap-[12px] min-w-[220px]">
            <div className="w-[92px] relative leading-[24px] font-semibold inline-block pl-5 pr-5">
              Crypto
            </div>
            <div className="self-stretch h-1 relative bg-text-2nd-lightest" />
          </div>
          <div className="flex-1 flex flex-col items-center justify-start gap-[12px] min-w-[220px] ml-[-1px] text-color-primary-blue">
            <div className="w-32 relative leading-[24px] font-semibold inline-block pl-5 pr-5">
              Credit Card
            </div>
            <div className="self-stretch h-1 relative bg-color-primary-blue" />
          </div>
        </div>
      </section>
      <section className="w-[631px] flex flex-row items-start justify-start pt-0 pb-[11px] pr-6 pl-5 box-border text-left text-sm text-background-dropdown-background-color font-space-grotesk">
        <div className="flex-1 flex flex-col items-start justify-start pt-0 pb-[57px] pr-px pl-0 gap-[11px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px gap-[13px]">
            <div className="relative font-medium">Card Name</div>
            <input
              className="[outline:none] bg-darkslategray-300 self-stretch h-10 rounded-8xs-3 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-[10.319066047668457px] min-w-[250px] border-[1.7px] border-solid border-background-dropdown-background-color"
              type="text"
            />
          </div>
          <div className="w-[415px] flex flex-col items-center justify-center relative">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-px relative gap-[28px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-0">
                <div className="w-[587px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[13px]">
                  <div className="relative font-medium">Card Number</div>
                  <input
                    className="[outline:none] bg-darkslategray-300 self-stretch h-10 rounded-8xs-3 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-[10.319066047668457px] min-w-[250px] border-[1.7px] border-solid border-background-dropdown-background-color"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-56 flex flex-row items-start justify-start pt-0 pb-[31px] pr-px pl-0 box-border relative gap-[16px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[14px]">
                  <div className="relative font-medium">Valid THRU</div>
                  <div className="self-stretch h-[34.1px] rounded-8xs-3 bg-darkslategray-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-[10.319066047668457px] text-base text-dimgray-300 font-poppins border-[1.7px] border-solid border-background-dropdown-background-color">
                    <div className="w-[55px] relative hidden">Rachel</div>
                  </div>
                </div>
                <div className="w-[95px] flex flex-col items-start justify-start relative gap-[13px]">
                  <div className="relative font-medium">CVC</div>
                  <input
                    className="[outline:none] bg-darkslategray-300 self-stretch h-[34px] rounded-8xs-3 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-[10.319066047668457px] min-w-[57px] border-[1.7px] border-solid border-background-dropdown-background-color"
                    type="text"
                  />
                  <div className="w-[101.4px] h-[34.3px] absolute my-0 mx-[!important] right-[-21.1px] bottom-[-11.2px] text-xs font-medium text-silver-100 inline-block z-[1]">
                    000
                  </div>
                </div>
                <div className="h-[34px] absolute my-0 mx-[!important] bottom-[21.2px] left-[11px] text-xs font-medium text-silver-100 inline-block z-[1]">
                  MM/YYYY
                </div>
              </div>
              <div className="w-[292px] my-0 mx-[!important] absolute right-[-145px] bottom-[30px] flex flex-col items-start justify-start gap-[14px] z-[1] text-base text-butt3">
                <input
                  className="w-[71px] [border:none] [outline:none] font-medium font-space-grotesk text-sm bg-[transparent] h-[18px] relative text-background-dropdown-background-color text-left inline-block"
                  placeholder="Public Key"
                  type="text"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0">
                  <div className="w-[317px] rounded-8xs-3 bg-darkslategray-300 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-[10.319066047668457px] border-[1.7px] border-solid border-background-dropdown-background-color">
                    <div className="w-[151px] relative hidden">
                      Your phone number
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[587px] h-[72px] my-0 mx-[!important] absolute right-[-171.5px] bottom-[-54.3px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border gap-[13px] z-[1]">
              <div className="relative font-medium">{`E-mail `}</div>
              <footer className="self-stretch flex-1 rounded-8xs-3 bg-darkslategray-300 overflow-hidden flex flex-row items-start justify-start p-[10.319066047668457px] text-left text-base text-butt3 font-space-grotesk border-[1.7px] border-solid border-background-dropdown-background-color">
                <div className="w-[151px] relative hidden">
                  Your phone number
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[393px] flex flex-row items-start justify-start py-0 pr-6 pl-5 box-border">
        <button className="cursor-pointer [border:none] p-2.5 bg-brand-primary-lightest flex-1 rounded flex flex-row items-center justify-center">
          <div className="relative text-sm font-medium font-space-grotesk text-darkslategray-300 text-left">
            BUY THE TICKETS
          </div>
        </button>
      </div>
    </div>
  );
};

export default PayMethodCreditCard;
