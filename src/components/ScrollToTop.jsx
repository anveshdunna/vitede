import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.getElementById("page")?.scrollIntoView();
  }, [pathname]);
  return <>{children}</>;
};

export default ScrollToTop;
