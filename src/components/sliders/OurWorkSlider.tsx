"use client";

import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import userImage from "../../../public/user.png";
import Image from "next/image";
import { Raleway } from "next/font/google";
import ArrowButton from "../buttons/ArrowButton";
import Link from "next/link";
import RightArrowSVG from "../SVG/RightArrowSVG";
import LeftArrowSVG from "../SVG/LeftArrowSVG";
import LeftArrow2SVG from "../SVG/LeftArrow2SVG";
import RightArrow2SVG from "../SVG/RightArrow2SVG";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const OurWorkSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    prevArrow: <></>,
    nextArrow: <></>,
    afterChange: (currentSlide: number) => {
      setActiveTab(currentSlide);
    },
  };

  type projectsType = {
    title: string;
    shortDescription: string;
    url: string;
    learnMore: string;
  };
  const sliderRef = useRef<Slider>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [projects, setProjects] = useState<projectsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const slideNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const slidePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/our-works`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setProjects(data.docs);
      }
      console.log("fetch: ", data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="products" className="lg:py-20 py-10 ">
      {!isLoading && projects.length !== 0 && (
        <div className="container">
          <div className="">
            <h1
              className={`mb-6 md:text-[42px] text-lg lg:text-center md:font-semibold font-medium text-center ${raleway.className}`}
            >
              Take a Look at our Work
            </h1>

            <div className=" relative">
              <button
                onClick={slidePrev}
                className="absolute top-0 left-0 h-[60%] lg:hidden  z-50"
              >
                <LeftArrow2SVG width="32px" height="32px" fillColor="#565C61" />
              </button>

              <button
                onClick={slideNext}
                className="absolute top-0 right-0 h-[60%] lg:hidden  z-50"
              >
                <RightArrow2SVG
                  width="32px"
                  height="32px"
                  fillColor="#565C61"
                />
              </button>
              <Slider ref={sliderRef} {...settings} className="">
                {projects.map((item, index) => (
                  <div key={index} className="">
                    <div className="grid grid-cols-12 lg:gap-6 px-1 items-center ">
                      <div className="lg:col-span-6 col-span-12 flex justify-center lg:order-2 order-1 ">
                        <div
                          className="aspect-square lg:block hidden "
                          style={{
                            width: "600px",
                            height: "400px",
                            position: "relative",
                          }}
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`}
                            layout="fill"
                            style={{ objectFit: "contain" }}
                            alt={item.title}
                            className=""
                          />
                        </div>
                        <div
                          className="aspect-square lg:hidden"
                          style={{
                            width: "400px",
                            height: "250px",
                            position: "relative",
                          }}
                        >
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`}
                            layout="fill"
                            style={{ objectFit: "contain" }}
                            alt={item.title}
                            className=""
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-6 col-span-12 lg:order-1 order-2 ">
                        <div className="lg:max-w-[470px] max-w-full">
                          <h1
                            className={`lg:text-[30px] text-base md:font-bold font-medium lg:pb-7 pb-3 `}
                          >
                            {item.title}
                          </h1>
                          <p
                            className={`lg:text-2xl text-[12px] md:font-medium font-regular lg:pb-10 pb-4`}
                          >
                            {item.shortDescription}
                          </p>

                          <div className="lg:block hidden">
                            <Link href={`${item.learnMore}`}>
                              <ArrowButton buttonText="Learn more" />
                            </Link>
                          </div>
                          <Link
                            href={`${item.learnMore}`}
                            className="lg:hidden w-fit"
                          >
                            <button className="group rounded-full flex items-center gap-2 bg-primaryLight hover:bg-primaryDark duration-300 px-3 py-1.5 border border-primaryDark hover:border-primaryWhite">
                              <p className="text-sm">Learn more</p>
                              <div className="w-fit group-hover:translate-x-2 duration-300">
                                <RightArrowSVG
                                  width="24px"
                                  height="24px"
                                  fillColor="#F4F4F4"
                                />
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="lg:block hidden">
                <div className="grid grid-cols-2 ">
                  <div></div>
                  <div className="flex items-center gap-6  justify-center">
                    <button
                      onClick={slidePrev}
                      className="bg-tertiaryDark  rounded-full p-2.5"
                    >
                      <LeftArrowSVG
                        width="24px"
                        height="24px"
                        fillColor="#C7C8FE"
                      />
                    </button>
                    <button
                      onClick={slideNext}
                      className="bg-tertiaryDark p-2.5 rounded-full"
                    >
                      <RightArrowSVG
                        width="24px"
                        height="24px"
                        fillColor="#C7C8FE"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWorkSlider;
