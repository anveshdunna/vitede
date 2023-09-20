import { motion } from "framer-motion";

const CardBack = (props) => {
  const { physical, anim } = props;
  const bgMain = physical ? "bg-gray-800" : "bg-gray-50";
  const bgSpecial = physical ? "bg-gray-700" : "bg-orange-50";
  const divider = physical ? "border-gray-600" : "border-orange-200";
  const textMain = physical ? "text-white" : "text-gray-900";
  const textWeak = physical ? "text-gray-300" : "text-gray-700";
  const textGreen = physical ? "text-green-300" : "text-green-400";
  const progressGreen = physical ? "bg-green-400" : "bg-green-300";

  return (
    <motion.div
      key={physical}
      initial={{ clipPath: "circle(0% at 100% 0%)" }}
      animate={{ clipPath: "circle(140% at 100% 0%)" }}
      transition={anim ? { duration: 0.3, ease: "easeOut" } : { duration: 0 }}
      className={`flex h-60 w-[22.5rem] ${textMain} flex-col overflow-clip rounded-2xl ${bgMain} outline outline-1 outline-offset-[-1px] outline-gray-900/20`}
    >
      <div
        className={`flex justify-between gap-6 border-b ${divider} ${bgSpecial} p-4`}
      >
        <div className="flex flex-col gap-1">
          <div className="text-body2 font-semibold">Card name</div>
          <div className={`text-caption1 font-medium ${textWeak}`}>
            Cardholder name
          </div>
        </div>
        <div className={`mt-0.5 text-caption1 ${textWeak}`}>
          {physical ? "PHYSICAL" : "VIRTUAL"}
        </div>
      </div>

      <div className={`grow p-4 text-caption1 ${textWeak}`}>
        Card limit $10,000
      </div>
      <div className="flex flex-col gap-2 p-4 text-body2 font-semibold">
        <div className={`h-2 rounded-lg ${progressGreen}`}></div>
        <div className={`flex justify-between ${textGreen}`}>
          <div className="text-transparent">Spend</div>
          <div>
            <span className="font-normal">Balance </span>$500
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CardBack;
