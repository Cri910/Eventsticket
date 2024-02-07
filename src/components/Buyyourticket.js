const Buyyourticket = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border gap-[58px] max-w-full text-left text-17xl text-background-dropdown-background-color font-space-grotesk mq450:gap-[58px]">
      <h1 className="m-0 w-[450px] h-[46px] relative text-inherit font-medium font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq450:text-3xl mq900:text-10xl">
        Buy your ticket in 3 clicks
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0 gap-[19px] text-mini font-dm-mono mq900:flex-wrap">
        <div className="flex-1 rounded-8xs bg-darkslategray-100 overflow-hidden flex flex-col items-center justify-start pt-[21px] pb-7 pr-3 pl-[13px] box-border gap-[15px] min-w-[216px]">
          <img
            className="w-[83px] h-[84px] relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/calendar-9234242-1.svg"
          />
          <h2 className="m-0 relative text-inherit font-medium font-inherit">
            Choose the event
          </h2>
          <div className="relative text-3xs font-medium font-poppins text-center">
            <p className="m-0">Search for the event you want to</p>
            <p className="m-0">participate in among all those on the site.</p>
            <p className="m-0">Click on it and choose the payment method:</p>
            <p className="m-0">
              {" "}
              Crypto or Credit Card. If you choose to pay by card,
            </p>
            <p className="m-0">
              proceed with entering your data and purchasing.
            </p>
          </div>
        </div>
        <div className="flex-[0.9582] rounded-8xs bg-darkslategray-100 overflow-hidden flex flex-col items-center justify-start pt-[122px] pb-[22px] pr-3.5 pl-[22px] box-border relative gap-[17px] min-w-[216px] mq450:flex-1">
          <h2 className="m-0 relative text-inherit font-medium font-inherit">
            Create or connect the wallet
          </h2>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-1 text-center text-3xs font-space-grotesk">
            <div className="relative font-medium whitespace-pre-wrap">
              <p className="m-0">If you choose cryptocurrencies as your</p>
              <p className="m-0">payment method, you have two options:</p>
              <p className="m-0">{`connect your wallet or, if you don't have one, `}</p>
              <p className="m-0">create one quickly and easily.</p>
              <p className="m-0">
                You just have to copy and paste the info of your
              </p>
              <p className="m-0">new wallet and you're done!</p>
            </div>
          </div>
          <img
            className="w-[84px] h-[84px] absolute my-0 mx-[!important] top-[21px] left-[calc(50%_-_42.5px)] overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/wallet-10141565-1.svg"
          />
        </div>
        <div className="flex-[0.692] rounded-8xs bg-darkslategray-100 overflow-hidden flex flex-col items-center justify-start pt-[17px] px-[53px] pb-[51px] box-border gap-[15px] min-w-[216px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
          <img
            className="w-[88px] h-[88px] relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/ticket-6030231-1.svg"
          />
          <h2 className="m-0 relative text-inherit font-medium font-inherit">
            Enjoy the event
          </h2>
          <div className="relative text-3xs font-medium font-space-grotesk text-center">
            <p className="m-0">Once payment has been made,</p>
            <p className="m-0">you will receive a confirmation email</p>
            <p className="m-0">and your ticket for the event.</p>
            <p className="m-0">Don't forget to leave us a nice review!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyyourticket;
