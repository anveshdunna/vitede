import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import TravelHome from "./pages/TravelHome";
import ExpenseHome from "./pages/ExpenseHome";
import CreateTrip from "./pages/CreateTrip";
import SelectOptions from "./pages/SelectOptions";
import Trips from "./pages/Trips";
import Events from "./pages/Events";
import Concierge from "./pages/Concierge";
import Approvals from "./pages/Approvals";
import Help from "./pages/Help";
import Notifications from "./pages/Notifications";
import NavContextProvider from "./contexts/NavContext";
import ScrollContextProvider from "./contexts/ScrollContext";
import { useScroll } from "./contexts/ScrollContext";
import GlobalNav from "./components/GlobalNav";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";
import { useEffect } from "react";

function Layout(props) {
  const { scrollDisabled, setScrollDisabled } = useScroll();

  return (
    <div
      className={`flex h-screen min-h-screen flex-row bg-gray-50 text-gray-900`}
    >
      <NavContextProvider>
        <ScrollToTop>
          <GlobalNav />
          {props.children}
        </ScrollToTop>
      </NavContextProvider>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollContextProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="travel/overview" element={<TravelHome />} />
            <Route path="travel/trips" element={<Trips />} />
            <Route path="travel/events" element={<Events />} />
            <Route path="travel/concierge" element={<Concierge />} />
            <Route path="travel/approvals" element={<Approvals />} />
            <Route path="travel/create-trip" element={<CreateTrip />} />
            <Route path="travel/select-options" element={<SelectOptions />} />
            <Route path="expense/overview" element={<ExpenseHome />} />
            <Route path="expense/expenses" element={<ExpenseHome />} />
            <Route path="expense/reports" element={<ExpenseHome />} />
            <Route path="expense/approvals" element={<ExpenseHome />} />
            <Route path="help" element={<Help />} />
            <Route path="notifications" element={<Notifications />} />
          </Routes>
        </Layout>
      </ScrollContextProvider>
    </Router>
  );
}

export default App;
