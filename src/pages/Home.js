import FrameComponent from "../components/FrameComponent";
import HeaderContainer from "../components/HeaderContainer";
import OverallHeader from "../components/OverallHeader";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-gray-300 flex flex-col items-center justify-start pt-8 pb-[61px] pr-[53px] pl-[54px] box-border gap-[59px] tracking-[normal] mq700:gap-[59px] mq700:pl-[27px] mq700:pr-[26px] mq700:box-border">
      <FrameComponent />
      <HeaderContainer />
      <OverallHeader />
      <Footer />
    </div>
  );
};

export default Home;
