import React from "react";
import { useRef, useEffect } from "react";
import { BusinessCard } from "./BusinessCard";

export const SplitScreen = () => {
  const scrollableRef = useRef(null);
  const fixedRef = useRef(null);

  // useEffect(() => {
  //   const fixedDiv = fixedRef.current;
  //   const scrollableDiv = scrollableRef.current;

  //   const handleScroll = () => {
  //     // Calculate the scroll ratio and apply it to the scrollable div
  //     const scrollRatio = fixedDiv.scrollTop / fixedDiv.scrollHeight;
  //     console.log("scrollRatio", scrollRatio);
  //     scrollableDiv.scrollTop = scrollableDiv.scrollHeight * scrollRatio;
  //   };

  //   fixedDiv.addEventListener("wheel", handleScroll);

  //   return () => fixedDiv.removeEventListener("wheel", handleScroll);
  // }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <div ref={scrollableRef} className="w-1/2 bg-blue-500 overflow-auto">
        {/* <div className="w-1/2 bg-blue-500 overflow-auto"> */}
        <div className="scrollable h-screen">
          <BusinessCard />
          <p>Scrollable content...</p>
        </div>
      </div>
      <div ref={fixedRef} className="w-1/2 bg-red-500">
        {/* <div className="w-1/2 bg-red-500"> */}
        <div className="not-scrollable h-screen">
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
          <p>Fixed content...</p> <p>Fixed content...</p>{" "}
          <p>Fixed content...</p> <p>Fixed content...</p>
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
