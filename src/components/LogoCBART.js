const LogoCBART = ({ logo1 }) => {
  return (
    <div className="flex flex-row items-center justify-center text-left text-8xl-4 text-background-dropdown-background-color font-poppins">
      <div className="flex flex-row items-center justify-start gap-[13px]">
        <img
          className="h-[89.7px] w-[60.2px] relative object-cover"
          loading="eager"
          alt=""
          src={logo1}
        />
        <div className="h-[45.5px] relative tracking-[-0.02em] font-semibold inline-block mq450:text-3xl">
          <span>{`Chainblock `}</span>
          <span className="text-fuchsia">ART</span>
        </div>
      </div>
    </div>
  );
};

export default LogoCBART;
