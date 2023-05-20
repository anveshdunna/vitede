import SelectionNav from "../components/SelectionNav";
import HotelFilters from "../components/HotelFilters";
import FlightFilters from "../components/FlightFilters";
import TripSteps from "../components/TripSteps";
import { useState, useEffect } from "react";
import Page from "./Page";
import { selectionNavData } from "../data/selectionNavData";
import ProductBlock from "../components/ProductBlock";
import { useSelection } from "../contexts/SelectionContext";
import HotelDetails from "../components/HotelDetails";

function SelectOptions(props) {
  // Getting hotel details context
  const { showHotel } = useSelection();

  // Define Selections Bar expand and collapse states
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

  // Define current active leg
  const [currentLeg, setCurrentLeg] = useState(0);
  const changeCurrentLeg = (index) => {
    setCurrentLeg(index);
  };

  return (
    <Page>
      <TripSteps />
      <SelectionNav
        changeExpand={changeExpandSelections}
        expand={expandSelections}
        queryData={selectionNavData}
        active={currentLeg}
        onClick={changeCurrentLeg}
      />
      <div className="section">
        <div className="fixed-container">
          <div className="mt-24 grid w-full grid-cols-4">
            {showHotel ? (
              <HotelDetails />
            ) : (
              <>
                <div className="mx-4 hidden basis-1/4 md:block">
                  {selectionNavData[currentLeg].travelMode === "flight" ? (
                    <FlightFilters />
                  ) : (
                    <HotelFilters />
                  )}
                </div>
                <ProductBlock
                  travelMode={selectionNavData[currentLeg].travelMode}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}

export default SelectOptions;
