import { ConfigProvider, Popover } from "antd";

const ILPopover = (props) => {
  const { ...restProps } = props;

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ec5d25" } }}>
      <Popover {...restProps}></Popover>
    </ConfigProvider>
  );
};

export default ILPopover;
