import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const onNavClick = useCallback(() => {
    navigate("/connect-wallet");
  }, [navigate]);

  const onBuyTicketsTextClick = useCallback(() => {
    navigate("/pay-methoddefault");
  }, [navigate]);

  const onCreateWalletTextClick = useCallback(() => {
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
      className="w-[830px] flex flex-row items-center justify-start gap-[26px] max-w-full cursor-pointer text-left text-sm text-butt3 font-space-grotesk mq900:hidden"
      onClick={onNavClick}
    >
      <b className="relative [text-decoration:underline]">Explore</b>
      <div className="flex-1 flex flex-row items-center justify-start gap-[22px] max-w-full">
        <div
          className="relative whitespace-nowrap cursor-pointer"
          onClick={onBuyTicketsTextClick}
        >
          Buy Tickets
        </div>
        <div
          className="relative whitespace-nowrap cursor-pointer"
          onClick={onCreateWalletTextClick}
        >
          Create wallet
        </div>
        <div className="relative">Community</div>
        <div className="flex-1 rounded-8xs overflow-hidden flex flex-row items-start justify-between pt-2 pb-[9px] pr-[9px] pl-[7px] gap-[20px] border-[1px] border-solid border-butt3">
          <input
            className="w-[34px] [border:none] [outline:none] font-space-grotesk text-3xs bg-[transparent] h-[13px] relative text-butt3 text-left inline-block"
            placeholder="Search"
            type="text"
          />
          <div className="h-2.5 w-2.5 relative">
            <img
              className="absolute top-[0.4px] left-[-0.5px] w-[8.9px] h-[8.9px]"
              alt=""
              src="/anastasia-card.svg"
            />
            <img
              className="absolute top-[8px] left-[7.1px] w-[2.4px] h-[2.4px]"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] pt-[9px] pb-2.5 pr-[25px] pl-[29px] bg-[transparent] rounded-8xs [background:linear-gradient(85.76deg,_rgba(191,_196,_238,_0.09)_15.52%,_#c367e6_58.75%,_rgba(190,_206,_239,_0))] overflow-hidden flex flex-row items-center justify-center whitespace-nowrap"
        onClick={onButtonClick}
      >
        <b className="h-[21px] relative text-sm inline-block font-poppins text-butt3 text-left">
          Connect Wallet
        </b>
      </button>
    </header>
  );
};

export default Nav;
