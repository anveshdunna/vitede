import { Tag } from "antd";

const ILTag = (props) => {
  const { variant, size, children, ...restProps } = props;

  // Size
  const isSmall = size === "small";

  // Definitions
  const tagSize = "p-2";
  return (
    <Tag {...restProps} className={`bg-green-300 ${tagSize}`}>
      {children}
    </Tag>
  );
};

export default ILTag;
