function SelectionsBar({ children, expand, changeExpand }) {
  return (
    <>
      <div className="sticky top-0 z-10 flex flex-col items-stretch">
        {expand && (
          <div
            className="fixed h-full w-full bg-gray-900/40"
            onClick={changeExpand}
          ></div>
        )}
        <div className="absolute top-0 z-10 flex w-full flex-row items-start justify-between border-b border-solid border-gray-200 bg-white px-10 py-3">
          {children}
        </div>
      </div>
    </>
  );
}

export default SelectionsBar;
