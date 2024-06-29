"use client";
import CompanyMotto from "@/components/CompanyMotto";
import Locations2 from "@/components/Locations2";
import React from "react";

import dynamic from "next/dynamic";

const Banner2 = dynamic(() => import("../components/Banner2"), {
  ssr: false,
});
const Banner3 = dynamic(() => import("../components/Banner3"), {
  ssr: false,
});
const OurHistory = dynamic(() => import("../components/OurHistory"), {
  ssr: false,
});
const TeamMembers = dynamic(() => import("../components/TeamMembers"), {
  ssr: false,
});
const MissionAndVision = dynamic(
  () => import("../components/MissionAndVision"),
  {
    ssr: false,
  }
);
const TechStack = dynamic(() => import("../components/TechStack"), {
  ssr: false,
});

const about = () => {
  return (
    <div className="overflow-hidden">
      <Banner2 />

      <MissionAndVision />
      {/* <OurHistory /> */}

      <CompanyMotto />
      <TeamMembers />
    </div>
  );
};

export default about;
