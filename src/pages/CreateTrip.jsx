import { useNavigate } from "react-router-dom";
import { useNav } from "../contexts/NavContext";
import { useEffect } from "react";
import TripCard from "../components/TripCard";
import TripSteps from "../components/TripSteps";
import Page from "./Page";
import ILButton from "../components/core/ILButton";

function CreateTrip() {
  const navigate = useNavigate();
  return (
    <Page>
      <TripSteps sticky />
      {/* Section */}
      <div className="section" id="section">
        <div className="fixed-container">
          <div className="mx-4 my-4 flex flex-col gap-4">
            <div className="h-40 w-full rounded-xl bg-gray-100 p-4 text-title3 font-semibold text-gray-500">
              This is a placeholder section.
              <div className="text-body2 font-normal">
                Click on the 'Select options' button to proceed.
              </div>
            </div>
            {/* {Array(6)
              .fill("")
              .map(function () {
                return (
                  <div className="h-40 w-full rounded-xl bg-gray-100"> </div>
                );
              })} */}
            <div>
              <ILButton
                onClick={() => navigate("/travel/select-options")}
                variant="secondary"
              >
                Select options
              </ILButton>
            </div>

            {/* <button
              onClick={() => {
                document.getElementById("section").scrollIntoView();
                console.log("clicked");
              }}
            >
              go to top
            </button> */}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default CreateTrip;
