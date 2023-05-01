import Icon from "../assets/Icon";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelection } from "../contexts/SelectionContext";
import ILSkeleton from "./core/ILSkeleton";

function TripStep({
  label,
  active,
  completed,
  penultimate,
  incomplete,
  onClick,
}) {
  return (
    <button
      className={`z-10 flex flex-row items-center gap-1 rounded-full bg-white p-1 pr-2 text-body2 font-medium ${
        !incomplete && `hover:bg-gray-80`
      } ${
        active
          ? `text-orange-500`
          : completed
          ? ` text-gray-700`
          : `text-gray-400`
      }`}
      onClick={onClick}
      disabled={incomplete}
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        <div
          className={`h-4 w-4 rounded-full border-2 border-solid ${
            active
              ? `border-orange-500 bg-white`
              : completed
              ? `border-orange-50 bg-orange-50`
              : `border-gray-200 bg-white`
          }`}
        ></div>
        {active && (
          <div className="absolute h-1.5 w-1.5 rounded-full bg-orange-500"></div>
        )}
        {completed && (
          <svg
            aria-hidden="true"
            fill="none"
            viewBox="0 0 16 16"
            strokeWidth={2}
            stroke="currentColor"
            className="absolute h-4 w-4 text-orange-500"
          >
            <motion.path
              initial={{
                pathLength: penultimate ? 1 : 0,
                opacity: penultimate ? 1 : 0,
              }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                opacity: {
                  duration: 0.2,
                },
                pathLength: {
                  duration: 0.075,
                  delay: 0.2,
                },
                type: "tween",
                ease: "easeOut",
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4 8 2.5 3L12 5"
            />
          </svg>
        )}
      </div>
      {label}
    </button>
  );
}

function TripSteps({ sticky }) {
  const navigate = useNavigate();
  const location = useLocation().pathname.split("/")[2];
  let initialStep;
  let initialIdLoaded;
  let fromWidth, toWidth;

  switch (location) {
    case "create-trip":
      initialStep = 0;
      initialIdLoaded = false;
      fromWidth = "0%";
      toWidth = "0%";
      break;
    case "select-options":
      initialStep = 1;
      initialIdLoaded = false;
      fromWidth = "0%";
      toWidth = "50%";
      break;
    case "confirm-details":
      initialStep = 2;
      initialIdLoaded = true;
      fromWidth = "50%";
      toWidth = "100%";
      break;
    default:
      initialStep = 0;
  }

  const [currentStep, setCurrentStep] = useState(initialStep);
  const changeCurrentStep = (index) => {
    setCurrentStep(index);
  };

  const [idLoaded, setIdLoaded] = useState(initialIdLoaded);
  useEffect(() => {
    setTimeout(() => {
      setIdLoaded(true);
    }, 3000);
  }, []);

  return (
    <div
      className={`relative flex grow items-center justify-center border-b border-solid border-gray-200 bg-white px-4 py-1 ${
        sticky ? `sticky top-0` : ``
      }`}
    >
      {/* Trip id */}
      <div className="absolute left-0 ml-10 flex flex-row items-center gap-3">
        <button className="rounded-lg p-1 text-gray-500 hover:bg-gray-80">
          <Icon name="crossSmall" color="currentColor" />
        </button>
        {currentStep !== 0 && (
          <>
            <span className="w-px self-stretch bg-gray-100"></span>
            <AnimatePresence mode="wait">
              {idLoaded ? (
                <motion.span
                  className="text-caption1 text-gray-700"
                  key="loaded"
                  initial={{ opacity: idLoaded ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                >
                  {`Trip ID: `}
                  <span className="text-body2 font-semibold">1000-1234</span>
                </motion.span>
              ) : (
                <ILSkeleton width="w-24" height="h-2" />
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      {/* Trip steps */}
      <div className="relative flex items-center gap-10">
        <div className="absolute h-0.5 w-full items-center bg-gray-200"></div>
        <motion.div
          layout
          initial={{ width: fromWidth }}
          animate={{ width: toWidth }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "tween",
            ease: "easeOut",
          }}
          className={`absolute h-0.5 items-center bg-orange-300`}
        ></motion.div>
        {tripSteps.map((item, index) => {
          return (
            <TripStep
              key={index}
              label={item.label}
              active={index === currentStep}
              completed={index < currentStep}
              incomplete={index > currentStep}
              penultimate={index < currentStep - 1}
              onClick={() => {
                changeCurrentStep(index);
                navigate(item.link);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

const tripSteps = [
  { label: "Create trip", link: "/travel/create-trip" },
  { label: "Select options", link: "/travel/select-options" },
  { label: "Confirm details", link: "/travel/confirm-details" },
];

export default TripSteps;
