import { useState } from "react";
import ILChip from "./core/ILChip";
import ILTextButton from "./core/ILTextButton";
import { motion, AnimatePresence } from "framer-motion";

function FilterLayout(props) {
  return (
    <div className="sticky top-28 mb-8 mt-4 flex h-[calc(100vh-10.5rem)] flex-col overflow-y-scroll rounded-lg border border-solid border-gray-200">
      <div className="flex flex-col gap-6 px-4 pb-6">{props.children}</div>
    </div>
  );
}

export function FilterSection(props) {
  const { title, children } = props;
  return (
    <div className="flex flex-col gap-2 text-body2 text-gray-700">
      {title && <div className="text-body2 font-medium">{title}</div>}
      {children}
    </div>
  );
}

export function FiltersHeader(props) {
  const { children, appliedFilters } = props;
  const [showAppliedFilters, setShowAppliedFilters] = useState(false);
  const changeShowAppliedFilters = () => {
    setShowAppliedFilters(!showAppliedFilters);
  };
  return (
    <>
      {/* Subheader */}
      <div className="sticky top-0 z-10 flex w-full items-baseline justify-between border-b border-solid border-gray-200 bg-background py-3">
        <div className="flex items-baseline gap-1">
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
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {appliedFilters.map((a, i) => (
                <ILChip key={i} closable small>
                  {a}
                </ILChip>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FilterLayout;
