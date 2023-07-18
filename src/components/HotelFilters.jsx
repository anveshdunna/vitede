import Icon from "../assets/Icon";
import FiltersLayout, { FilterSection, FiltersHeader } from "./FiltersLayout";
import RecommendedToggle from "./RecommendedToggle";
import ILCheckbox from "./core/ILCheckbox";
import ILInput from "./core/ILInput";

function HotelFilters() {
  return (
    <>
      <FiltersLayout>
        <div className="mx-4 mt-4 flex h-24 items-center justify-center overflow-clip rounded-lg border border-solid border-gray-200 bg-white">
          <span className="absolute m-auto">Show in map</span>
          <img
            src="https://res.cloudinary.com/idonnoi/image/upload/v1689670316/map_uokdew.png"
            className="h-24 w-full object-cover"
          ></img>
        </div>
        <div className="mx-4 mt-4">
          <ILInput
            placeholder="Search by hotel name"
            prefix={<Icon name="searchSmall" className="mr-1" />}
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
