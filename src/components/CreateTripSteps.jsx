import Icon from "../assets/Icon";

function TripTab({ title }) {
  return (
    <button className="flex flex-row items-center gap-1 text-body2 font-semibold">
      <Icon name="travel" color="currentColor" />
      {title}
    </button>
  );
}

function CreateTripSteps() {
  return (
    <div className="flex justify-center gap-4 border-b border-solid border-gray-200 bg-white px-4 py-2">
      <TripTab title="Create trip" />
      <TripTab title="Select options" />
      <TripTab title="Confirm details" />
    </div>
  );
}

export default CreateTripSteps;
