import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const JobDetailSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#6B7280">
        <div>
          <div className="border-b-2 pb-5 border-secondaryBorder">
            <Skeleton className="p-10" />
          </div>
          <Skeleton className="p-4 mt-5" />
          <Skeleton className="p-28 mt-10" />
          <Skeleton className="p-28 mt-10" />
          <Skeleton className="p-28 mt-10" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default JobDetailSkeleton;
