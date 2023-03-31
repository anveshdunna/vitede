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
import NewTrip from "./pages/NewTrip";
import Results from "./pages/Results";
import Trips from "./pages/Trips";
import Events from "./pages/Events";
import Concierge from "./pages/Concierge";
import Approvals from "./pages/Approvals";
import Help from "./pages/Help";
import Notifications from "./pages/Notifications";
import AppNav from "./components/AppNav";
import NavContextProvider from "./contexts/NavContext";
import GlobalNav from "./components/GlobalNav";

function Layout(props) {
  return (
    <div className="flex h-screen min-h-screen w-screen flex-row items-stretch overflow-y-auto overflow-x-hidden bg-white text-gray-900">
      <NavContextProvider>
        <GlobalNav />
        {props.children}
      </NavContextProvider>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="travel/overview" element={<TravelHome />} />
          <Route path="travel/trips" element={<Trips />} />
          <Route path="travel/events" element={<Events />} />
          <Route path="travel/concierge" element={<Concierge />} />
          <Route path="travel/approvals" element={<Approvals />} />
          <Route path="travel/new-trip" element={<NewTrip />} />
          <Route path="results" element={<Results />} />
          <Route path="expense/overview" element={<ExpenseHome />} />
          <Route path="expense/expenses" element={<ExpenseHome />} />
          <Route path="expense/reports" element={<ExpenseHome />} />
          <Route path="expense/approvals" element={<ExpenseHome />} />
          <Route path="help" element={<Help />} />
          <Route path="notifications" element={<Notifications />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
