import Icon from "../assets/Icon";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function TripStep({ label, active, completed, pending, onClick, key }) {
  return (
    <button
      className={`flex flex-row items-center gap-1 rounded-full p-1 pr-2 text-body2 font-medium ${
        pending ? `` : `hover:bg-gray-80`
      } ${
        active
          ? `text-orange-500`
          : completed
          ? `text-gray-700`
          : `text-gray-500`
      }`}
      onClick={onClick}
      disabled={pending}
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        <div
          className={`h-4 w-4 rounded-full border-2 border-solid ${
            active
              ? `border-orange-500 bg-white`
              : completed
              ? `border-gray-300 bg-gray-300`
              : `border-gray-200 bg-white`
          }`}
        ></div>
        {active && (
          <div className="absolute h-1.5 w-1.5 rounded-full bg-orange-500"></div>
        )}
        {completed && (
          <svg
            ariaHidden="true"
            fill="none"
            viewBox="0 0 16 16"
            strokeWidth={2}
            stroke="currentColor"
            className="absolute h-4 w-4 text-white"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.075,
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
  let initialIndex;

  switch (location) {
    case "create-trip":
      initialIndex = 0;
      break;
    case "select-options":
      initialIndex = 1;
      break;
    case "confirm-details":
      initialIndex = 2;
      break;
    default:
      initialIndex = 0;
  }

  const [currentStep, setCurrentStep] = useState(initialIndex);
  const changeCurrentStep = (index) => {
    setCurrentStep(index);
  };

  return (
    <div
      className={`flex grow justify-center gap-4 border-b border-solid border-gray-200 bg-white px-4 py-1 ${
        sticky ? `sticky top-0` : ``
      }`}
    >
      {tripSteps.map((item, index) => {
        return (
          <TripStep
            key={index}
            label={item.label}
            active={currentStep === index}
            completed={index < currentStep}
            pending={index > currentStep}
            onClick={() => {
              changeCurrentStep(index);
              navigate(item.link);
            }}
          />
        );
      })}
    </div>
  );
}

const tripSteps = [
  { label: "Create trip", link: "/travel/create-trip" },
  { label: "Select options", link: "/travel/select-options" },
  { label: "Confirm details", link: "/travel/confirm-details" },
];

export default TripSteps;
