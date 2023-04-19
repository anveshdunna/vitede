import { hotelsData } from "../data/hotelsData";
import HotelCard from "./HotelCard";

function ProductList(props) {
  return (
    <ul className="w-full">
      {hotelsData.map((item) => (
        <HotelCard item={item} />
      ))}
    </ul>
  );
}

export default ProductList;
