import ConnectWallet from "./ConnectWallet";
import Crypto1 from "./Crypto1";

const Wallet = () => {
  return (
    <div className="w-[2339.1px] flex flex-row items-center justify-center tracking-[normal]">
      <section className="flex-1 bg-lightsteelblue flex flex-row items-start justify-start pt-[109px] px-[51px] pb-[168px] box-border gap-[91px] max-w-full mq1025:pt-[71px] mq1025:pb-[109px] mq1025:box-border mq450:pt-[46px] mq450:pb-[71px] mq450:box-border mq750:gap-[91px] mq1125:flex-wrap mq1125:gap-[91px] mq1125:pl-[25px] mq1125:pr-[25px] mq1125:box-border">
        <div className="h-[831.3px] w-[2339.1px] relative bg-lightsteelblue hidden max-w-full" />
        <ConnectWallet1 />
        <Crypto2 />
      </section>
    </div>
  );
};

export default Wallet;
