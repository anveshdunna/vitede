import RecommendedToggle from "./RecommendedToggle";
import ILCheckbox from "./core/ILCheckbox";

function HotelFilters() {
  return (
    <>
      <div className="sticky top-24 flex h-40 flex-col gap-6 bg-gray-80">
        <div className="text-body1 font-semibold">Filters</div>
        <RecommendedToggle />
        <div className="flex flex-col gap-2">
          {commonHotelFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-body2 font-medium text-gray-700">
            Star rating
          </div>
          {commonHotelFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-body2 font-medium text-gray-700">
            Guest rating
          </div>
          {commonHotelFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-body2 font-medium text-gray-700">
            Loyalty chains
          </div>
          {loyaltyChains.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </div>
      </div>
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

const guestRatings = [];

export default HotelFilters;
