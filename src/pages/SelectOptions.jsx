import SelectionsBar from "../components/SelectionsBar";
import HotelFilters from "../components/HotelFilters";
import FlightFilters from "../components/FlightFilters";
import HotelCard from "../components/HotelCard";
import Leg from "../components/SelectionNavItem";
import TripSteps from "../components/TripSteps";
import SelectionNavItem from "../components/SelectionNavItem";
import { useState } from "react";
import { useScroll } from "../contexts/ScrollContext";

function List(props) {
  return (
    <ul className="flex flex-col items-stretch gap-4">
      {Array(15)
        .fill("")
        .map(function () {
          return <HotelCard />;
        })}
    </ul>
  );
}

function SelectOptions(props) {
  const { scrollDisabled, setScrollDisabled } = useScroll();
  const [expandSelections, setExpandSelections] = useState(false);
  const changeExpandSelections = () => {
    setExpandSelections(!expandSelections);
  };

  if (expandSelections == true) {
    setScrollDisabled(true);
    console.log(scrollDisabled);
  } else {
    setScrollDisabled(false);
  }

  return (
    <div className="page" id="page">
      <TripSteps />
      <SelectionsBar
        changeExpand={changeExpandSelections}
        expand={expandSelections}
      >
        <div className="flex gap-3">
          <SelectionNavItem expand={expandSelections} />
          <SelectionNavItem expand={expandSelections} />
          <SelectionNavItem expand={expandSelections} />
          <SelectionNavItem expand={expandSelections} />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-0">
            <div className="text-body1">
              Total <span className="font-semibold">$400</span>
            </div>
            <button className="text-caption1" onClick={changeExpandSelections}>
              View selection
            </button>
          </div>
          <button
            onClick={changeExpandSelections}
            className="rounded-lg bg-gray-900 px-4 py-4 text-white"
          >
            Proceed
          </button>
        </div>
      </SelectionsBar>
      <div className="section">
        <div className="fixed-container">
          <div className="flex">
            <div className="mx-4 hidden basis-1/4 md:block">
              <FlightFilters />
            </div>
            <div className="mx-4 basis-full md:basis-3/4">
              <List />
            </div>
          </div>
          Container
        </div>
      </div>
    </div>
  );
}

export default SelectOptions;
