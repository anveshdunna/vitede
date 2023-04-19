import RecommendedToggle from "./RecommendedToggle";

function HotelFilters() {
  return (
    <>
      <div className="sticky top-24 h-40 bg-gray-80">
        <div className="text-body1 font-semibold">Filters</div>
        <RecommendedToggle />
      </div>
    </>
  );
}

export default HotelFilters;
