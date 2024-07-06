"use client";
import React, { useEffect, useState } from "react";
import LocationSVG from "./SVG/LocationSVG";
import RightArrowSVG from "./SVG/RightArrowSVG";
import Image from "next/image";
import Link from "next/link";

import { useDetectClickOutside } from "react-detect-click-outside";
import DownArrowSVG from "./SVG/DownArrowSVG";
import useSWR from "swr";
import { toast } from "react-toastify";
import JobsSkeleton from "./skeletons/JobsSkeleton";

const AllJobs = () => {
  const [activeCategory, setActiveCategory] = useState<String>("");
  const [selectedLocation, setSelectedLocation] = useState<String>("");

  const handleCategory = (category: string) => {
    setActiveCategory(category);
  };

  type jobListType = {
    url?: string;
    title: string;
    shortDescription: string;
    address: string;
    location: string;
    category: string;
    designation: string;

    createdAt?: string;
    updatedAt?: string;
    id?: string;
  };

  const [jobList, setJobList] = useState<jobListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [displayJobs, setDisplayJobs] = useState<jobListType[]>([]);

  const [locationOpened, setLocationOpened] = useState(false);
  const [categoryOpened, setCategoryOpened] = useState(false);

  const closeLocationDropdown = () => {
    setLocationOpened(false);
  };
  const closeCategoryDropdown = () => {
    setCategoryOpened(false);
  };

  const locationRef = useDetectClickOutside({
    onTriggered: closeLocationDropdown,
  });
  const categoryRef = useDetectClickOutside({
    onTriggered: closeCategoryDropdown,
  });

  const fetchData = async () => {
    console.log("process.env.API_URL--", process.env.NEXT_PUBLIC_BASE_URL);

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`
      );
      // if (!response.ok) {
      //   toast.error("Network response was not ok");
      // }
      const data = await response.json();
      console.log("fetch: ", data.docs);
      setJobList(data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (activeCategory && !selectedLocation) {
      const newArray = jobList.filter((job) => {
        return job.category === activeCategory;
      });
      console.log("newArray", newArray);

      setDisplayJobs(newArray);
    } else if (!activeCategory && selectedLocation) {
      const newArray = jobList.filter((job) => {
        return job.location === selectedLocation;
      });
      console.log("newArray", newArray);

      setDisplayJobs(newArray);
    } else if (activeCategory && selectedLocation) {
      const newArray = jobList.filter((job) => {
        return (
          job.category === activeCategory && job.location === selectedLocation
        );
      });
      console.log("newArray", newArray);

      setDisplayJobs(newArray);
    } else {
      setDisplayJobs(jobList);
    }
  }, [activeCategory, selectedLocation, jobList]);

  return (
    <div>
      <div className="pt-20">
        <h1 className="sm:text-[32px] text-2xl sm:font-bold font-semibold text-center mb-3">
          Build Yourself with BlockStak
        </h1>

        <p className=" text-neutralBase text-lg font-medium max-w-[575px] mx-auto text-center">
          Be a part of our team here in Dhaka and become a spearhead of the next
          industrial disruption. Apply now and set out on your upcoming
          high-tech adventure!
          {/* Your gateway to opportunities: Discover a world of possibilities with
          our diverse job listings. Connect, apply, and embark on your next
          professional adventure. */}
        </p>

        {/* ====== filter options ======== */}
        <div className="lg:my-16 my-6">
          <div className="flex items-center justify-center gap-5 h-[59px]">
            {/* ======= job category big screen ========= */}
            <div className="lg:block hidden">
              <div className="max-w-[525px] rounded-full border border-primaryBorder flex items-center justify-between gap-3 px-3 py-2">
                <button
                  onClick={() => handleCategory("")}
                  className={`${
                    activeCategory === ""
                      ? "bg-tertiaryDark"
                      : "bg-primaryDark hover:bg-tertiaryDark "
                  }  rounded-full text-lg font-medium  px-5 h-[43px] duration-300`}
                >
                  All
                </button>
                <button
                  onClick={() => handleCategory("Managerial")}
                  className={`${
                    activeCategory === "Managerial"
                      ? "bg-tertiaryDark"
                      : "bg-primaryDark hover:bg-tertiaryDark"
                  }  rounded-full text-lg font-medium px-5 h-[43px] duration-300`}
                >
                  Managerial
                </button>
                <button
                  onClick={() => handleCategory("Dev")}
                  className={`${
                    activeCategory === "Dev"
                      ? "bg-tertiaryDark"
                      : "bg-primaryDark hover:bg-tertiaryDark"
                  }  rounded-full text-lg font-medium px-5 h-[43px] duration-300`}
                >
                  Dev
                </button>
                <button
                  onClick={() => handleCategory("Design")}
                  className={`${
                    activeCategory === "Design"
                      ? "bg-tertiaryDark"
                      : "bg-primaryDark hover:bg-tertiaryDark"
                  }  rounded-full text-lg font-medium px-5 h-[43px] duration-300 `}
                >
                  Design
                </button>
              </div>
            </div>

            {/* ======= job category small screen ========= */}
            <div className="lg:hidden block relative">
              <div
                onClick={(e) => {
                  e.stopPropagation();

                  setCategoryOpened(!locationOpened);
                }}
                className="w-[125px] lg:h-[59px] h-[40px] px-3 cursor-pointer select-none flex items-center justify-between rounded-full border bg-primaryDark hover:bg-tertiaryDark border-primaryBorder "
              >
                <p className="lg:text-base sm:text-[14px] text-[12px]">
                  {activeCategory ? activeCategory : "All"}
                </p>
                <div className="">
                  <DownArrowSVG />
                </div>
              </div>

              <div
                ref={categoryRef}
                className={`${
                  categoryOpened ? "block " : "hidden"
                }  w-[125px] absolute top-12 left-0 border rounded-lg duration-200 bg-tertiaryDark z-[100] border-primaryBorder  overflow-hidden`}
              >
                <div
                  onClick={() => {
                    setActiveCategory("");
                    setCategoryOpened(!categoryOpened);
                  }}
                  className="lg:text-base sm:text-[14px] text-[12px] cursor-pointer py-2 hover:bg-primaryDark lg:px-5 px-3"
                >
                  All
                </div>

                <div
                  onClick={() => {
                    setActiveCategory("Managerial");
                    setCategoryOpened(!categoryOpened);
                  }}
                  className="lg:text-base sm:text-[14px] text-[12px] cursor-pointer py-2 hover:bg-primaryDark lg:px-5 px-3"
                >
                  Managerial
                </div>

                <div
                  onClick={() => {
                    setActiveCategory("Dev");
                    setCategoryOpened(!categoryOpened);
                  }}
                  className="lg:text-base sm:text-[14px] text-[12px] cursor-pointer py-2 hover:bg-primaryDark lg:px-5 px-3"
                >
                  Dev
                </div>
                <div
                  onClick={() => {
                    setActiveCategory("Design");
                    setCategoryOpened(!categoryOpened);
                  }}
                  className="lg:text-base sm:text-[14px] text-[12px] cursor-pointer py-2 hover:bg-primaryDark lg:px-5 px-3"
                >
                  Design
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setLocationOpened(!locationOpened);
                }}
                className="lg:w-[165px] w-[115px] lg:h-[59px] h-[40px] px-4 cursor-pointer select-none flex items-center justify-between rounded-full border bg-primaryDark hover:bg-tertiaryDark border-primaryBorder "
              >
                <p className="lg:text-base sm:text-[14px] text-[12px]">
                  {selectedLocation ? selectedLocation : "Location"}
                </p>
                <div className="">
                  <DownArrowSVG />
                </div>
              </div>
              <div
                ref={locationRef}
                className={`${
                  locationOpened ? "block " : "hidden"
                } lg:w-[165px] w-[115px] absolute lg:top-16 top-12 left-0 border rounded-lg duration-200 bg-tertiaryDark z-[100] border-primaryBorder  overflow-hidden`}
              >
                <div
                  onClick={() => {
                    setSelectedLocation("");
                    setLocationOpened(!locationOpened);
                  }}
                  className="lg:text-base sm:text-[14px] text-[12px] cursor-pointer py-2 hover:bg-primaryDark px-5"
                >
                  Location
                </div>
                <div
                  onClick={() => {
                    setSelectedLocation("Dhaka");
                    setLocationOpened(!locationOpened);
                  }}
                  className="lg:text-base sm:text-[14px] text-[12px] cursor-pointer py-2 hover:bg-primaryDark px-5"
                >
                  Dhaka
                </div>
                <div
                  onClick={() => {
                    setSelectedLocation("San Jose");
                    setLocationOpened(!locationOpened);
                  }}
                  className="lg:text-base sm:text-[14px] text-[12px] cursor-pointer py-2 hover:bg-primaryDark px-5"
                >
                  San Jose
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====== jobs ======== */}
        <div className="">
          <Link href={`jobs`}>
            <div
              className={`border-b  relative border-secondaryBorder group lg:py-16 py-8`}
            >
              <div className="container grid grid-cols-12 lg:gap-16 lg:gap-y-0 gap-y-6 ">
                <div className="lg:col-span-3 col-span-12 flex lg:justify-end ">
                  <div className="relative overflow-hidden rounded ">
                    <Image
                      src={`/job1.png`}
                      // src={`${
                      //   item.url
                      //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`
                      //     : "/job1.png"
                      // }`}
                      width={360}
                      height={360}
                      // alt={`${item.designation}`}
                      alt={`item.designation`}
                      className="rounded"
                    />

                    <div className="absolute top-0 right-0 h-full w-full opacity-0 group-hover:opacity-100 duration-300 bg-gradient-to-tr from-transparent via-transparent to-[#6b45e67c]"></div>
                  </div>
                </div>
                <div className="lg:col-span-9 col-span-12 ">
                  <div className="max-w-[625px] flex flex-col justify-between  h-full">
                    <div className="">
                      <h1 className="text-[32px] font-bold mb-6 ">
                        {/* {item.designation} */}
                        Frontend Developer
                      </h1>
                      <p className="text-xl font-medium text-neutralBase ">
                        {/* {item.shortDescription} */}
                        We are looking for a Senior Backend Developer to join
                        our team. You will be responsible for building the next
                        generation of our applications. You will be working
                        closely with our product team to build the best possible
                        user experience
                      </p>
                    </div>
                    <div className="flex items-center gap-3 lg:pt-4 pt-6">
                      <LocationSVG />
                      <p className="text-lg font-normal">
                        {/* {item.address} */}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:block hidden">
                <div className="absolute top-0 right-0 h-full w-[105px] duration-300 flex items-center justify-center overflow-hidden">
                  <div className="z-[100]">
                    <RightArrowSVG
                      width="28px"
                      height="28px"
                      fillColor="#F4F4F4"
                    />
                  </div>
                  <div className="absolute top-0 right-0 h-full w-0 group-hover:w-full duration-300  bg-[#6b45e6] z-0"></div>
                </div>
              </div>

              <div className="lg:hidden block mt-12">
                <div className="h-full gap-4 hover:gap-6 duration-300 flex items-center justify-center ">
                  <p className="font-medium ">Apply Now</p>

                  <RightArrowSVG
                    width="28px"
                    height="28px"
                    fillColor="#F4F4F4"
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link href={`jobs`}>
            <div
              className={`border-b  relative border-secondaryBorder group lg:py-16 py-8`}
            >
              <div className="container grid grid-cols-12 lg:gap-16 lg:gap-y-0 gap-y-6 ">
                <div className="lg:col-span-3 col-span-12 flex lg:justify-end ">
                  <div className="relative overflow-hidden rounded ">
                    <Image
                      src={`/job1.png`}
                      // src={`${
                      //   item.url
                      //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`
                      //     : "/job1.png"
                      // }`}
                      width={360}
                      height={360}
                      // alt={`${item.designation}`}
                      alt={`item.designation`}
                      className="rounded"
                    />

                    <div className="absolute top-0 right-0 h-full w-full opacity-0 group-hover:opacity-100 duration-300 bg-gradient-to-tr from-transparent via-transparent to-[#6b45e67c]"></div>
                  </div>
                </div>
                <div className="lg:col-span-9 col-span-12 ">
                  <div className="max-w-[625px] flex flex-col justify-between  h-full">
                    <div className="">
                      <h1 className="text-[32px] font-bold mb-6 ">
                        {/* {item.designation} */}
                        Frontend Developer
                      </h1>
                      <p className="text-xl font-medium text-neutralBase ">
                        {/* {item.shortDescription} */}
                        We are looking for a Senior Backend Developer to join
                        our team. You will be responsible for building the next
                        generation of our applications. You will be working
                        closely with our product team to build the best possible
                        user experience
                      </p>
                    </div>
                    <div className="flex items-center gap-3 lg:pt-4 pt-6">
                      <LocationSVG />
                      <p className="text-lg font-normal">
                        {/* {item.address} */}
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:block hidden">
                <div className="absolute top-0 right-0 h-full w-[105px] duration-300 flex items-center justify-center overflow-hidden">
                  <div className="z-[100]">
                    <RightArrowSVG
                      width="28px"
                      height="28px"
                      fillColor="#F4F4F4"
                    />
                  </div>
                  <div className="absolute top-0 right-0 h-full w-0 group-hover:w-full duration-300  bg-[#6b45e6] z-0"></div>
                </div>
              </div>

              <div className="lg:hidden block mt-12">
                <div className="h-full gap-4 hover:gap-6 duration-300 flex items-center justify-center ">
                  <p className="font-medium ">Apply Now</p>

                  <RightArrowSVG
                    width="28px"
                    height="28px"
                    fillColor="#F4F4F4"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* {loading ? (
            <div>
              <JobsSkeleton />
            </div>
          ) : (
            <div>
              {displayJobs.map((item, index) => (
                <Link key={index} href={`jobs/${item.id}`}>
                  <div
                    className={`${
                      index === 0 ? "border-y" : "border-b"
                    }  relative border-secondaryBorder group lg:py-16 py-8`}
                  >
                    <div className="container grid grid-cols-12 lg:gap-16 lg:gap-y-0 gap-y-6 ">
                      <div className="lg:col-span-3 col-span-12 flex lg:justify-end ">
                        <div className="relative overflow-hidden rounded ">
                          <Image
                            src={`/job1.png`}
                            // src={`${
                            //   item.url
                            //     ? `${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`
                            //     : "/job1.png"
                            // }`}
                            width={360}
                            height={360}
                            // alt={`${item.designation}`}
                            alt={`item.designation`}
                            className="rounded"
                          />

                          <div className="absolute top-0 right-0 h-full w-full opacity-0 group-hover:opacity-100 duration-300 bg-gradient-to-tr from-transparent via-transparent to-[#6b45e67c]"></div>
                        </div>
                      </div>
                      <div className="lg:col-span-9 col-span-12 ">
                        <div className="max-w-[625px] flex flex-col justify-between  h-full">
                          <div className="">
                            <h1 className="text-[32px] font-bold mb-6 ">
                               {item.designation} 
                             
                            </h1>
                            <p className="text-xl font-medium text-neutralBase ">
                             {item.shortDescription} 
                             
                            </p>
                          </div>
                          <div className="flex items-center gap-3 lg:pt-4 pt-6">
                            <LocationSVG />
                            <p className="text-lg font-normal">
                               {item.address} 
                              
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:block hidden">
                      <div className="absolute top-0 right-0 h-full w-[105px] duration-300 flex items-center justify-center overflow-hidden">
                        <div className="z-[100]">
                          <RightArrowSVG
                            width="28px"
                            height="28px"
                            fillColor="#F4F4F4"
                          />
                        </div>
                        <div className="absolute top-0 right-0 h-full w-0 group-hover:w-full duration-300  bg-[#6b45e6] z-0"></div>
                      </div>
                    </div>

                    <div className="lg:hidden block mt-12">
                      <div className="h-full gap-4 hover:gap-6 duration-300 flex items-center justify-center ">
                        <p className="font-medium ">Apply Now</p>

                        <RightArrowSVG
                          width="28px"
                          height="28px"
                          fillColor="#F4F4F4"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
