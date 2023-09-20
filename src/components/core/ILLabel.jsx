const ILLabel = (props) => {
  const { label, description } = props;
  return (
    <div className="mb-1">
      <div className="text-body2 font-medium text-gray-700">{label}</div>
      {description ? (
        <div className="mt-0.5 text-caption1 text-gray-500">{description}</div>
      ) : null}
    </div>
  );
};

export default ILLabel;
