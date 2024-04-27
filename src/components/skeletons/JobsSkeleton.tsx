import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const JobsSkeleton = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#292828" highlightColor="#6B7280">
        <div>
          <div className="border-t  border-secondaryBorder py-8">
            <div className="container flex items-center justify-center lg:space-x-16">
              <div className="w-[23%] lg:block hidden ">
                <Skeleton className="p-28" />
              </div>
              <div className="lg:w-[78%] w-full">
                <Skeleton className="p-28" />
              </div>
            </div>
          </div>
          <div className="border-t  border-secondaryBorder py-8">
            <div className="container flex items-center justify-center lg:space-x-16">
              <div className="w-[23%] lg:block hidden">
                <Skeleton className="p-28" />
              </div>
              <div className="lg:w-[78%] w-full">
                <Skeleton className="p-28" />
              </div>
            </div>
          </div>
          <div className="border-y  border-secondaryBorder py-8">
            <div className="container flex items-center justify-center lg:space-x-16">
              <div className="w-[23%] lg:block hidden">
                <Skeleton className="p-28" />
              </div>
              <div className="lg:w-[78%] w-full">
                <Skeleton className="p-28" />
              </div>
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default JobsSkeleton;
