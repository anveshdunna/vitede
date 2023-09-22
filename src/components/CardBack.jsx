import { motion } from "framer-motion";

const CardBack = (props) => {
  const { physical, name, holder, amount, ripple } = props;
  const bgMain = physical ? "bg-gray-800" : "bg-gray-50";
  const bgSpecial = physical ? "bg-gray-700" : "bg-orange-50";
  const divider = physical ? "border-gray-600" : "border-orange-200";
  const textMain = physical ? "text-white" : "text-gray-900";
  const textWeak = physical ? "text-gray-300" : "text-gray-700";
  const textGreen = physical ? "text-green-300" : "text-green-400";
  const progressGreen = physical ? "bg-green-400" : "bg-green-300";
  const bgMain2 = !physical ? "bg-gray-800" : "bg-gray-50";
  const bgSpecial2 = !physical ? "bg-gray-700" : "bg-orange-50";
  const divider2 = !physical ? "border-gray-600" : "border-orange-200";
  const textMain2 = !physical ? "text-white" : "text-gray-900";
  const textWeak2 = !physical ? "text-gray-300" : "text-gray-700";
  const textGreen2 = !physical ? "text-green-300" : "text-green-400";
  const progressGreen2 = !physical ? "bg-green-400" : "bg-green-300";

  return (
    <div
      className="relative z-[2] overflow-clip rounded-2xl outline outline-1 -outline-offset-1 outline-gray-900/20"
      // style={{ backfaceVisibility: "hidden" }}
    >
      <div className="absolute -z-[2]">
        {/* Behind */}
        <motion.div
          key={physical}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          className={`flex h-60 w-[22.5rem] ${textMain2} flex-col ${bgMain2} -z-10`}
        >
          <div
            className={`flex justify-between gap-6 border-b ${divider2} ${bgSpecial2} p-4`}
          >
            <div className="flex flex-col gap-1">
              <div className="text-body2 font-semibold">{name}</div>
              <div className={`text-caption1 font-medium ${textWeak2}`}>
                {holder}
              </div>
            </div>
            <div className={`mt-0.5 text-caption1 font-medium ${textWeak2}`}>
              {physical ? "PHYSICAL" : "VIRTUAL"}
            </div>
          </div>

          <div className={`grow p-4 text-caption1 ${textWeak2}`}>
            Card limit {amount}
          </div>

          <div className="flex flex-col gap-2 p-4 text-body2 font-semibold">
            <div className={`h-2 rounded-lg ${progressGreen2}`}></div>
            <div className={`flex justify-between ${textGreen2}`}>
              <div className="text-transparent">Spend</div>
              <div>
                <span className="font-normal">Balance </span>
                {amount}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Forward */}
      <motion.div
        key={physical}
        // initial={{ clipPath: "circle(0% at 100% 0%)" }}
        initial={ripple ? { clipPath: "circle(0% at 100% 0%)" } : false}
        animate={{ clipPath: "circle(140% at 100% 0%)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative flex h-60 w-[22.5rem] ${textMain} flex-col ${bgMain} -z-[1]`}
      >
        <div
          className={`flex justify-between gap-6 border-b ${divider} ${bgSpecial} p-4`}
        >
          <div className="flex flex-col gap-1">
            <div className="text-body2 font-semibold">{name}</div>
            <div className={`text-caption1 font-medium ${textWeak}`}>
              {holder}
            </div>
          </div>
          <div className={`mt-0.5 text-caption1 font-medium ${textWeak}`}>
            {physical ? "PHYSICAL" : "VIRTUAL"}
          </div>
        </div>

        <div className={`grow p-4 text-caption1 ${textWeak}`}>
          Card limit {amount}
        </div>

        <div className="flex flex-col gap-2 p-4 text-body2 font-semibold">
          <div className={`h-2 rounded-lg ${progressGreen}`}></div>
          <div className={`flex justify-between ${textGreen}`}>
            <div className="text-transparent">Spend</div>
            <div>
              <span className="font-normal">Balance </span>
              {amount}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardBack;
