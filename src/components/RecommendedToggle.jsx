import ILToggle from "./core/ILToggle";

const RecommendedToggle = () => {
  return (
    <div className="flex flex-col items-stretch gap-2 rounded-lg border border-solid border-gray-100 bg-gray-50 px-4 py-3">
      <div className="flex items-center justify-between text-body2 font-semibold">
        Show recommended only <ILToggle size="small" />
      </div>
      <div className="mr-10 text-caption1 text-gray-700">
        Recommendation is based on your preferences and your company's policy.
      </div>
    </div>
  );
};

export default RecommendedToggle;
