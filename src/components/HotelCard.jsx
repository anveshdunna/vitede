import Icon from "../assets/Icon";
import Point from "./Point";
import Recommendation from "./Recommendation";
import Tag from "./Tag";
import { Link } from "react-router-dom";
import { useNav } from "../contexts/NavContext";
import ILButton from "./core/ILButton";
import { useSelection } from "../contexts/SelectionContext";

const HotelTitle = ({ item }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-0.5 text-white sm:text-gray-700">
        {[...Array(item.starRating)].map((x, i) => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              key={i}
            >
              <path
                fill="currentColor"
                d="M3.6 4 4.717.809a.3.3 0 0 1 .566 0L6.4 4h2.655a.3.3 0 0 1 .173.545L7.113 6.038 8.19 9.115a.3.3 0 0 1-.456.344L5 7.53 2.266 9.46a.3.3 0 0 1-.456-.344l1.077-3.077L.772 4.545A.3.3 0 0 1 .945 4H3.6Z"
              />
            </svg>
          );
        })}
      </div>
      <div className="text-body1 font-semibold text-white sm:truncate sm:text-gray-900">
        {item.name}
      </div>
    </div>
  );
};

const HotelRating = ({ item }) => {
  const { userRating } = item;
  let ratingBackground;
  ratingBackground =
    userRating > 4
      ? "bg-green-500"
      : userRating > 3 && userRating <= 4
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <div className="relative -top-[3px] flex flex-none flex-col items-end text-caption1">
      <div
        className={`mb-0.5 rounded-t-md rounded-br-md border border-solid border-white/40 ${ratingBackground} px-2 py-0.5 text-body2 font-semibold text-white sm:border-none`}
      >
        {item.userRating}
        <span className="font-regular text-caption2 text-white/60">/5</span>
      </div>
      <div className="font-medium text-white sm:block sm:text-green-500">
        Very good
      </div>
      <div className="text-caption1 text-white sm:text-gray-500">
        ({item.userReviewCount} reviews)
      </div>
    </div>
  );
};

const HotelPoints = ({ item }) => {
  return (
    <div>
      {/* Hotel address */}
      <div className="mb-1.5 grid grid-cols-[auto_auto_auto_1fr] text-caption1 text-gray-500">
        <Icon name="locationSmall" color="currentColor" />
        <div className="ml-2 text-gray-700">
          {item.distance} km from search location
        </div>
        <div className="mx-1 font-medium text-gray-700">·</div>
        <a
          href="https://google.com"
          className="mr-3 truncate text-gray-700 underline decoration-gray-300"
        >
          {item.address}
        </a>
      </div>

      {/* Rest of the points */}
      <div className="flex flex-col gap-1.5">
        {item.points.map((item, index) => {
          return <Point item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

function HotelCard({ item }) {
  const { screenWidth } = useNav();
  const { selectedHotel, changeSelectedHotel, showHotel, changeShowHotel } =
    useSelection();
  return (
    <li className="mb-4">
      <div className="relative z-[1] w-full overflow-hidden rounded-xl bg-white no-underline outline outline-1 outline-offset-[-1px] outline-gray-900/20">
        {item.recommended && (
          <div className="absolute -z-[1] w-full">
            <Recommendation />
          </div>
        )}
        <div className="flex flex-col sm:flex-row">
          {/* Hotel image box */}
          <div className="relative -z-[2] h-40 w-full flex-none overflow-clip sm:h-[200px] sm:w-[200px]">
            <img
              className="h-full w-full object-cover"
              alt=""
              src={item.img}
            ></img>

            {/* Title and Rating in mobile */}
            {screenWidth < 760 && (
              <div className="absolute bottom-0 flex w-full items-end justify-between gap-6 bg-gradient-to-t from-black via-black/0 p-3 pt-32">
                <HotelTitle item={item} />
                <HotelRating item={item} />
              </div>
            )}
          </div>

          {/* Hotel details */}
          <div className="flex min-w-0 grow flex-col items-stretch gap-4 py-3 pl-3 pr-0 sm:justify-between sm:p-4">
            {/* Points in mobile */}
            {screenWidth < 760 && <HotelPoints item={item} />}

            {/* Title, Ratings and Bullets in Desktop */}
            {screenWidth >= 760 && (
              <div className="flex w-full min-w-0 justify-between gap-6">
                <div className="flex min-w-0 flex-col gap-1">
                  <HotelTitle item={item} />
                  <HotelPoints item={item} />
                </div>

                <HotelRating item={item} />
              </div>
            )}

            {/* Tags */}
            <div className="inline-flex gap-1 overflow-x-auto whitespace-nowrap sm:overflow-auto">
              {item.tags.map((item, index) => {
                return <Tag item={item} key={index} />;
              })}
            </div>
          </div>

          {/* Price details */}
          <div className="my-4 flex w-40 flex-none flex-col items-end justify-between gap-2 border-b-0 border-l border-r-0 border-t-0 border-solid border-gray-100 px-4">
            <div className="flex flex-col items-end gap-0.5">
              <div className="text-title3 font-semibold">${item.price}</div>
              <div className="text-caption1 text-gray-500">Avg per night</div>
              <div className="text-caption1 text-gray-500">Total $1000</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ILButton
                variant="secondary"
                size="small"
                onClick={() => {
                  changeSelectedHotel(item);
                  changeShowHotel();
                  console.log(item);
                  console.log(showHotel);
                }}
              >
                Choose room
              </ILButton>
              <div className="text-caption2">Earn reward $50</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default HotelCard;

// Old hotel card onclick function
// onClick={() => {
//                   changeSelectedHotel(item);
//                   console.log(item);
//                 }}
