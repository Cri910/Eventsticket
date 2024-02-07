import Button from "./Button";

const MusicCards = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start gap-[30px] shrink-0 grid-cols-[repeat(3,_minmax(214px,_1fr))] text-left text-lg text-background-dropdown-background-color font-space-grotesk mq450:grid-cols-[minmax(214px,_1fr)] mq900:justify-center mq900:grid-cols-[repeat(2,_minmax(214px,_372px))]">
      <div className="h-[345px] rounded-8xs bg-darkslategray-100 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[27px] box-border gap-[23px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[26px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[37px]">
              <div className="flex flex-col items-start justify-start">
                <b className="relative">{`Anastasia `}</b>
                <b className="relative text-sm">The new musical</b>
              </div>
              <Button />
            </div>
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-xs text-dimgray-200 font-dm-mono">
              <div className="relative">Price</div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1 text-sm text-background-dropdown-background-color">
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="h-2 w-2 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                  <div className="relative font-medium">1.90 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[345px] rounded-8xs bg-darkslategray-100 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[27px] box-border gap-[23px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[26px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[37px]">
              <div className="flex flex-col items-start justify-start">
                <b className="relative">{`Anastasia `}</b>
                <b className="relative text-sm">The new musical</b>
              </div>
              <Button />
            </div>
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-xs text-dimgray-200 font-dm-mono">
              <div className="relative">Price</div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1 text-sm text-background-dropdown-background-color">
                <div className="flex flex-row items-center justify-start gap-[7px]">
                  <img
                    className="h-2 w-2 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                  <div className="relative font-medium">1.90 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[345px] rounded-8xs bg-darkslategray-100 overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[27px] box-border gap-[23px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-2@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[18px] pl-[26px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[36px]">
              <div className="flex flex-col items-start justify-start">
                <b className="relative">{`Anastasia `}</b>
                <b className="relative text-sm">The new musical</b>
              </div>
              <Button />
            </div>
            <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-xs text-dimgray-200 font-dm-mono">
              <div className="relative">Price</div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1 text-sm text-background-dropdown-background-color">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="h-2 w-2 relative rounded-[50%] object-cover"
                    alt=""
                    src="/ellipse-6@2x.png"
                  />
                  <div className="relative font-medium">1.90 ETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCards;
