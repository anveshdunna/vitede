import { useNavigate } from "react-router-dom";
import { useNav } from "../contexts/NavContext";
import { useEffect } from "react";
import TripCard from "../components/TripCard";
import TripSteps from "../components/TripSteps";
import Page from "./Page";

function CreateTrip() {
  const navigate = useNavigate();
  return (
    <Page>
      <TripSteps sticky />
      {/* Section */}
      <div className="section" id="section">
        <div className="fixed-container">
          <div className="mx-4 flex flex-col gap-4">
            {Array(4)
              .fill("")
              .map(function () {
                return (
                  <div className="h-40 w-full rounded-xl bg-gray-100"> </div>
                );
              })}

            <button
              onClick={() => navigate("/travel/select-options")}
              className="rounded-lg bg-gray-900 px-4 py-4 text-white"
            >
              Select options
            </button>
            <button
              onClick={() => {
                document.getElementById("section").scrollIntoView();
                console.log("clicked");
              }}
            >
              go to top
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default CreateTrip;
