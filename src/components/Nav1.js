import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Nav1 = () => {
  const navigate = useNavigate();

  const onNavClick = useCallback(() => {
    navigate("/connect-wallet");
  }, [navigate]);

  const onBuyTicketsTextClick = useCallback(() => {
    navigate("/pay-methoddefault");
  }, [navigate]);

  const onCreateWalletText1Click = useCallback(() => {
    navigate("/pay-methodcreate-wallet");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='musicText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <header
      className="w-[828px] flex flex-row items-center justify-start gap-[26px] max-w-full cursor-pointer text-left text-sm text-butt3 font-space-grotesk mq900:hidden"
      onClick={onNavClick}
    >
      <h2 className="m-0 relative text-inherit [text-decoration:underline] font-bold font-inherit">
        Explore
      </h2>
      <div className="flex-1 flex flex-row items-center justify-start gap-[22px] max-w-full">
        <h2
          className="m-0 relative text-inherit font-normal font-inherit whitespace-nowrap cursor-pointer"
          onClick={onBuyTicketsTextClick}
        >
          Buy Tickets
        </h2>
        <h2
          className="m-0 relative text-inherit font-normal font-inherit whitespace-nowrap cursor-pointer"
          onClick={onCreateWalletText1Click}
        >
          Create wallet
        </h2>
        <h2 className="m-0 relative text-inherit font-normal font-inherit">
          Community
        </h2>
        <div className="flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-between pt-2 pb-[9px] pr-2.5 pl-[7px] relative gap-[20px] border-[1px] border-solid border-butt3">
          <input
            className="w-[34px] [border:none] [outline:none] font-space-grotesk text-3xs bg-[transparent] h-[13px] relative text-butt3 text-left inline-block"
            placeholder="Search"
            type="text"
          />
          <img
            className="h-[8.9px] w-[8.9px] relative"
            alt=""
            src="/vector.svg"
          />
          <img
            className="h-[2.4px] w-[2.4px] absolute my-0 mx-[!important] right-[9px] bottom-[11px] z-[1]"
            alt=""
            src="/vector-12.svg"
          />
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] pt-[9px] pb-2.5 pr-[26px] pl-[29px] bg-[transparent] rounded-8xs [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap"
        onClick={onButtonClick}
      >
        <b className="h-[21px] relative text-sm inline-block font-poppins text-butt3 text-left">
          Connect Wallet
        </b>
      </button>
    </header>
  );
};

export default Nav1;
