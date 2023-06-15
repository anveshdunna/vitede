import Icon from "../assets/Icon";

function Recommendation({ type }) {
  let icon;
  let label;

  switch (type) {
    case "cheapest":
      icon = "sparkleSmall";
      label = "Cheapest flight of the day";
      break;
    case "fastest":
      icon = "sparkleSmall";
      label = "Fastest flight of the day";
      break;
    case "cheapest and fastest":
      icon = "sparkleSmall";
      label = "Cheapest and fastest flight of the day";
      break;
    default:
      icon = "sparkleSmallFilled";
      label = "Recommended";
  }

  return (
    <div className="relative -z-10 overflow-hidden bg-orange-100">
      <div className="relative flex items-center gap-1 px-3 py-2 text-caption1 font-medium text-gray-900">
        <span>
          <Icon name={icon} color="currentColor" />
        </span>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default Recommendation;

// Backup class for recommendation background -> className="relative
//       -z-10 animate-shimmerreco
//       overflow-hidden bg-[linear-gradient(to_right,#f8d385_0%,_#b86aa2_30%,_#faa666_50%,_#f8d385_90%)] bg-double"
