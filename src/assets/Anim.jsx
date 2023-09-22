import Rive from "@rive-app/react-canvas";

export const Spinner = (props) => {
  const { size } = props;

  return (
    <Rive
      src="https://res.cloudinary.com/idonnoi/raw/upload/v1684829231/il-spinner_iyavmq.riv"
      className="h-12 w-12"
    />
  );
};
