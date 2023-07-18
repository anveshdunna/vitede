import { useState } from "react";
import Icon from "../../assets/Icon";

const ILTextButton = (props) => {
  const { variant, small, inline, accordion, children, onClick, ...restProps } =
    props;

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
    ? "text-orange-500 hover:text-orange-600"
    : isSecondary
    ? "text-gray-700 hover:text-gray-900"
    : isCritical
    ? "text-red-500"
    : "text-orange-500 hover:text-orange-600";
  const textDecoration = inline ? "underline" : "";

  return (
    <button
      className={`inline-flex items-center rounded-lg transition duration-75 ${textColor} ${fontSize} ${textDecoration} align-middle font-medium`}
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
