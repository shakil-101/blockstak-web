import Banner2 from "@/components/Banner2";
import CompanyMotto from "@/components/CompanyMotto";
import Locations2 from "@/components/Locations2";
import MissionAndVision from "@/components/MissionAndVision";
import OurHistory from "@/components/OurHistory";
import TeamMembers from "@/components/TeamMembers";
import React from "react";

const about = () => {
  return (
    <div className="overflow-hidden">
      <Banner2 />
      <MissionAndVision />
      {/* <Locations2 /> */}
      <OurHistory />
      <CompanyMotto />
      <TeamMembers />
    </div>
  );
};

export default about;
