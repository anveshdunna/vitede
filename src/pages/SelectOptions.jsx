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
import ProductList from "../components/ProductList";
import ILButton from "../components/core/ILButton";
import ILSelect from "../components/core/ILSelect";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <Page>
      <TripSteps />
      <SelectionsBar
        changeExpand={changeExpandSelections}
        expand={expandSelections}
      >
        <div className="inline-flex gap-3 overflow-clip">
          <SelectionNavItem expand={expandSelections} />
          <SelectionNavItem expand={expandSelections} />
          <SelectionNavItem expand={expandSelections} />
          <SelectionNavItem expand={expandSelections} />
        </div>
        <div className="flex flex-none items-center gap-4">
          <div className="flex flex-col gap-0">
            <div className="text-body1">
              Total <span className="font-semibold">$400</span>
            </div>
            {/* <div>{scrollDistance}</div> */}
            <button className="text-caption1" onClick={changeExpandSelections}>
              View selection
            </button>
          </div>
          <ILButton
            onClick={() => navigate("/travel/confirm-details")}
            variant="secondary"
          >
            Proceed
          </ILButton>
        </div>
      </SelectionsBar>
      <div className="section">
        <div className="fixed-container">
          <div className="mt-[108px] grid w-full grid-cols-4">
            <div className="mx-4 hidden basis-1/4 pt-4 md:block">
              <HotelFilters />
            </div>
            <div className="col-span-4 mx-4 flex basis-full flex-col pt-3 md:col-span-3">
              <div className="self-end text-caption1">
                Fares expire in{" "}
                <span className="font-medium text-yellow-500">9m 48s</span>
              </div>
              <div className="my-4 flex flex-col-reverse items-center justify-between text-body2 sm:flex-row">
                <div>
                  Showing <span className="font-semibold">200</span> of{" "}
                  <span className="font-semibold">220</span> hotels
                </div>
                <div>
                  <span className="mr-1 font-medium">Sort by</span>
                  <ILSelect
                    defaultValue="lucy"
                    style={{
                      width: 120,
                    }}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                      {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                      },
                    ]}
                  />
                </div>
              </div>
              <ProductList />
              <div className="mt-40">End of list</div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default SelectOptions;
