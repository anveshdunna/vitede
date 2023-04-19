import { Button } from "antd";

const MyButton = (props) => {
  const { variant, size, children, ...restProps } = props;

  // Variants
  const isPrimary = variant === "primary";
  const isPrimarySubtle = variant === "primarySubtle";
  const isSecondary = variant === "secondary";
  const isSecondarySubtle = variant === "secondarySubtle";
  const isDestructive = variant === "destructive";
  const isDestructiveSubtle = variant === "destructiveSubtle";

  // Size
  const isSmall = size === "small";

  // Definitions
  const backgroundColor = isPrimary
    ? "bg-orange-500"
    : isSecondary
    ? "bg-gray-900"
    : isDestructive
    ? "bg-red-500"
    : "bg-white";
  const textColor = isPrimarySubtle
    ? "text-orange-500"
    : isSecondarySubtle
    ? "text-gray-700"
    : isDestructiveSubtle
    ? "text-red-500"
    : "text-white";
  const buttonSize = isSmall
    ? "px-3 py-1.5 h-8 text-caption1"
    : "px-4 py-2.5 h-10 text-body2";

  return (
    <Button
      className={`inline-flex items-center rounded-lg ${backgroundColor} ${textColor} ${buttonSize} min-w-[5rem] align-middle font-['Inter'] font-medium`}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default MyButton;
