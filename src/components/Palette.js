const Palette = () => {
  return (
    <footer className="w-[734px] rounded-8xs box-border overflow-hidden flex flex-row items-start justify-between pt-[51px] pb-[31px] pr-[9px] pl-[31px] text-left text-11xl text-silver-100 font-poppins border-[1px] border-solid border-blueviolet-100">
      <div className="h-[217px] w-[152px] flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[26px]">
        <div className="self-stretch flex-1 relative rounded-[50%] bg-gray-300" />
        <div className="h-[39.5px] relative inline-block shrink-0">#1C233D</div>
      </div>
      <div className="h-[220px] w-[155px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[26px]">
        <div className="self-stretch flex-1 relative rounded-[50%] bg-darkslategray-100" />
        <div className="self-stretch h-[42.4px] relative inline-block shrink-0">
          #30384D
        </div>
      </div>
      <div className="h-[218px] w-[163px] flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex-1 relative rounded-[50%] bg-mediumorchid-100" />
        <div className="self-stretch h-[42.4px] relative inline-block shrink-0">
          #BF68E2
        </div>
      </div>
    </footer>
  );
};

export default Palette;
