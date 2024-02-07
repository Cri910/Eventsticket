import { useCallback } from "react";
import MusicCards from "./MusicCards";
import { useNavigate } from "react-router-dom";

const OverallHeader = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-2 gap-[43px] shrink-0 text-left text-3xl text-background-dropdown-background-color font-space-grotesk mq450:gap-[43px]">
      <h3 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lg">
        Sport
      </h3>
      <MusicCards />
      <button
        className="cursor-pointer [border:none] pt-2 pb-[7px] pr-[37px] pl-[38px] bg-darkslategray-100 rounded-8xs overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray-100"
        onClick={onFrameButtonClick}
      >
        <div className="relative text-xs font-medium font-poppins text-background-dropdown-background-color text-left">
          View More
        </div>
      </button>
    </section>
  );
};

export default OverallHeader;
