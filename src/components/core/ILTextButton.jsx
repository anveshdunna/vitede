import { useState } from "react";
import Icon from "../../assets/Icon";

const ILTextButton = (props) => {
  const {
    variant,
    small,
    bgColor,
    inline,
    accordion,
    children,
    onClick,
    ...restProps
  } = props;

  const [accordionOpen, setAccordionOpen] = useState(false);
  const changeAccordionOpen = () => {
    setAccordionOpen(!accordionOpen);
    onClick();
  };

  // Variants
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isCritical = variant === "critical";

  // Size

  // Definitions
  const fontSize = small ? "text-caption1" : "text-body2";
  const textColor = isPrimary
    ? "text-orange-500"
    : isSecondary
    ? "text-gray-700"
    : isCritical
    ? "text-red-500"
    : "text-orange-500";
  const textDecoration = inline ? "underline" : "";
  const padding = small ? "px-1 py-0.5" : "px-2 py-1";
  const margin = small ? "-mx-1 -my-0.5" : "-mx-2 -my-1";
  const backgroundColor = bgColor
    ? `hover:bg-[${bgColor}]`
    : "hover:bg-gray-80 active:bg-gray-100";

  return (
    <button
      className={`inline-flex items-center rounded-lg transition duration-75 ${backgroundColor} ${padding} ${margin} ${textColor} ${fontSize} ${textDecoration} align-middle font-medium`}
      {...restProps}
      onClick={changeAccordionOpen}
    >
      {children}
      {accordion && (
        <Icon
          name="chevronDownSmall"
          className={`ml-0.5 transition duration-75 ${
            accordionOpen ? "rotate-180" : ""
          }`}
          color="currentColor"
        />
      )}
    </button>
  );
};

export default ILTextButton;
