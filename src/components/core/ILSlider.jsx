import { Slider } from "antd";

const ILSlider = (props) => {
  const { ...restProps } = props;
  return <Slider {...restProps} />;
};

export default ILSlider;
