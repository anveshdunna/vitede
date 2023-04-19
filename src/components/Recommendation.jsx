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
      <div className="animation-delay-2000 absolute -top-40 -left-40 h-[480px] w-[480px] animate-recommendation rounded-full bg-yellow-80 mix-blend-multiply blur-xl filter"></div>
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] animate-recommendation rounded-full bg-orange-300 opacity-80 mix-blend-multiply blur-xl filter"></div>
      <div className="animation-delay-4000 absolute -bottom-40 left-40 h-[480px] w-[480px] animate-recommendation rounded-full bg-purple-300 opacity-80 mix-blend-multiply blur-xl filter"></div>
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
