import { createContext, useState, useContext } from "react";

export const ScrollContext = createContext();

const ScrollContextProvider = ({ children }) => {
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const value = {
    scrollDisabled,
    setScrollDisabled,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);

export default ScrollContextProvider;
