import { useEffect, useRef, useState } from "react";
import ILChip from "./core/ILChip";
import ILTextButton from "./core/ILTextButton";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../assets/Icon";

export function FiltersHeader(props) {
  const { children, appliedFilters } = props;
  const [appliedFiltersOpen, setAppliedFiltersOpen] = useState(false);
  const appliedFiltersRef = useRef(null);

  const changeAppliedFiltersOpen = () => {
    setAppliedFiltersOpen(!appliedFiltersOpen);
  };

  useEffect(() => {
    if (appliedFiltersOpen) {
      appliedFiltersRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    } else {
    }
  }, [appliedFiltersOpen]);

  return (
    <>
      {/* Subheader */}
      <div className="sticky top-0 z-10 flex w-full items-baseline justify-between border-b border-solid border-gray-200 bg-white px-4 py-3">
        <div className="flex items-baseline gap-2">
          <div className="text-body1 font-semibold">Filters</div>
          <div className="font-medium text-gray-400">·</div>
          <ILTextButton
            variant="secondary"
            accordion
            onClick={changeAppliedFiltersOpen}
          >
            10 applied
          </ILTextButton>
        </div>
        <ILTextButton>Clear all</ILTextButton>
      </div>

      {/* Applied filters */}
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{
            height: "auto",
            transition: { duration: 0.1, ease: "easeOut" },
          }}
          exit={{
            height: 0,
            transition: { duration: 0.075, ease: "easeIn" },
          }}
          className={`-mt-12 overflow-clip pt-12 ${
            appliedFiltersOpen ? "block" : "hidden"
          }`}
          ref={appliedFiltersRef}
        >
          <div className="flex flex-wrap gap-2 px-4 pt-4">
            {appliedFilters.map((a, i) => (
              <ILChip key={i} closable small>
                {a}
              </ILChip>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export function FilterSection(props) {
  const { heading, children } = props;
  const [accordionOpen, setAccordionOpen] = useState(true);
  const changeAccordionOpen = () => {
    setAccordionOpen(!accordionOpen);
  };
  return (
    <div className="mx-4 flex flex-col border-b border-solid border-gray-100 py-2 text-body2 text-gray-700 last-of-type:border-b-0">
      {heading && (
        <button
          className="flex items-center justify-between py-2 text-gray-700"
          onClick={changeAccordionOpen}
        >
          <div className="text-body2 font-medium">{heading}</div>
          <Icon
            name="chevronUpSmall"
            color="currentColor"
            className={`transition duration-75 ${
              !accordionOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      )}

      {/* Show filter content */}
      {accordionOpen && (
        <div className="flex flex-col gap-2 py-2">{children}</div>
      )}
    </div>
  );
}

function FiltersLayout(props) {
  const { children } = props;

  return (
    <div className="scrollbar sticky top-28 mb-8 mt-4 flex max-h-[calc(100vh-10.5rem)] flex-col overflow-y-auto overflow-x-clip rounded-xl border border-solid border-gray-200 bg-white">
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export default FiltersLayout;
