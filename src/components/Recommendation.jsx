import Icon from "../assets/Icon";

function Recommendation({ type }) {
  let icon;
  let label;

  switch (type) {
    case "cheapest":
      icon = "sparkleSmallFilled";
      label = "Cheapest flight of the day";
      break;
    case "fastest":
      icon = "sparkleSmallFilled";
      label = "Fastest flight of the day";
      break;
    case "cheapest and fastest":
      icon = "sparkleSmallFilled";
      label = "Cheapest and fastest flight of the day";
      break;
    default:
      icon = "sparkleSmallFilled";
      label = "Recommendation 1";
  }

  return (
    <div className="border-t-[0.375rem] border-orange-500 ">
      <div className="flex">
        <div className="inline-block bg-orange-500 pb-[0.375rem] pl-3 text-caption1 font-medium text-white">
          <div className="flex items-center gap-1">
            <span>
              <Icon name={icon} color="currentColor" />
            </span>
            <span>{label}</span>
          </div>
        </div>
        <svg
          width="36"
          height="22"
          viewBox="0 0 36 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0V22H1.37258C5.61605 22 9.68571 20.3143 12.6863 17.3137L25.3137 4.68629C28.3143 1.68571 31.7565 0 36 0H0Z"
            fill="#EC5D25"
          />
        </svg>
      </div>
    </div>
  );
}

export default Recommendation;

// Backup class for recommendation background -> className="relative
//       -z-10 animate-shimmerreco
//       overflow-hidden bg-[linear-gradient(to_right,#f8d385_0%,_#b86aa2_30%,_#faa666_50%,_#f8d385_90%)] bg-double"

// Backup class -> className="relative -z-10 overflow-hidden bg-orange-100"

// <div className="relative -z-10">
//   <div className="flex items-center gap-1 bg-orange-500 px-3 py-2 text-caption1 font-medium text-white">
//     <span>
//       <Icon name={icon} color="currentColor" />
//     </span>
//     <span>{label}</span>
//   </div>
// </div>
