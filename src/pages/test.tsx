import JobDetailSkeleton from "@/components/skeletons/JobDetailSkeleton";
import React from "react";

import dynamic from "next/dynamic";
import AllCards from "@/components/Card";

// const ScrollContainer = dynamic(() => import("../components/ScrollContainer"), {
//   ssr: false,
// });
const FadeInComponent = dynamic(() => import("../components/FadeInComponent"), {
  ssr: false,
});
const Banner3 = dynamic(() => import("../components/Banner3"), {
  ssr: false,
});
const TextAnimation = dynamic(() => import("../components/TextAnimation"), {
  ssr: false,
});

const TechStack = dynamic(() => import("../components/TechStack"), {
  ssr: false,
});
const test = () => {
  return (
    <div>
      <div className="container">
        {/* <JobDetailSkeleton /> */}
        <Banner3 />
        <div className="h-[300px]"></div>
        <AllCards />
        <TextAnimation />
        {/* <ScrollContainer /> */}
        {/* <FadeInComponent /> */}
      </div>
    </div>
  );
};

export default test;
