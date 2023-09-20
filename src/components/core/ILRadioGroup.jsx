import { ConfigProvider, Radio } from "antd";

const ILRadioGroup = (props) => {
  const { children, ...restProps } = props;
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ec5d25" } }}>
      <Radio.Group {...restProps}>{children}</Radio.Group>
    </ConfigProvider>
  );
};

export default ILRadioGroup;
