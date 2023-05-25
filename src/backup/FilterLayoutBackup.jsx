import { useState } from "react";
import ILChip from "./core/ILChip";
import ILTextButton from "./core/ILTextButton";
import { motion, AnimatePresence } from "framer-motion";

function FilterLayout(props) {
  const { children, appliedFilters } = props;
  const [showAppliedFilters, setShowAppliedFilters] = useState(false);
  const changeShowAppliedFilters = () => {
    setShowAppliedFilters(!showAppliedFilters);
  };
  return (
    <div className="sticky top-28 mb-8 mt-4 flex h-[calc(100vh-10.5rem)] flex-col overflow-hidden rounded-lg border border-solid border-gray-200">
      {/* Header */}
      <div className="sticky top-0 z-10">
        <div className="absolute top-0 flex w-full flex-col border-b border-solid border-gray-200 bg-white">
          {/* Subheader */}
          <div className="flex items-baseline justify-between px-4 py-3">
            <div className="flex items-baseline gap-2">
              <div className="text-body1 font-semibold">Filters</div>
              <div className="font-medium text-gray-400">·</div>
              <ILTextButton
                variant="secondary"
                accordion
                onClick={changeShowAppliedFilters}
              >
                10 applied
              </ILTextButton>
            </div>
            <ILTextButton>Clear all</ILTextButton>
          </div>
          {/* Applied filters */}
          <AnimatePresence>
            {showAppliedFilters && (
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: "auto",
                  transition: { duration: 0.1, ease: "easeOut" },
                }}
                exit={{
                  height: 0,
                  transition: { duration: 0.075, ease: "easeIn" },
                }}
                className="overflow-clip"
              >
                <div className="flex max-h-80 flex-wrap gap-x-2 gap-y-2 overflow-y-scroll p-4">
                  {appliedFilters.map((a, i) => (
                    <ILChip key={i} closable small>
                      {a}
                    </ILChip>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-6 overflow-y-auto p-4">
        {props.children}
      </div>
    </div>
  );
}

export function FilterSection(props) {
  const { title, children } = props;
  return (
    <div className="flex flex-col gap-2">
      {title && (
        <div className="text-body2 font-medium text-gray-700">{title}</div>
      )}
      {children}
    </div>
  );
}

export default FilterLayout;
