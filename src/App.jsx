import AppNav from "./components/AppNav";
import GlobalNav from "./components/GlobalNav";

function Layout(props) {
  return (
    <div className="flex h-full min-h-full w-full flex-row items-stretch overflow-hidden text-gray-900">
      <AppNav>
        <GlobalNav />
      </AppNav>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div>
      <GlobalNav />
    </div>
  );
}

export default App;
