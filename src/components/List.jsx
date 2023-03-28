function List(props) {
  return (
    <div className="flex flex-row bg-orange-200-value text-caption1">
      <div className="w-4 h-4 bg-orange-300-value"></div>
      {props.children}
    </div>
  );
}

export default List;
