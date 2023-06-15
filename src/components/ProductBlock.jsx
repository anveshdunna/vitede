import ProductList from "./ProductList";
import ILSelect from "./core/ILSelect";
import { hotelsData } from "../data/hotelsData";
import { flightsData } from "../data/flightsData";

function ProductBlock({ travelMode }) {
  let data = travelMode === "flight" ? flightsData : hotelsData;
  return (
    <div className="col-span-4 mx-4 flex basis-full flex-col pt-3 md:col-span-3">
      <div className="self-end text-caption1">
        Fares expire in{" "}
        <span className="font-medium text-yellow-500">9m 48s</span>
      </div>
      <div className="my-4 flex flex-col-reverse items-center justify-between text-body2 sm:flex-row">
        <div>
          Showing <span className="font-semibold">200</span> of{" "}
          <span className="font-semibold">220</span> {`${travelMode}s`}
        </div>
        <div>
          <span className="mr-2 font-medium">Sort by</span>
          <ILSelect
            defaultValue="recommended"
            dropdownMatchSelectWidth={false}
            options={flightSortOptions}
          />
        </div>
      </div>
      <ProductList data={data} travelMode={travelMode} />
      <div className="mt-40">End of list</div>
    </div>
  );
}

const flightSortOptions = [
  {
    value: "recommended",
    label: "Recommended",
  },
  {
    value: "price",
    label: "Price",
  },
  {
    value: "duration",
    label: "Duration",
  },
  {
    value: "earliestDeparture",
    label: "Earliest departure",
  },
  {
    value: "latestDeparture",
    label: "Latest departure",
  },
  {
    value: "earliestArrival",
    label: "Earliest arrival",
  },
  {
    value: "latestArrival",
    label: "Latest arrival",
  },
];

export default ProductBlock;
