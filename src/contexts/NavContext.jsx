import { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let pnavOpen = true;

  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  const path1 = splitLocation[1];
  const path2 = splitLocation[2];

  if (
    path1 === "" ||
    path1 === "help" ||
    path1 === "notifications" ||
    path2 === "create-trip" ||
    path2 === "select-options" ||
    path2 === "confirm-details"
  ) {
    pnavOpen = false;
  } else {
    console.log("notfullscreen");
  }

  const changeNavOpen = () => {
    setNavOpen(!navOpen);
  };

  document.body.style.overflowY = navOpen ? "hidden" : "auto";

  useEffect(() => {
    const changeScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeScreenWidth);
    return () => {
      window.removeEventListener("resize", changeScreenWidth);
    };
  }, []);

  const value = {
    navOpen,
    setNavOpen,
    changeNavOpen,
    screenWidth,
    setScreenWidth,
    pnavOpen,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export const useNav = () => useContext(NavContext);

export default NavContextProvider;
