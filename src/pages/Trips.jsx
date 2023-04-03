import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import TripCard from "../components/TripCard";

function Trips() {
  const navigate = useNavigate();
  const createTrip = () => navigate("/travel/create-trip");
  const alertnew = () => alert("hello");
  return (
    <div className="mx-4 flex-1 md:mx-10">
      <PageHeader title="Trips" cta="Create trip" ctafunction={createTrip} />
      <div>Trip tabs</div>
      <div>Trip filters</div>
      <div>Search and sort</div>
      <div>
        <ul className="flex flex-col items-stretch gap-4">
          {Array(15)
            .fill("")
            .map(function () {
              return <TripCard />;
            })}
        </ul>
      </div>
    </div>
  );
}

export default Trips;
