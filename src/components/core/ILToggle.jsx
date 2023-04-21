import { Switch } from "antd";

const ILToggle = (props) => {
  const { ...restProps } = props;
  return <Switch {...restProps} />;
};

export default ILToggle;
