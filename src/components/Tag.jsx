function Tag(props) {
  return (
    <div className="text-caption1 py-1 px-2 rounded-full border border-gray-200-value bg-white border-solid font-medium">
      {props.children}
    </div>
  );
}

export default Tag;
