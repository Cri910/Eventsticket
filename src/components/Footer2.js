const Footer2 = () => {
  return (
    <div className="flex-1 flex flex-row items-end justify-between gap-[20px] max-w-full text-left text-8xl-4 text-background-dropdown-background-color font-poppins mq900:flex-wrap">
      <div className="flex flex-col items-start justify-start gap-[27px] min-w-[324px] max-w-full mq900:flex-1">
        <div className="flex flex-col items-start justify-start gap-[3px]">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="h-[89.7px] w-[60.2px] relative object-cover"
                loading="eager"
                alt=""
                src="/logo-1@2x.png"
              />
              <div className="h-[45.5px] relative tracking-[-0.02em] font-semibold inline-block mq450:text-3xl">
                <span>{`Chainblock `}</span>
                <span className="text-fuchsia">ART</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 text-smi">
            <h2 className="m-0 relative text-inherit font-medium font-inherit whitespace-pre-wrap">
              <p className="m-0">
                The only site that allows you to purchase tickets
              </p>
              <p className="m-0">{`to your favorite events through cryptocurrencies.        `}</p>
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-1 pb-[9px]">
          <img
            className="h-[31px] w-[173px] relative"
            loading="eager"
            alt=""
            src="/group-335181.svg"
          />
        </div>
        <h2 className="m-0 relative text-sm font-medium font-space-grotesk text-dimgray-200 whitespace-pre-wrap">
          Copyright 2022 More. All right reserved.
        </h2>
      </div>
      <div className="w-[437px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[50px] min-w-[436px] max-w-full text-base font-space-grotesk mq450:flex-wrap mq450:gap-[50px] mq700:min-w-full mq900:flex-1 mq900:pr-0 mq900:box-border">
        <div className="flex flex-col items-start justify-start gap-[7px] min-w-[121px] mq450:flex-1">
          <h1 className="m-0 relative text-xl font-bold font-inherit mq450:text-base">
            Marketplace
          </h1>
          <h1 className="m-0 relative text-inherit font-normal font-inherit">
            Explore
          </h1>
          <h1 className="m-0 relative text-inherit font-normal font-inherit">
            Events
          </h1>
          <h1 className="m-0 relative text-inherit font-normal font-inherit">
            Create wallet
          </h1>
          <h1 className="m-0 relative text-inherit font-normal font-inherit">
            Virtual Reality
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[47px] min-w-[172px] mq450:gap-[47px]">
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px]">
            <div className="flex flex-col items-center justify-start gap-[7px]">
              <h1 className="m-0 h-[26px] relative text-xl font-bold font-inherit inline-block mq450:text-base">
                Resources
              </h1>
              <h1 className="m-0 relative text-inherit font-normal font-inherit">
                Help Center
              </h1>
              <h1 className="m-0 relative text-inherit font-normal font-inherit">
                Partners
              </h1>
              <h1 className="m-0 relative text-inherit font-normal font-inherit">
                Blog
              </h1>
              <h1 className="m-0 relative text-inherit font-normal font-inherit">
                Newsletter
              </h1>
            </div>
            <div className="flex flex-col items-center justify-start gap-[7px]">
              <h1 className="m-0 relative text-xl font-bold font-inherit mq450:text-base">
                Company
              </h1>
              <h1 className="m-0 relative text-inherit font-normal font-inherit">
                About Us
              </h1>
              <h1 className="m-0 relative text-inherit font-normal font-inherit">
                Careers
              </h1>
              <h1 className="m-0 relative text-inherit font-normal font-inherit">
                Support
              </h1>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1">
                <h1 className="m-0 relative text-inherit font-normal font-inherit">{`Community `}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[31px] text-sm text-dimgray-200 mq450:gap-[31px]">
            <h2 className="m-0 relative text-inherit font-medium font-inherit">
              Privacy Policy
            </h2>
            <h2 className="m-0 relative text-inherit font-medium font-inherit">{`Terms & Conditions`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
