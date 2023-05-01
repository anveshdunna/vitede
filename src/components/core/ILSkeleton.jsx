import { motion } from "framer-motion";

let testing = `relative isolate overflow-hidden rounded-lg bg-gray-80 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-50 before:to-transparent`;

const ILSkeleton = (props) => {
  const { height, width } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`animate-shimmerbg ${width} ${height} rounded-lg bg-gray-100 bg-gradient-to-r from-transparent from-40% via-gray-50 to-transparent to-60% bg-double bg-fixed`}
    ></motion.div>
  );
};

export default ILSkeleton;
