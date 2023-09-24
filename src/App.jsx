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
import CardsHome from "./pages/CardsHome";
import IssueCard from "./pages/IssueCard";
import IssuedCard from "./pages/IssuedCard";
import CardsCards from "./pages/CardsCards";
import CardsTransactions from "./pages/CardsTransactions";
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
import CardContextProvider from "./contexts/CardContext";

function Layout(props) {
  return (
    <div className={`flex text-gray-900`}>
      <NavContextProvider>
        <SelectionContextProvider>
          <CardContextProvider>
            <ScrollToTop>
              <GlobalNav />
              {props.children}
            </ScrollToTop>
          </CardContextProvider>
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
        components: {
          Table: {},
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
            <Route path="cards/overview" element={<CardsHome />} />
            <Route path="cards/issue-card" element={<IssueCard />} />
            <Route path="cards/issued-card" element={<IssuedCard />} />

            <Route path="cards/cards" element={<CardsCards />} />
            <Route path="cards/transactions" element={<CardsTransactions />} />

            <Route path="help" element={<Help />} />
            <Route path="notifications" element={<Notifications />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}

export default App;
