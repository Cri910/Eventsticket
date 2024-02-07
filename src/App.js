import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Filter from "./pages/Filter";
import CreateWalletMobile from "./pages/CreateWalletMobile";
import EventDetails1 from "./pages/EventDetails1";
import SeeAllEvents from "./pages/SeeAllEvents";
import EventTicketsFeatured from "./pages/EventTicketsFeatured";
import WalletMob from "./pages/WalletMob";
import Desktop from "./pages/Desktop";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/event-details":
        title = "";
        metaDescription = "";
        break;
      case "/filter":
        title = "";
        metaDescription = "";
        break;
      case "/create-wallet-mobile":
        title = "";
        metaDescription = "";
        break;
      case "/event-details1":
        title = "";
        metaDescription = "";
        break;
      case "/see-all-events":
        title = "";
        metaDescription = "";
        break;
      case "/event-tickets-featured":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-mob":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/create-wallet-mobile" element={<CreateWalletMobile />} />
      <Route path="/event-details1" element={<EventDetails1 />} />
      <Route path="/see-all-events" element={<SeeAllEvents />} />
      <Route
        path="/event-tickets-featured"
        element={<EventTicketsFeatured />}
      />
      <Route path="/wallet-mob" element={<WalletMob />} />
      <Route path="/desktop-2" element={<Desktop />} />
    </Routes>
  );
}
export default App;
