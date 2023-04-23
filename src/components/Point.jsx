import Icon from "../assets/Icon";

function Point({ item }) {
  let icon;
  let label;
  let color;
  let link;

  switch (item) {
    case "loyalty":
      icon = "loyaltySmall";
      label = "Earn loyalty points";
      color = "text-orange-500";
      break;
    case "breakfast":
      icon = "coffeeSmall";
      label = "Breakfast included";
      break;
    case "cancellation":
      icon = "clipboardBulletsSmall";
      label = "Cancellation policy";
      link = "https://google.com";
      break;
    default:
      icon = "vehicleTrainSmall";
      label = "No label";
  }

  return (
    <div
      className={`flex items-center gap-2 text-caption1 ${
        color ? color : `text-gray-500`
      }`}
    >
      <Icon name={icon} color="currentColor" />
      {link ? (
        <a href={link} className="text-gray-700 underline">
          {label}
        </a>
      ) : (
        <span className="text-gray-700">{label}</span>
      )}
    </div>
  );
}

export default Point;
