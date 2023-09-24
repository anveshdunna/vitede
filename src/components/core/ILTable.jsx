import { ConfigProvider, Slider, Table } from "antd";

const ILTable = (props) => {
  const { ...restProps } = props;

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            borderColor: "#ec5d25",
          },
        },
      }}
    >
      <Table className="custom-table" {...restProps} />
    </ConfigProvider>
  );
};

export default ILTable;
