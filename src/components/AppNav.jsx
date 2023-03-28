import GlobalNav from "./GlobalNav";
import { useNav } from "../contexts/NavContext";

function AppNav(props) {
  const { navOpen, changeNavOpen, screenWidth } = useNav();
  return (
    <>
      {(navOpen || screenWidth > 1200) && (
        <div>
          <div
            className="fixed h-screen w-screen bg-white/80 md:hidden"
            onClick={changeNavOpen}
          ></div>
          <div
            className={`fixed flex h-screen flex-row border-r border-solid border-gray-200 bg-white shadow-leftpanel md:shadow-none`}
          >
            <GlobalNav />
          </div>
        </div>
      )}
    </>
  );
}

export default AppNav;
