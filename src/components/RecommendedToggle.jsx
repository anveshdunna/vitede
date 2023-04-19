const RecommendedToggle = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-solid border-gray-100 bg-gray-50 px-4 py-3">
      <div className="text-body2 font-semibold">Show recommended only </div>
      <div className="text-caption1 text-gray-700">
        Recommendation is based on your preferences and your company's policy.
      </div>
    </div>
  );
};

export default RecommendedToggle;
