import Icon from "../assets/Icon";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Page from "./Page";

function TravelHome() {
  const navigate = useNavigate();
  return (
    <Page>
      <PageHeader title="Overview" />

      <div>This is the home page.</div>
      <button onClick={() => navigate("/travel/create-trip")}>
        Create trip
      </button>

      <div className="flex flex-col">
        <div className="h-72 w-96 bg-orange-100"></div>
        <div className="h-72 w-96 bg-blue-100"></div>
        <div className="h-72 w-96 bg-green-100"></div>
        <div className="h-72 w-96 bg-yellow-100"></div>
        <div className="h-72 w-96 bg-red-100"></div>
      </div>
    </Page>
  );
}

export default TravelHome;
