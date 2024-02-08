import { useMemo } from "react";
import LogoCBART from "./LogoCBART";

const Footer = ({
  logo1,
  group33518,
  propFlex,
  propAlignSelf,
  propPadding,
  propMargin,
  propMargin1,
  propPadding1,
  propMargin2,
  propFontWeight,
  propMargin3,
  propFontWeight1,
  propMargin4,
  propFontWeight2,
  propMargin5,
  propFontWeight3,
  propPadding2,
  propMargin6,
  propFontWeight4,
  propMargin7,
  propFontWeight5,
  propMargin8,
  propFontWeight6,
  propMargin9,
  propFontWeight7,
  propMargin10,
  propFontWeight8,
  propMargin11,
  propFontWeight9,
  propMargin12,
  propFontWeight10,
  propMargin13,
  propFontWeight11,
  propMargin14,
  propMargin15,
}) => {
  const footerStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propFlex, propAlignSelf, propPadding]);

  const theOnlySiteContainerStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const copyright2022MoreStyle = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const exploreEventsCreateWalletVStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const exploreStyle = useMemo(() => {
    return {
      margin: propMargin2,
      fontWeight: propFontWeight,
    };
  }, [propMargin2, propFontWeight]);

  const eventsStyle = useMemo(() => {
    return {
      margin: propMargin3,
      fontWeight: propFontWeight1,
    };
  }, [propMargin3, propFontWeight1]);

  const createWalletStyle = useMemo(() => {
    return {
      margin: propMargin4,
      fontWeight: propFontWeight2,
    };
  }, [propMargin4, propFontWeight2]);

  const virtualRealityStyle = useMemo(() => {
    return {
      margin: propMargin5,
      fontWeight: propFontWeight3,
    };
  }, [propMargin5, propFontWeight3]);

  const frameDiv4Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const helpCenterStyle = useMemo(() => {
    return {
      margin: propMargin6,
      fontWeight: propFontWeight4,
    };
  }, [propMargin6, propFontWeight4]);

  const partnersStyle = useMemo(() => {
    return {
      margin: propMargin7,
      fontWeight: propFontWeight5,
    };
  }, [propMargin7, propFontWeight5]);

  const blogStyle = useMemo(() => {
    return {
      margin: propMargin8,
      fontWeight: propFontWeight6,
    };
  }, [propMargin8, propFontWeight6]);

  const newsletterStyle = useMemo(() => {
    return {
      margin: propMargin9,
      fontWeight: propFontWeight7,
    };
  }, [propMargin9, propFontWeight7]);

  const aboutUsStyle = useMemo(() => {
    return {
      margin: propMargin10,
      fontWeight: propFontWeight8,
    };
  }, [propMargin10, propFontWeight8]);

  const careersStyle = useMemo(() => {
    return {
      margin: propMargin11,
      fontWeight: propFontWeight9,
    };
  }, [propMargin11, propFontWeight9]);

  const supportStyle = useMemo(() => {
    return {
      margin: propMargin12,
      fontWeight: propFontWeight10,
    };
  }, [propMargin12, propFontWeight10]);

  const communityStyle = useMemo(() => {
    return {
      margin: propMargin13,
      fontWeight: propFontWeight11,
    };
  }, [propMargin13, propFontWeight11]);

  const privacyPolicyStyle = useMemo(() => {
    return {
      margin: propMargin14,
    };
  }, [propMargin14]);

  const termsConditionsStyle = useMemo(() => {
    return {
      margin: propMargin15,
    };
  }, [propMargin15]);

  return (
    <div
      className="flex-1 flex flex-row items-end justify-between gap-[20px] max-w-full text-left text-8xl-4 text-background-dropdown-background-color font-poppins mq900:flex-wrap"
      style={footerStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[27px] min-w-[324px] max-w-full mq900:flex-1">
        <div className="flex flex-col items-start justify-start gap-[3px]">
          <LogoCBART logo1="/logo-1@2x.png" />
          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1 text-smi">
            <h2
              className="m-0 relative text-inherit font-medium font-inherit whitespace-pre-wrap"
              style={theOnlySiteContainerStyle}
            >
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
            src={group33518}
          />
        </div>
        <h2
          className="m-0 relative text-sm font-medium font-space-grotesk text-dimgray-200 whitespace-pre-wrap"
          style={copyright2022MoreStyle}
        >
          Copyright 2022 More. All right reserved.
        </h2>
      </div>
      <div
        className="w-[437px] flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[50px] min-w-[436px] max-w-full text-base font-space-grotesk mq450:flex-wrap mq450:gap-[50px] mq700:min-w-full mq900:flex-1 mq900:pr-0 mq900:box-border"
        style={exploreEventsCreateWalletVStyle}
      >
        <div className="flex flex-col items-start justify-start gap-[7px] min-w-[121px] mq450:flex-1">
          <h1 className="m-0 relative text-xl font-bold font-inherit mq450:text-base">
            Marketplace
          </h1>
          <h1
            className="m-0 relative text-inherit font-normal font-inherit"
            style={exploreStyle}
          >
            Explore
          </h1>
          <h1
            className="m-0 relative text-inherit font-normal font-inherit"
            style={eventsStyle}
          >
            Events
          </h1>
          <h1
            className="m-0 relative text-inherit font-normal font-inherit"
            style={createWalletStyle}
          >
            Create wallet
          </h1>
          <h1
            className="m-0 relative text-inherit font-normal font-inherit"
            style={virtualRealityStyle}
          >
            Virtual Reality
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[47px] min-w-[172px] mq450:gap-[47px]">
          <div
            className="self-stretch flex flex-row items-start justify-between py-0 pr-px pl-0 gap-[20px]"
            style={frameDiv4Style}
          >
            <div className="flex flex-col items-center justify-start gap-[7px]">
              <h1 className="m-0 h-[26px] relative text-xl font-bold font-inherit inline-block mq450:text-base">
                Resources
              </h1>
              <h1
                className="m-0 relative text-inherit font-normal font-inherit"
                style={helpCenterStyle}
              >
                Help Center
              </h1>
              <h1
                className="m-0 relative text-inherit font-normal font-inherit"
                style={partnersStyle}
              >
                Partners
              </h1>
              <h1
                className="m-0 relative text-inherit font-normal font-inherit"
                style={blogStyle}
              >
                Blog
              </h1>
              <h1
                className="m-0 relative text-inherit font-normal font-inherit"
                style={newsletterStyle}
              >
                Newsletter
              </h1>
            </div>
            <div className="flex flex-col items-center justify-start gap-[7px]">
              <h1 className="m-0 relative text-xl font-bold font-inherit mq450:text-base">
                Company
              </h1>
              <h1
                className="m-0 relative text-inherit font-normal font-inherit"
                style={aboutUsStyle}
              >
                About Us
              </h1>
              <h1
                className="m-0 relative text-inherit font-normal font-inherit"
                style={careersStyle}
              >
                Careers
              </h1>
              <h1
                className="m-0 relative text-inherit font-normal font-inherit"
                style={supportStyle}
              >
                Support
              </h1>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-1">
                <h1
                  className="m-0 relative text-inherit font-normal font-inherit"
                  style={communityStyle}
                >{`Community `}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[31px] text-sm text-dimgray-200 mq450:gap-[31px]">
            <h2
              className="m-0 relative text-inherit font-medium font-inherit"
              style={privacyPolicyStyle}
            >
              Privacy Policy
            </h2>
            <h2
              className="m-0 relative text-inherit font-medium font-inherit"
              style={termsConditionsStyle}
            >{`Terms & Conditions`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
