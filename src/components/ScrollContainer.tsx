"use client";
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const ScrollContainer = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // inertia: 0.75, // lower inertia for faster response
      });

      // return () => {
      //   locomotiveScroll.destroy();
      // };
    }
  }, []);
  return (
    <div ref={scrollRef} data-scroll-container>
      <div data-scroll-section>
        <h1 data-scroll data-scroll-speed="1">
          Section 1
        </h1>
        <p data-scroll data-scroll-speed="2">
          Content here...
        </p>
      </div>
      <div data-scroll-section>
        <h2 data-scroll data-scroll-speed="3">
          Section 2
        </h2>
        <p data-scroll data-scroll-speed="4">
          More content here...
        </p>
      </div>
    </div>
  );
};

export default ScrollContainer;
