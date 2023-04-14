import Icon from "../assets/Icon";

function Recommendation() {
  return (
    <div className="relative -z-10 overflow-clip bg-orange-50">
      <div className="animation-delay-2000 absolute -top-40 -left-40 h-[480px] w-[480px] animate-recommendation rounded-full bg-yellow-80 mix-blend-multiply blur-xl filter"></div>
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] animate-recommendation rounded-full bg-orange-300 opacity-80 mix-blend-multiply blur-xl filter"></div>
      <div className="animation-delay-4000 absolute -bottom-40 left-40 h-[480px] w-[480px] animate-recommendation rounded-full bg-purple-300 opacity-80 mix-blend-multiply blur-xl filter"></div>
      <div className="relative flex items-center gap-2  px-4 py-2 text-caption1 font-medium">
        <span>Icon</span>
        <span>Recommendation</span>
      </div>
    </div>
  );
}

export default Recommendation;
