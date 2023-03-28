import List from "./List";
import Tag from "./Tag";
import { Link } from "react-router-dom";

function HotelCard() {
  return (
    <li>
      <Link
        href="www.google.com"
        className="flex flex-row overflow-hidden	rounded-xl bg-white no-underline outline outline-1 outline-offset-[-1px] outline-[#00000033] "
      >
        <div className="h-60 w-60">
          <img
            className="h-full object-cover"
            alt=""
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
          ></img>
        </div>
        <div className="flex grow flex-col gap-4 p-4">
          <div className="flex flex-col gap-1">
            <div>★★★★</div>
            <div className="text-body1 font-semibold text-gray-900-value">
              The Ritz-Carlton, Los Angeles
            </div>
            <div className="text-caption1 text-gray-700-value">
              <a href="https://itilite.com">90 Boulevard street, Los Angeles</a>
              <span className="px-1 text-gray-500-value">·</span>
              <span>3.5 km from search location</span>
            </div>
            <div className="text-caption1">
              4.5/5<span className="mx-1">Very good</span>
              <span>(2400 reviews)</span>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <Tag>Instant booking</Tag>
            <Tag>GST assured</Tag>
            <Tag>Quality unclear</Tag>
          </div>
          <div className="flex flex-col gap-1">
            <List>Earn loyalty Lists</List>
            <List>Breakfast included</List>
            <List>
              <a href="https://itilite.com">Cancellation policy</a>
            </List>
          </div>
        </div>
        <div className="my-4 flex w-40 flex-col items-end justify-end gap-2 border-l border-b-0 border-t-0 border-r-0 border-solid border-gray-100-value px-4">
          <div className="flex flex-col items-end gap-1">
            <div className="text-title3 font-semibold">$500</div>
            <div className="text-caption1">Avg per night</div>
            <div className="text-caption1">Total $1000</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <button>Choose room</button>
            <div className="text-caption2">Earn reward $50</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default HotelCard;
