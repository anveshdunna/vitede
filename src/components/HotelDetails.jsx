import ILTabs from "./core/ILTabs";

const Rooms = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-40 rounded-lg bg-orange-100"></div>
      <div className="h-40 rounded-lg bg-orange-100"></div>
      <div className="h-40 rounded-lg bg-orange-100"></div>
      <div className="h-40 rounded-lg bg-orange-100"></div>
    </div>
  );
};

const Details = () => {
  return <div>Details</div>;
};

const items = [
  {
    key: "1",
    label: "Rooms",
    children: <Rooms />,
  },
  {
    key: "2",
    label: "Details",
    children: <Details />,
  },
];

const HotelDetails = () => {
  return (
    <div className="col-span-full">
      <div className="h-96 w-full rounded-lg bg-gray-300">Images</div>
      <div>
        <ILTabs items={items} defaultActiveKey="1" />
      </div>
    </div>
  );
};

export default HotelDetails;
