import { useState } from "react";
import { motion } from "framer-motion";

const ILCheckbox = (props) => {
  const { children } = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="group inline-flex cursor-pointer items-center text-body2 text-gray-700">
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        className="peer"
      ></input>
      <svg
        className={`mr-2 inline-block h-4 w-4 rounded-smol border border-solid transition duration-75 peer-focus-visible:ring ${
          isChecked
            ? "border-orange-500 bg-orange-500 text-white group-hover:border-orange-600 group-hover:bg-orange-600"
            : "border-gray-300 bg-white text-transparent group-hover:border-gray-500"
        }`}
        aria-hidden="true"
        fill="none"
        viewBox="0 0 16 16"
        strokeWidth={2}
        stroke="currentColor"
      >
        <motion.path
          key={isChecked}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            delay: 0.075,
            duration: 0.075,
            type: "tween",
            ease: "easeOut",
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4 8 2.5 3L12 5"
        />
      </svg>
      <span>{children}</span>
    </label>
  );
};

export default ILCheckbox;
