import Tag from "./Tag";
import Recommendation from "./Recommendation";
import ILButton from "./core/ILButton";
import { useSelection } from "../contexts/SelectionContext";

const FlightTitle = ({ item }) => {
  const { name, number, operated } = item;
  return (
    <div className="flex flex-row gap-2 sm:col-start-1 sm:row-start-1">
      <img
        alt=""
        className="h-4 w-4 rounded sm:h-10 sm:w-10"
        src="https://res.cloudinary.com/idonnoi/image/upload/v1673089825/download_geijut.jpg"
      />
      <div className="flex flex-col gap-0 sm:gap-0.5">
        <div className="text-caption1 font-medium text-gray-900 ">{name}</div>
        <div className="flex flex-row items-center gap-1 sm:flex-col sm:items-start sm:gap-0.5">
          <div className="text-caption2 text-gray-500">{number}</div>
          {operated && (
            <>
              <span className="text-caption2 font-medium text-gray-700 sm:hidden">
                ·
              </span>
              <span className="text-caption2 text-gray-500">
                Operated by {operated}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const FlightTime = ({ item }) => {
  const {
    fromAirport,
    fromDate,
    fromTime,
    toAirport,
    toDate,
    toTime,
    duration,
    stops,
  } = item;

  return (
    <div className="flex flex-row">
      <div className="grow">
        <div className="text-body1 font-semibold text-gray-900">{fromTime}</div>
        <div className="text-caption1 text-gray-500">{fromDate}</div>
        <div className="text-caption1 text-gray-500">{fromAirport}</div>
      </div>
      <div className="my-1 flex grow-[2] flex-col items-center justify-between">
        <div className="text-caption1 text-gray-500">{duration}</div>
        <div className="relative flex h-px items-center justify-center gap-2 self-stretch bg-gray-200">
          {[...Array(item.stops)].map((x, i) => {
            return (
              <div
                className="h-[5px] w-[5px] rounded-full bg-gray-400"
                key={i}
              ></div>
            );
          })}
        </div>
        {stops === 0 ? (
          <div className="text-caption1 text-gray-500">Non-stop</div>
        ) : (
          <div className="text-caption1 text-gray-500 underline">
            {stops > 1 ? `${stops} stops` : `${stops} stop`}
          </div>
        )}
      </div>
      <div className="flex grow flex-col items-end">
        <div className="text-body1 font-semibold text-gray-900">{toTime}</div>
        <div className="text-caption1 text-gray-500">{toAirport}</div>
        <div className="text-caption1 text-gray-500">{toDate}</div>
      </div>
    </div>
  );
};

function FlightCard({ item }) {
  const { price, outOfPolicy, reward } = item;
  const { selectedFlight, changeSelectedFlight } = useSelection();

  return (
    <li className="mb-4">
      <div className="relative z-[1] overflow-hidden rounded-xl bg-white no-underline outline outline-1 outline-offset-[-1px] outline-gray-900/20">
        {item.recommended && <Recommendation />}

        <div className="flex flex-col sm:flex-row">
          <div className="grid gap-4 px-3 py-3 sm:grow sm:grid-cols-[1fr_3fr] sm:px-4 sm:py-4">
            <FlightTime item={item} />
            <FlightTitle item={item} />

            {/* Tags */}
            <div className="flex justify-between self-end sm:col-span-2">
              <div className="inline-flex gap-1 overflow-x-auto whitespace-nowrap sm:overflow-auto">
                {item.tags.map((item, index) => {
                  return <Tag item={item} key={index} />;
                })}
              </div>
              <button className="self-center text-caption1 text-gray-700 underline">
                Flight details
              </button>
            </div>
          </div>

          {/* Price details */}
          <div className="mx-3 flex flex-none flex-col items-end justify-between gap-2 border-t border-solid border-gray-100 py-3 sm:mx-0 sm:my-4 sm:w-40 sm:border-l sm:border-t-0 sm:px-4 sm:py-0">
            <div
              className={`flex items-center ${
                outOfPolicy ? `justify-between` : `justify-end`
              } self-stretch sm:flex-col sm:items-end sm:justify-start sm:gap-0.5`}
            >
              {outOfPolicy && (
                <div className="text-caption1 font-medium text-red-500">
                  Out of policy
                </div>
              )}
              <div className="flex flex-col items-end gap-0.5 self-end">
                <div className="text-title3 font-semibold">${price}</div>
                <div className="text-caption2 text-gray-500">
                  Earn reward ${reward}
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <ILButton
                variant="secondary"
                size="small"
                onClick={() => {
                  changeSelectedFlight(item);
                  console.log(item);
                }}
              >
                Choose fares
              </ILButton>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default FlightCard;
