import { Select } from "antd";

const ILSelect = (props) => {
  const { ...restProps } = props;
  return <Select {...restProps} />;
};

export default ILSelect;
