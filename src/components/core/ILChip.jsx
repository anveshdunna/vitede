import { useState } from "react";
import Icon from "../../assets/Icon";

const ILChip = (props) => {
  const { type, closable, closeFn, small, children } = props;
  const [removed, setRemoved] = useState(false);

  const isFilter = type === "filter";

  // Closeable

  // Definitions
  const chipSize = small ? "px-2 text-caption1" : "h-8 px-3 text-body2";
  const isRemoved = removed ? "hidden" : "inline-flex";

  return (
    <div
      className={`rounded-lg bg-white text-gray-700 ${chipSize} ${isRemoved} items-center gap-1 border border-solid border-gray-200`}
    >
      {children}
      {closable && (
        <button
          className="-mr-2 rounded-lg p-1 text-gray-500 hover:bg-gray-80 hover:text-gray-700"
          onClick={() => setRemoved(true)}
        >
          <Icon name="closeAltSmall" color="currentColor" />
        </button>
      )}
    </div>
  );
};

export default ILChip;

// className={`inline-flex bg-white ${chipSize} items-center rounded-lg border border-solid border-gray-100 text-gray-700`}
