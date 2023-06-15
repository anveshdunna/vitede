import { useEffect, useRef, useState } from "react";

const ILScrollBody = (props) => {
  const { children } = props;
  const topShadow =
    "inset 0px 6px 4px -4px rgba(17, 24, 39, 0.15), inset 0px 5px 1px -4px rgba(17, 24, 39, 0.1)";
  const bottomShadow =
    "inset 0px -6px 4px -4px rgba(17, 24, 39, 0.15), inset 0px -5px 1px -4px rgba(17, 24, 39, 0.1)";
  const noShadow = "none";

  const topRef = useRef();
  const bottomRef = useRef();
  const [topShadowVisible, setTopShadowVisible] = useState();
  const [bottomShadowVisible, setBottomShadowVisible] = useState();

  useEffect(() => {
    if (topRef.current) {
      const parentDiv = topRef.current.parentNode;
      const observerTop = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setTopShadowVisible(entry.isIntersecting);
        },
        { root: parentDiv, rootMargin: "16px", threshold: 1 }
      );
      const observerBottom = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setBottomShadowVisible(entry.isIntersecting);
        },
        { root: parentDiv, rootMargin: "16px", threshold: 1 }
      );
      observerTop.observe(topRef.current);
      observerBottom.observe(bottomRef.current);
    } else return;
  }, []);

  return (
    <div
      className={`scrollbar relative -mb-px -mt-px overflow-y-auto overflow-x-clip pr-[-1rem]`}
      style={{
        boxShadow: topShadowVisible
          ? bottomShadowVisible
            ? noShadow
            : bottomShadow
          : bottomShadowVisible
          ? topShadow
          : `${topShadow}, ${bottomShadow}`,
      }}
    >
      <div ref={topRef}></div>
      {children}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default ILScrollBody;
