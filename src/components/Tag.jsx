import Icon from "../assets/Icon";

function Tag({ item }) {
  let icon;
  let label;
  let link;

  switch (item) {
    case "ib":
      icon = "sparkleSmall";
      label = "Instant booking";
      link = "https://google.com/";
      break;
    case "gst":
      label = "GST assured";
      link = "https://google.com/";
      break;
    case "qu":
      icon = "vehicleCarSmall";
      label = "Quality unclear";
      link = "https://google.com/";
      break;
    default:
      icon = "vehicleTrainSmall";
      label = "No label";
  }

  return (
    <>
      {link ? (
        <button className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-solid border-gray-100 bg-gray-50 py-1 px-2 text-caption1 font-medium underline">
          {icon && (
            <span className="-ml-1">
              <Icon name={icon} color="currentColor" />
            </span>
          )}
          {label}
        </button>
      ) : (
        <div className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-solid border-gray-100 bg-gray-50 py-1 px-2 text-caption1 font-medium">
          {icon && (
            <span className="-ml-1">
              <Icon name={icon} color="currentColor" />
            </span>
          )}
          {label}
        </div>
      )}
    </>
  );
}

export default Tag;

{
  /* <>
      {link ? (
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
