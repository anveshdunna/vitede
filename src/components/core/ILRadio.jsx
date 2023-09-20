import { ConfigProvider, Radio } from "antd";

const ILRadio = (props) => {
  const { children, ...restProps } = props;
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ec5d25" } }}>
      <Radio {...restProps}>{children}</Radio>
    </ConfigProvider>
  );
};

export default ILRadio;
