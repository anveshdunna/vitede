import Icon from "../assets/Icon";
import { useSelection } from "../contexts/SelectionContext";

let icon, item;

function SelectionNavItem({ expand, item, selected, active, onClick }) {
  const { selectedHotel, selectedFlight } = useSelection();
  return (
    <div
      className={`flex w-[280px] flex-none flex-col items-stretch gap-4 rounded-lg border border-solid ${
        active ? `border-orange-500` : `border-gray-200`
      } cursor-pointer bg-white p-2 text-caption1 text-gray-900`}
      tabIndex={0}
      onClick={onClick}
    >
      <div className="flex flex-col gap-1">
        {/* Locations */}
        <div className="flex items-center gap-1 font-medium text-gray-700">
          <Icon
            name={checkIcon(item.travelMode)}
            color="currentColor"
            className="text-orange-500"
          />
          {item.travelMode === "flight" && (
            <>
              <span>{item.fromLocation}</span>
              <span>
                <Icon
                  name="arrowRightAltSmall"
                  color="currentColor"
                  className="text-gray-500"
                />
              </span>
              <span>{item.toLocation}</span>
            </>
          )}
          {item.travelMode === "hotel" && <span>{item.location}</span>}
        </div>

        {/* Dates */}
        <div className="ml-5 text-gray-700">{item.date}</div>

        {/* Selection */}
        <div className="ml-5 truncate">
          {item.travelMode === "flight" ? (
            selectedFlight ? (
              <span className="text-gray-700">{selectedFlight.name}</span>
            ) : (
              <span className="text-gray-500">Not selected</span>
            )
          ) : selectedHotel ? (
            <span className="text-gray-700">{selectedHotel.name}</span>
          ) : (
            <span className="text-gray-500">Not selected</span>
          )}
          {/* {selected ? (
            <span className="text-gray-700">
              Delta, DL1234 {selectedHotel && selectedHotel.name}
            </span>
          ) : (
            <span className="text-gray-500">
              Not selected {selectedHotel && selectedHotel.name}
            </span>
          )} */}
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
    </div>
  );
}

const checkIcon = (a) => {
  switch (a) {
    case "flight":
      return "vehicleFlightSmall";
    case "hotel":
      return "vehicleCarSmall";
    default:
      return "vehicleFlightSmall";
  }
};

export default SelectionNavItem;
