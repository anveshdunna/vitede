import HotelCard from "./HotelCard";
import FlightCard from "./FlightCard";

function ProductList({ data, travelMode }) {
  return (
    <ul className="w-full">
      {data.map((item) =>
        travelMode === "flight" ? (
          <FlightCard item={item} key={item.key} />
        ) : (
          <HotelCard item={item} key={item.key} />
        )
      )}
    </ul>
  );
}

export default ProductList;
