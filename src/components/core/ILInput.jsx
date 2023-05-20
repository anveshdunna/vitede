import { Input } from "antd";
const ILInput = (props) => {
  const { variant, size, children, ...restProps } = props;

  return <Input {...restProps} />;
};

export default ILInput;
