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
import GlobalNav from "./components/GlobalNav";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";
import { useEffect } from "react";
import ConfirmDetails from "./pages/ConfirmDetails";
import { ConfigProvider } from "antd";
import SelectionContextProvider from "./contexts/SelectionContext";

function Layout(props) {
  return (
    <div className={`flex text-gray-900`}>
      <NavContextProvider>
        <SelectionContextProvider>
          <ScrollToTop>
            <GlobalNav />
            {props.children}
          </ScrollToTop>
        </SelectionContextProvider>
      </NavContextProvider>
    </div>
  );
}

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter",
        },
      }}
    >
      <Router>
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
            <Route path="travel/confirm-details" element={<ConfirmDetails />} />
            <Route path="expense/overview" element={<ExpenseHome />} />
            <Route path="expense/expenses" element={<ExpenseHome />} />
            <Route path="expense/reports" element={<ExpenseHome />} />
            <Route path="expense/approvals" element={<ExpenseHome />} />
            <Route path="help" element={<Help />} />
            <Route path="notifications" element={<Notifications />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
