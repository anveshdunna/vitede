import { motion } from "framer-motion";

const ILSkeleton = (props) => {
  const { height, width } = props;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative isolate h-${height} w-${width} overflow-hidden rounded-lg bg-gray-80 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-50 before:to-transparent`}
    ></motion.span>
  );
};

export default ILSkeleton;
