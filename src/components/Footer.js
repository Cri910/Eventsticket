import LogoCBART from "./LogoCBART";

const Footer = () => {
  return (
    <footer className="self-stretch flex flex-row items-end justify-between py-0 px-2.5 box-border gap-[20px] max-w-full shrink-0 text-left text-smi text-background-dropdown-background-color font-poppins mq900:flex-wrap">
      <div className="flex flex-col items-start justify-start gap-[27px] min-w-[324px] max-w-full mq900:flex-1">
        <div className="flex flex-col items-start justify-start gap-[3px]">
          <LogoCBART1 />
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1">
            <div className="relative font-medium whitespace-pre-wrap">
              <p className="m-0">
                The only site that allows you to purchase tickets
              </p>
              <p className="m-0">{`to your favorite events through cryptocurrencies.        `}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 px-1 pb-[9px]">
          <img
            className="h-[31px] w-[173px] relative"
            loading="eager"
            alt=""
            src="/group-33518.svg"
          />
        </div>
        <div className="relative text-sm font-medium font-space-grotesk text-dimgray-200 whitespace-pre-wrap">
          Copyright 2022 More. All right reserved.
        </div>
      </div>
      <div className="w-[438px] flex flex-row items-start justify-start gap-[52px] min-w-[438px] max-w-full text-base font-space-grotesk mq450:flex-wrap mq450:gap-[52px] mq700:min-w-full mq900:flex-1">
        <div className="flex flex-col items-start justify-start gap-[7px] min-w-[121px] mq450:flex-1">
          <h3 className="m-0 relative text-xl font-bold font-inherit mq450:text-base">
            Marketplace
          </h3>
          <div className="relative">Explore</div>
          <div className="relative">Events</div>
          <div className="relative">Create wallet</div>
          <div className="relative">Virtual Reality</div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[47px] min-w-[172px] mq450:gap-[47px]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-col items-center justify-start gap-[7px]">
              <h3 className="m-0 h-[26px] relative text-xl font-bold font-inherit inline-block mq450:text-base">
                Resources
              </h3>
              <div className="relative">Help Center</div>
              <div className="relative">Partners</div>
              <div className="relative">Blog</div>
              <div className="relative">Newsletter</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[7px]">
              <h3 className="m-0 relative text-xl font-bold font-inherit mq450:text-base">
                Company
              </h3>
              <div className="relative">About Us</div>
              <div className="relative">Careers</div>
              <div className="relative">Support</div>
              <div className="flex flex-row items-start justify-start py-0 pr-px pl-1">
                <div className="relative">{`Community `}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[31px] text-sm text-dimgray-200 mq450:gap-[31px]">
            <div className="relative font-medium">Privacy Policy</div>
            <div className="relative font-medium">{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
