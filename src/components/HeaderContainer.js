import MusicCards from "./MusicCards";

const HeaderContainer = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[7px] box-border gap-[33px] max-w-full shrink-0 text-left text-base text-background-dropdown-background-color font-dm-mono mq450:gap-[33px]">
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-3 box-border max-w-full shrink-0">
        <div className="w-[658px] flex flex-row items-start justify-center py-0 pr-px pl-0 box-border gap-[33px] max-w-full mq700:flex-wrap mq700:gap-[33px]">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border min-w-[94px] mq700:flex-1">
            <img
              className="self-stretch h-[50px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="eager"
              alt=""
              src="/imageremovebgpreview-6@2x.png"
            />
          </div>
          <img
            className="h-[50px] w-[135.7px] relative object-cover min-h-[50px]"
            loading="eager"
            alt=""
            src="/imageremovebgpreview-12-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border min-w-[94px] mq700:flex-1">
            <img
              className="self-stretch h-[50px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="eager"
              alt=""
              src="/imageremovebgpreview-13-1@2x.png"
            />
          </div>
          <img
            className="h-[50px] w-[135.7px] relative object-cover min-h-[50px]"
            loading="eager"
            alt=""
            src="/imageremovebgpreview-7-1@2x.png"
          />
        </div>
      </div>
      <div className="w-[153px] flex flex-col items-center justify-start gap-[36px] shrink-0">
        <div className="self-stretch relative font-medium text-transparent !bg-clip-text [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">
          Explore events
        </div>
        <h3
          className="m-0 h-7 relative text-3xl font-medium font-space-grotesk inline-block mq450:text-lg"
          data-scroll-to="musicText"
        >
          Music
        </h3>
      </div>
      <MusicCards />
    </section>
  );
};

export default HeaderContainer;
