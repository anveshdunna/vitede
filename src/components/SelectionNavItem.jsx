import Icon from "../assets/Icon";
import { Link } from "react-router-dom";

function SelectionNavItem({ expand }) {
  return (
    <Link className="flex w-[280px] flex-none flex-col items-stretch gap-4 rounded-lg border border-solid border-gray-200 bg-white p-2 text-caption1 text-gray-900">
      <div className="flex flex-col gap-1">
        <div className="flex items-center font-medium text-gray-700">
          <Icon name="vehicleFlightSmall" color="currentColor" />
          <div className="ml-1">
            <span>Location 1</span>
            <span>{`->`}</span>
            <span>Location 2</span>
          </div>
        </div>
        <div className="text-gray-700">31 Jan</div>
        <div className="text-gray-700">
          <span>Delta, DL 1234</span>
        </div>
      </div>
      {expand && (
        <>
          <div className="flex flex-col gap-2">
            <div className="text-caption2 text-gray-500">Economy</div>
            <div className="flex items-center gap-10 text-gray-700">
              <div className="flex flex-col">
                <div className="font-medium text-gray-900">9:00 PM</div>
                <div>31 Jan</div>
                <div>JFK</div>
              </div>
              <div className="h-px grow bg-gray-200"></div>
              <div className="flex flex-col items-end">
                <div className="font-medium text-gray-900">12:00 PM</div>
                <div>31 Jan</div>
                <div>JFK</div>
              </div>
            </div>
          </div>

          <div className="border-t border-solid border-gray-100 pt-2 text-gray-500">
            <div className="text-body2">
              <span className="font-semibold text-gray-900">$180</span> for 4
              travelers
            </div>
            <div>Earn 45 IL Cash</div>
          </div>
          <button className="self-start">Change selection</button>
        </>
      )}
    </Link>
  );
}

export default SelectionNavItem;
