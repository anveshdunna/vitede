import { ConfigProvider, Slider } from "antd";

const ILSlider = (props) => {
  const { ...restProps } = props;

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ec5d25" } }}>
      <Slider trackStyle={{ backgroundColor: "#ec5d25" }} {...restProps} />
    </ConfigProvider>
  );
};

export default ILSlider;
