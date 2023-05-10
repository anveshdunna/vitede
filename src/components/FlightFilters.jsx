import RecommendedToggle from "./RecommendedToggle";
import ILCheckbox from "./core/ILCheckbox";
import ILTag from "./core/ILTag";

function FlightFilters() {
  return (
    <>
      <div className="sticky top-24 flex h-40 flex-col gap-6 bg-gray-80">
        <div className="text-body1 font-semibold">Filters</div>
        <RecommendedToggle />
        <div className="bg-orange-300">
          <ILTag closable>Tag 1</ILTag>
          <ILTag closable>Tag 3</ILTag>
          <ILTag closable>American Airlines</ILTag>
        </div>
        <div className="flex flex-col gap-2">
          {commonFlightFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-body2 font-medium text-gray-700">
            Star rating
          </div>
          {commonFlightFilters.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-body2 font-medium text-gray-700">
            Cabin class
          </div>
          {cabinClasses.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-body2 font-medium text-gray-700">Airlines</div>
          {airlines.map((item, index) => (
            <ILCheckbox key={index}>{item}</ILCheckbox>
          ))}
        </div>
      </div>
    </>
  );
}

const commonFlightFilters = ["Within policy only", "Refundable fares"];

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

export default FlightFilters;
