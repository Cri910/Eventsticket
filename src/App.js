import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import TicketDetails from "./pages/TicketDetails";
import TicketDetails1 from "./pages/TicketDetails1";
import Desktop from "./pages/Desktop";
import EventTicketsFeatured from "./pages/EventTicketsFeatured";
import EventDetails from "./pages/EventDetails";
import EventDetails1 from "./pages/EventDetails1";
import SeeAllEvents from "./pages/SeeAllEvents";
import Filter from "./pages/Filter";
import WalletMob from "./pages/WalletMob";
import CreateWalletMobile from "./pages/CreateWalletMobile";

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
      case "/ticket-details":
        title = "";
        metaDescription = "";
        break;
      case "/ticket-details1":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
      case "/event-tickets-featured":
        title = "";
        metaDescription = "";
        break;
      case "/event-details":
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
      case "/filter":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-mob":
        title = "";
        metaDescription = "";
        break;
      case "/create-wallet-mobile":
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
      <Route path="/ticket-details" element={<TicketDetails />} />
      <Route path="/ticket-details1" element={<TicketDetails1 />} />
      <Route path="/desktop-2" element={<Desktop />} />
      <Route
        path="/event-tickets-featured"
        element={<EventTicketsFeatured />}
      />
      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/event-details1" element={<EventDetails1 />} />
      <Route path="/see-all-events" element={<SeeAllEvents />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/wallet-mob" element={<WalletMob />} />
      <Route path="/create-wallet-mobile" element={<CreateWalletMobile />} />
    </Routes>
  );
}
export default App;
