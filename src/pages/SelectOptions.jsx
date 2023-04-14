import SelectionsBar from "../components/SelectionsBar";
import HotelFilters from "../components/HotelFilters";
import FlightFilters from "../components/FlightFilters";
import HotelCard from "../components/HotelCard";
import Leg from "../components/SelectionNavItem";
import TripSteps from "../components/TripSteps";
import SelectionNavItem from "../components/SelectionNavItem";
import { useState, useEffect } from "react";
import { useScroll } from "../contexts/ScrollContext";
import Page from "./Page";

function List(props) {
  return (
    <ul className="flex flex-col items-stretch gap-4">
      <HotelCard recommended />
      <HotelCard recommended />
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
  const setExpandSelectionsFalse = () => {
    setExpandSelections(false);
  };

  //Find scrolldistance
  const [scrollDistance, setScrollDistance] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollDistance(scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", setExpandSelectionsFalse);
    return () => {
      window.removeEventListener("scroll", setExpandSelectionsFalse);
    };
  }, []);

  return (
    <Page>
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
            <div>{scrollDistance}</div>
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
          <div className="mt-[108px] flex">
            <div className="mx-4 hidden basis-1/4 pt-4 md:block">
              <FlightFilters />
            </div>
            <div className="mx-4 flex basis-full flex-col pt-3 md:basis-3/4">
              <div className="self-end text-caption1">
                Fares expire in{" "}
                <span className="font-medium text-yellow-500">9m 48s</span>
              </div>
              <div className="my-4 flex justify-between text-body2">
                <div>
                  Showing <span className="font-semibold">200</span> of{" "}
                  <span className="font-semibold">220</span> hotels
                </div>
                <div className="font-medium">Sort by Recommended</div>
              </div>
              <List />
            </div>
          </div>
          Container
        </div>
      </div>
    </Page>
  );
}

export default SelectOptions;
