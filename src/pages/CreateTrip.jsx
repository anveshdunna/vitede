import { useNavigate } from "react-router-dom";
import { useNav } from "../contexts/NavContext";
import { useEffect } from "react";
import TripCard from "../components/TripCard";
import TripSteps from "../components/TripSteps";

function CreateTrip() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-1 flex-col items-stretch bg-gray-50">
      <TripSteps />
      {/* Section */}
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4 lg:w-[1320px]">
          <div className="h-40 w-full rounded-xl bg-gray-100"> </div>
          <div className="h-40 w-full rounded-xl bg-gray-100"> </div>
          <div className="h-40 w-full rounded-xl bg-gray-100"> </div>
        </div>

        <button
          onClick={() => navigate("/travel/select-options")}
          className="rounded-lg bg-gray-900 px-4 py-4 text-white"
        >
          Select options
        </button>
      </div>
    </div>
  );
}

export default CreateTrip;
