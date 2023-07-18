import Icon from "../assets/Icon";
import ILPopover from "./core/ILPopover";

function Tag({ item }) {
  let icon;
  let label;
  let tooltip;

  switch (item) {
    case "ib":
      icon = "sparkleSmall";
      label = "Instant booking";
      tooltip = "https://google.com/";
      break;
    case "gst":
      label = "GST assured";
      tooltip = "https://google.com/";
      break;
    case "qu":
      icon = "vehicleCarSmall";
      label = "Quality unclear";
      tooltip = "https://google.com/";
      break;
    case "eco":
      label = "Economy";
      break;
    case "preeco":
      label = "Premium economy";
      break;
    default:
      icon = "vehicleTrainSmall";
      label = "No label";
  }

  return (
    // <>
    //   {tooltip ? (
    //     <button className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-solid border-gray-100 bg-gray-50 px-2 py-1 text-caption1 font-medium text-gray-700 underline decoration-gray-300">
    //       {icon && (
    //         <span className="-ml-1">
    //           <Icon name={icon} color="currentColor" />
    //         </span>
    //       )}
    //       {label}
    //     </button>
    //   ) : (
    //     <div className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-solid border-gray-100 bg-gray-50 px-2 py-1 text-caption1 font-medium text-gray-700">
    //       {icon && (
    //         <span className="-ml-1">
    //           <Icon name={icon} color="currentColor" />
    //         </span>
    //       )}
    //       {label}
    //     </div>
    //   )}
    // </>
    <>
      {tooltip ? (
        <ILPopover>
          <div className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-full border border-solid border-gray-100 bg-gray-50 px-2 py-1 text-caption1 font-medium text-gray-700 decoration-gray-500 transition duration-75 hover:bg-gray-80">
            {icon && (
              <span className="-ml-1">
                <Icon name={icon} color="currentColor" />
              </span>
            )}
            {label}
          </div>
        </ILPopover>
      ) : (
        <div>Content</div>
      )}
    </>
  );
}

export default Tag;

{
  /* <>
      {tooltip ? (
        <button className="mr-1 flex items-center gap-1 whitespace-nowrap rounded-full border border-solid border-gray-100 bg-gray-50 py-1 px-2 text-caption1 font-medium underline">
          {icon && (
            <span className="-ml-1">
              <Icon name={icon} color="currentColor" />
            </span>
          )}
          {label}
        </button>
      ) : (
        <div className="inline-block items-center rounded-full border border-solid border-gray-100 bg-gray-50 py-1 px-2 text-caption1 font-medium">
          {icon && (
            <span className="-ml-1 mr-1">
              <Icon name={icon} color="currentColor" />
            </span>
          )}
          {label}
        </div>
      )}
    </> */
}
