import { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  let pnavOpen = true;

  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");
  const path = splitLocation[2];

  if (path === "create-trip" || path === "select-options") {
    pnavOpen = false;
    console.log(path, pnavOpen);
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
