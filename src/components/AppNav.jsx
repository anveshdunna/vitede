function AppNav(props) {
  return (
    <div className="fixed flex h-screen w-[280px] items-stretch border-[0] border-r border-solid border-gray-200">
      <div className="w-16 flex-none bg-orange-100">Left</div>
      <div className="flex-auto bg-orange-80">Left</div>
      {props.children}
    </div>
  );
}

export default AppNav;
