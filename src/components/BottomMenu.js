const BottomMenu = () => {
  return (
    <footer className="self-stretch flex flex-col items-start justify-start pt-5 px-0 pb-0 relative gap-[12px] text-left text-sm text-background-dropdown-background-color font-poppins">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[-0.4px] right-[0px] bottom-[0.4px] left-[0px] rounded-t-xl rounded-b-none [background:linear-gradient(180deg,_#1c233d,_rgba(125,_122,_216,_0))] shadow-[0px_-10px_20px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(30px)]" />
      <img
        className="w-8 h-8 absolute my-0 mx-[!important] top-[28.6px] right-[40px] overflow-hidden shrink-0 z-[1]"
        loading="eager"
        alt=""
        src="/icons8-account-11.svg"
      />
      <div className="w-[281px] flex flex-row items-start justify-start py-0 px-[30px] box-border">
        <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[17px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/icons8-star-1-1.svg"
              />
            </div>
            <b className="h-[21px] relative inline-block z-[1]">Featured</b>
          </div>
          <div className="flex flex-col items-start justify-start pt-0 pb-1 pr-[19px] pl-0">
            <img
              className="w-8 h-8 relative overflow-hidden shrink-0 z-[1]"
              loading="eager"
              alt=""
              src="/icons8-schedule-1-11.svg"
            />
          </div>
          <img
            className="h-[39px] w-[39px] relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
            src="/primeng-icons-v500wallet-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-[34px] relative z-[1]">
        <div className="absolute bottom-[8px] left-[calc(50%_-_66.5px)] rounded-81xl bg-darkslategray-200 w-[134px] h-[5px]" />
      </div>
    </footer>
  );
};

export default BottomMenu;
