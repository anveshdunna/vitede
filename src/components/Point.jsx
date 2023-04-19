import Icon from "../assets/Icon";

function Point({ item }) {
  let icon;
  let label;
  let link;

  switch (item) {
    case "loyalty":
      icon = "sparkleSmall";
      label = "Earn loyalty points";
      break;
    case "breakfast":
      icon = "locationSmall";
      label = "Breakfast included";
      break;
    case "cancellation":
      icon = "vehicleCarSmall";
      label = "Cancellation policy";
      link = "https://google.com";
      break;
    default:
      icon = "vehicleTrainSmall";
      label = "No label";
  }

  return (
    <div className="flex items-center gap-1 text-caption1 text-gray-700">
      <Icon name={icon} color="currentColor" />
      {link ? (
        <a href={link} className="underline">
          {label}
        </a>
      ) : (
        label
      )}
    </div>
  );
}

export default Point;
