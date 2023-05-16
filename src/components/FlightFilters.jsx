import RecommendedToggle from "./RecommendedToggle";
import ILCheckbox from "./core/ILCheckbox";
import ILTag from "./core/ILTag";
import ILChip from "./core/ILChip";
import { Tag } from "antd";
import FilterLayout, { FilterSection } from "./FilterLayout";

function FlightFilters() {
  return (
    <FilterLayout appliedFilters={appliedFilters}>
      <RecommendedToggle />
      <FilterSection>
        {commonFlightFilters.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
      </FilterSection>
      <FilterSection title="Star rating">
        {commonFlightFilters.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
      </FilterSection>
      <FilterSection title="Cabin class">
        {cabinClasses.map((item, index) => (
          <ILCheckbox key={index}>{item}</ILCheckbox>
        ))}
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
