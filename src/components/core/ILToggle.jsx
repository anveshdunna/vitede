import { ConfigProvider, Switch } from "antd";

const ILToggle = (props) => {
  const { ...restProps } = props;
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ec5d25" } }}>
      <Switch {...restProps} />
    </ConfigProvider>
  );
};

export default ILToggle;
