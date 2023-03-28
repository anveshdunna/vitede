function SelectionsBar({ children }) {
  return (
    <>
      <div className="flex flex-row sticky top-0 bg-red-100-value px-10 py-4 h-24 z-30">
        {children}
      </div>
    </>
  );
}

export default SelectionsBar;
