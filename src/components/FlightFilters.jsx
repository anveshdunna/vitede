import RecommendedToggle from "./RecommendedToggle";
import ILCheckbox from "./core/ILCheckbox";
import ILTag from "./core/ILTag";
import ILChip from "./core/ILChip";
import ILSlider from "./core/ILSlider";

import { Tag } from "antd";
import FilterLayout, { FilterSection, FiltersHeader } from "./FilterLayout";

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
      <FilterSection title="Flight duration">
        <div>12h 30m – 25h 50m</div>
        <ILSlider range />
      </FilterSection>
      <FilterSection title="Airlines">
        {airlines.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
      </FilterSection>
      <FilterSection title="Airlines">
        {airlines.map((item, index) => (
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
