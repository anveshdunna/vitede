import { ConfigProvider, Select } from "antd";

const ILSelect = (props) => {
  const { ...restProps } = props;
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ec5d25" } }}>
      <Select {...restProps} />
    </ConfigProvider>
  );
};

export default ILSelect;
