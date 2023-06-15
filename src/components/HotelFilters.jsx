import Icon from "../assets/Icon";
import FiltersLayout, { FilterSection, FiltersHeader } from "./FiltersLayout";
import RecommendedToggle from "./RecommendedToggle";
import ILCheckbox from "./core/ILCheckbox";
import ILInput from "./core/ILInput";

function HotelFilters() {
  return (
    <>
      <FiltersLayout>
        <div className="mt-4 h-24 rounded-lg border border-solid border-gray-200 bg-white">
          Show in map
        </div>
        <div>
          <ILInput
            placeholder="Search by hotel name"
            prefix={<Icon name="vehicleFlightSmall" className="mr-1" />}
          />
        </div>
        <FiltersHeader appliedFilters={appliedFilters} />
        <RecommendedToggle />
        <FilterSection>
          {commonHotelFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </FilterSection>
        <FilterSection heading="Guest rating">
          {commonHotelFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </FilterSection>
        <FilterSection heading="Loyalty chains">
          {loyaltyChains.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </FilterSection>
      </FiltersLayout>
    </>
  );
}

const commonHotelFilters = [
  "In-policy options only",
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
