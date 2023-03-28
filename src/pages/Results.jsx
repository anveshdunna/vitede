import SelectionsBar from "../components/SelectionsBar";
import HotelFilters from "../components/HotelFilters";
import FlightFilters from "../components/FlightFilters";
import HotelCard from "../components/HotelCard";
import Leg from "../components/Leg";

// import Results from "../components/Results";

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

function Results(props) {
  return (
    <div className="bg-green-100-value h-screen w-full overflow-y-auto">
      <SelectionsBar>
        <Leg />
        <Leg />
        <Leg />
        <Leg />
      </SelectionsBar>
      <div className="xl:container xl:mx-auto bg-orange-100-value relative mx-10 flex flex-row justify-center">
        {<FlightFilters />}
        {<List />}
      </div>
    </div>
  );
}

export default Results;
