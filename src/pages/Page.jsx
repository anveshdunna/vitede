import { AnimatePresence, motion } from "framer-motion";
import { useNav } from "../contexts/NavContext";

function Page({ children }) {
  const { pnavOpen } = useNav();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="page"
        exit={{ opacity: 0 }}
        transition={{ duration: 5 }}
        className={`flex h-fit flex-1 flex-col items-stretch ${
          pnavOpen ? `md:ml-[17.5rem]` : `md:ml-16`
        }`}
        id="page"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Page;
