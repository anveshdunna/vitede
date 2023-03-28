import Tag from "./Tag";

function FlightCard() {
  return (
    <div className="bg-white flex flex-col border border-solid border-gray-200-value gap-4 rounded-xl overflow-hidden ">
      {/* <Recommendation /> */}
      <div className="flex flex-col px-3 pt-3 pb-4 gap-4">
        <div className="flex flex-row">
          <div className="grow">
            <div className="text-gray-900-value text-body2 font-semibold">
              04:00 PM
            </div>
            <div className="text-caption1">JFK</div>
            <div className="text-caption2">4 Dec</div>
          </div>
          <div className="grow">
            <div className="text-gray-900-value text-body2 font-semibold">
              06:30 PM
            </div>
            <div className="text-caption1 text-gray-700-value">SFO</div>
            <div className="text-caption2 text-gray-700-value">4 Dec</div>
          </div>
          <div className="flex flex-col items-end mt-0.5 gap-0.5">
            <div className="text-caption2 text-gray-700-value">2h 30m</div>
            <div className="text-caption2 text-gray-700-value ">Non-stop</div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <img
            alt=""
            className="w-4 h-4 rounded"
            src="https://res.cloudinary.com/idonnoi/image/upload/v1673089825/download_geijut.jpg"
          />
          <div className="flex flex-col gap-0.5">
            <div className="text-caption1 font-semibold text-gray-900-value ">
              American Airlines
            </div>
            <div className="text-caption2 text-gray-700-value">AA 238</div>
          </div>
        </div>
      </div>
      <div className="fcard__tags">
        <Tag />
        <Tag />
      </div>
      <div className="fcard__fares">
        {/* <OutofPolicy /> */}
        <div className="fcard__fares-amount">$450</div>
      </div>
    </div>
  );
}

export default FlightCard;
