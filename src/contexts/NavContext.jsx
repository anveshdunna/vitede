import { createContext, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  // Checks the URL, and shows or hides product nav based on it
  let pnavOpen = true;
  const splitLocation = useLocation().pathname.split("/");
  const path1 = splitLocation[1];
  const path2 = splitLocation[2];

  if (
    path1 === "" ||
    path1 === "help" ||
    path1 === "notifications" ||
    path2 === "create-trip" ||
    path2 === "select-options" ||
    path2 === "confirm-details" ||
    path2 === "issue-card" ||
    path2 === "issued-card"
  ) {
    pnavOpen = false;
  } else {
    // do nothing
  }

  // Checks the window width and sets mobile nav conditions
  const [navOpen, setNavOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const changeNavOpen = () => {
    setNavOpen(!navOpen);
  };
  const changeScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeScreenWidth);
    return () => {
      window.removeEventListener("resize", changeScreenWidth);
    };
  }, []);

  document.body.style.overflowY = navOpen ? "hidden" : "auto";

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
