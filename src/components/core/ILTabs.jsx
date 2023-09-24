import { ConfigProvider, Tabs } from "antd";

const ILTabs = (props) => {
  const { ...restProps } = props;
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ec5d25" } }}>
      <Tabs className="custom-tabs" {...restProps} />
    </ConfigProvider>
  );
};

export default ILTabs;
