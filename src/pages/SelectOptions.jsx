import SelectionsBar from "../components/SelectionsBar";
import HotelFilters from "../components/HotelFilters";
import FlightFilters from "../components/FlightFilters";
import HotelCard from "../components/HotelCard";
import Leg from "../components/Leg";
import TripSteps from "../components/TripSteps";

function List(props) {
  return (
    <ul className="mx-10 flex basis-3/4 flex-col items-stretch gap-4">
      {Array(15)
        .fill("")
        .map(function () {
          return <HotelCard />;
        })}
    </ul>
  );
}

function SelectOptions(props) {
  return (
    <div className="flex flex-1 flex-col items-stretch bg-gray-50">
      <TripSteps />
      <SelectionsBar />

      <div className="xl:container xl:mx-auto bg-orange-100-value relative mx-10 flex flex-row justify-center">
        {<FlightFilters />}
        {<List />}{" "}
      </div>
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

export default SelectOptions;

// let divobjdect = {{<div className="bg-green-100-value h-screen w-full overflow-y-auto">
//       <SelectionsBar>
//         <Leg />
//         <Leg />
//         <Leg />
//         <Leg />
//       </SelectionsBar>
//       <div className="xl:container xl:mx-auto bg-orange-100-value relative mx-10 flex flex-row justify-center">
//         {<FlightFilters />}
//         {<List />}
//       </div>
//     </div>}}
