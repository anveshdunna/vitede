import RecommendedToggle from "./RecommendedToggle";
import ILCheckbox from "./core/ILCheckbox";
import ILTag from "./core/ILTag";
import ILChip from "./core/ILChip";
import ILSlider from "./core/ILSlider";
import { useState } from "react";
import { minutesToHoursMinutes } from "../utils";
import { Tag } from "antd";
import FilterLayout, { FilterSection, FiltersHeader } from "./FilterLayout";

const FlightDuration = (props) => {
  const { initialMinDuration, initialMaxDuration } = props;
  const [minDuration, setMinDuration] = useState(initialMinDuration);
  const [maxDuration, setMaxDuration] = useState(initialMaxDuration);

  const duration = minutesToHoursMinutes;
  const formatter = (value) => duration(value);
  const changeDuration = (value) => {
    const [min, max] = value;
    setMinDuration(min);
    setMaxDuration(max);
  };

  return (
    <>
      <div>
        {duration(minDuration)} – {duration(maxDuration)}
      </div>
      <ILSlider
        range
        step={60}
        min={initialMinDuration}
        max={initialMaxDuration}
        defaultValue={[initialMinDuration, initialMaxDuration]}
        onChange={changeDuration}
        tooltip={{ formatter: null }}
      />
    </>
  );
};

const FlightTimes = (props) => {};

function FlightFilters() {
  return (
    <FilterLayout>
      <FiltersHeader appliedFilters={appliedFilters} />
      <RecommendedToggle />
      <FilterSection>
        {commonFlightFilters.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
      </FilterSection>
      <FilterSection title="Stops">
        {stops.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
      </FilterSection>
      <FilterSection title="Cabin class">
        {cabinClasses.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
      </FilterSection>
      <FilterSection title="Flight times">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-caption1 font-medium">Departure</div>
            <FlightDuration
              initialMinDuration={640}
              initialMaxDuration={1805}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-caption1 font-medium">Arrival</div>
            <FlightDuration
              initialMinDuration={640}
              initialMaxDuration={1805}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-caption1 font-medium">Duration</div>
            <FlightDuration
              initialMinDuration={640}
              initialMaxDuration={1805}
            />
          </div>
        </div>

        {/* <FlightDuration initialMinDuration={640} initialMaxDuration={1805} /> */}
      </FilterSection>
      <FilterSection title="Airlines">
        {airlines.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
      </FilterSection>
      <FilterSection title="Airports">
        {airports.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
      </FilterSection>
    </FilterLayout>
  );
}

const commonFlightFilters = ["In-policy only", "Refundable fares"];

const stops = ["Nonstop", "1 stop", "2+ stops"];

const cabinClasses = ["Economy", "Premium economy", "Business", "First class"];

const airlines = [
  "Alaska Airlines",
  "American Airlines",
  "Delta Airlines",
  "JetBlue Airways",
  "Spirit Airlines",
  "United Airlines",
];

const airports = [
  "LHR - London Heathrow Airport",
  "LGW - London Gatwick Airport",
  "LCY - London City Airport",
];

const guestRatings = [];

const appliedFilters = [
  "Upto 1 stop",
  "Economy",
  "Aer Lingus",
  "Air France",
  "American Airlines",
  "Austrian Airlines",
  "British Airways",
  "Brussels Airlines",
  "Delta Air Lines",
  "Finnair",
  "Upto 1 stop",
  "Economy",
  "Aer Lingus",
  "Air France",
  "American Airlines",
  "Austrian Airlines",
  "British Airways",
  "Brussels Airlines",
  "Delta Air Lines",
  "Finnair",
];

export default FlightFilters;

// // Backup
// const FlightDuration = (props) => {
//   const { initialMinDuration, initialMaxDuration } = props;
//   const [minDuration, setMinDuration] = useState(initialMinDuration);
//   const [maxDuration, setMaxDuration] = useState(initialMaxDuration);
//   const [updatedMinDuration, setUpdatedMinDuration] =
//     useState(initialMinDuration);
//   const [updatedMaxDuration, setUpdatedMaxDuration] =
//     useState(initialMaxDuration);

//   const duration = minutesToHoursMinutes;
//   const formatter = (value) => duration(value);
//   const changeDuration = (value) => {
//     const [min, max] = value;
//     setMinDuration(min);
//     setMaxDuration(max);
//   };
//   const updateDuration = (value) => {
//     const [min, max] = value;
//     setUpdatedMinDuration(min);
//     setUpdatedMaxDuration(max);
//   };

//   return (
//     <>
//       <div>
//         {duration(updatedMinDuration)} – {duration(updatedMaxDuration)}
//       </div>
//       <ILSlider
//         range
//         step={60}
//         min={initialMinDuration}
//         max={initialMaxDuration}
//         defaultValue={[initialMinDuration, initialMaxDuration]}
//         tooltip={{ formatter }}
//         onChange={changeDuration}
//         onAfterChange={updateDuration}
//       />
//     </>
//   );
// };
