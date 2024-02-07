import FrameComponent from "../components/FrameComponent";
import HeaderContainer from "../components/HeaderContainer";
import OverallHeader from "../components/OverallHeader";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <FrameComponent />
      <HeaderContainer />
      <OverallHeader />
      <Footer />
    </div>
  );
};

export default Home;
