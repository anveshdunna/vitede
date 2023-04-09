import Icon from "../assets/Icon";

function TripStep({ title }) {
  return (
    <button className="flex flex-row items-center gap-1 text-body2 font-semibold">
      <Icon name="travel" color="currentColor" />
      {title}
    </button>
  );
}

function TripSteps({ sticky }) {
  return (
    <div
      className={`flex grow justify-center gap-4 border-b border-solid border-gray-200 bg-white px-4 py-2 ${
        sticky ? `sticky top-0` : ``
      }`}
    >
      <TripStep title="Create trip" />
      <TripStep title="Select options" />
      <TripStep title="Confirm details" />
    </div>
  );
}

export default TripSteps;
