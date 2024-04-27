"use client";

import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import userImage from "../../../public/user.png";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const IntroductionSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    prevArrow: <></>,
    nextArrow: <></>,
    afterChange: (currentSlide: number) => {
      setActiveTab(currentSlide);
    },
  };

  type feedBackType = {
    title: string;
    shortDescription: string;
    category: string;
    url: string;
  };
  const sliderRef = useRef<Slider>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [solutions, setSolutions] = useState<feedBackType[]>([]);
  // const [solutions2, setSolutions2] = useState<feedBackType[]>([
  //   {
  //     title: "We build MVPs for Silicon Valley startups.",
  //     shortDescription:
  //       "We're a team of experts who help Silicon Valley startups create Minimum Viable Products (MVPs) that allow them to test their ideas quickly and inexpensively. Our developers and designers work closely with founders to build functional, visually appealing, and user-friendly MVPs using the latest technologies and agile methodologies. ",
  //     category: "Product Development",
  //     url: "/introSlider1.svg",
  //   },
  //   {
  //     title: "We make useful AI-based applications.",
  //     shortDescription:
  //       "We invest our time into state-of-the-art AI technologies and create applications with real-life touchpoints. We want to take the very best of Artificial Intelligence and put it to programs that help humans excel at their tasks and decision-making.",
  //     category: "Artificial Intelligence",
  //     url: "/introSlider2.svg",
  //   },
  //   {
  //     title: "We are exploring the future of Data.",
  //     shortDescription:
  //       "At our core, we're a team of passionate blockchain enthusiasts who are committed to exploring the future of this revolutionary technology. We're constantly researching new use cases and applications for blockchain, and we're always eager to collaborate with other innovators in the space.",
  //     category: "Data Solutions",
  //     url: "/introSlider3.svg",
  //   },
  // ]);

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/our-solutions`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setSolutions(data.docs);
      }
      console.log("fetch solutions : ", data.docs);
    } catch (error) {
      console.error("Error solutions:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lg:py-20 py-10 border-t border-[#9CA3AF] lg:border-primaryDark">
      <div className="mx-auto container">
        <div className="">
          <div className="flex items-center justify-center lg:gap-10 sm:gap-3 gap-1.5">
            {solutions.map((item, index) => (
              <div key={index}>
                <div className="lg:block hidden">
                  <div
                    onClick={() => {
                      setActiveTab(index);
                      goToSlide(index);
                    }}
                    className=" flex items-center gap-4 cursor-pointer select-none"
                  >
                    <div className="w-[56px] h-[56px] border border-primaryLight flex items-center justify-center">
                      <div
                        className={`${
                          activeTab === index ? "scale-100" : "scale-0"
                        } w-5 h-5 bg-primaryLight duration-200`}
                      ></div>
                    </div>
                    <h1 className={`text-2xl font-semibold`}>
                      {item.category}
                    </h1>
                  </div>
                </div>

                <div className="lg:hidden">
                  <button
                    onClick={() => {
                      setActiveTab(index);
                      goToSlide(index);
                    }}
                    className={`${
                      activeTab === index
                        ? "border-tertiaryDark bg-tertiaryDark"
                        : "border-white bg-primaryDark"
                    } border select-none rounded-full sm:px-4 px-2 sm:py-3 py-2 duration-200 sm:text-[12px] text-[10px] sm:font-medium font-base`}
                  >
                    {item.category}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="">
            <Slider ref={sliderRef} {...settings}>
              {solutions.map((item, index) => (
                <div key={index} className="">
                  <div className="grid grid-cols-12 gap-6 pt-10 px-1 items-center ">
                    <div className="lg:col-span-6 col-span-12 flex lg:justify-end justify-center lg:order-2 order-1 ">
                      <div className="md:block hidden">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`}
                          alt={`${item.title}`}
                          width={400}
                          height={300}
                        />
                      </div>
                      <div className="md:hidden">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`}
                          alt={`${item.title}`}
                          width={200}
                          height={300}
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-6 col-span-12 lg:order-1 order-2">
                      <h1
                        className={`lg:text-[30px] text-base md:font-bold font-medium lg:pb-7 pb-3 leading-9`}
                      >
                        {item.title}
                      </h1>
                      <p
                        className={`lg:text-2xl text-[12px] md:font-medium font-regular`}
                      >
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlider;
