import FilterLayout, { FilterSection } from "./FilterLayout";
import RecommendedToggle from "./RecommendedToggle";
import ILCheckbox from "./core/ILCheckbox";

function HotelFilters() {
  return (
    <>
      <div className="h-24 rounded-lg border border-solid border-gray-200 bg-white">
        Show in map
      </div>
      <div>Search hotel by name</div>
      <FilterLayout appliedFilters={appliedFilters}>
        <RecommendedToggle />
        <FilterSection>
          {commonHotelFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </FilterSection>
        <FilterSection title="Guest rating">
          {commonHotelFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </FilterSection>
        <FilterSection title="Loyalty chains">
          {loyaltyChains.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </FilterSection>
      </FilterLayout>
    </>
  );
}

const commonHotelFilters = [
  "Within policy only",
  "Must include breakfast",
  "Instant booking",
  "Refundable fares",
  "Company preferred",
  "ITILITE exclusive rates",
  "GST assured",
  "Frequented by colleagues",
];

const loyaltyChains = [
  "Hilton Honors",
  "Marriot Bonvoy",
  "Club Mahindra hotels",
  "Club ITC",
  "Oberoi One",
];

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

const guestRatings = [];

export default HotelFilters;
