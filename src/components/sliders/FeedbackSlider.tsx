"use client";

import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import userImage from "../../../public/user.png";
import Image from "next/image";
import { Raleway } from "next/font/google";
import LeftArrow2SVG from "../SVG/LeftArrow2SVG";
import LeftArrowSVG from "../SVG/LeftArrowSVG";
import RightArrow2SVG from "../SVG/RightArrow2SVG";
import { toast } from "react-toastify";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// import { FontAwesomeIcon } from "fortawesome/react-fontawesome";

const FeedbackSlider = () => {
  const sliderRef = useRef<Slider>(null);

  type feedBackType = {
    feedback: string;
    name: string;
    designation: string;
    url: string;
  };
  const [feedbacks, setFeedbacks] = useState<feedBackType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    prevArrow: <> </>,
    nextArrow: <></>,
  };

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
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonials`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setFeedbacks(data.docs);
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
    <div className="lg:py-20 py-10">
      {!isLoading && feedbacks.length !== 0 && (
        <div className="container">
          <div className="bg-tertiaryDark lg:px-20 px-8 py-10 rounded-lg relative">
            <h2 className="md:text-[32px] px-3 text-lg lg:text-center md:font-bold font-medium">
              Let’s hear it from Our Clients
            </h2>
            <Slider ref={sliderRef} {...settings}>
              {feedbacks.map((item, index) => (
                <div
                  key={index}
                  className="lg:px-20 sm:px-5 px-3  lg:pt-20 pt-10  "
                >
                  <p
                    className={`min-h-[100px]  md:text-2xl text-sm font-medium lg:text-center ${raleway.className}`}
                  >
                    {item.feedback}
                  </p>

                  <div className="mx-auto lg:w-fit flex items-center gap-8 lg:pt-16 pt-8">
                    <div className="lg:block hidden">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`}
                        width={90}
                        height={90}
                        alt={`${item.name}`}
                        className="rounded-full"
                        placeholder="blur"
                        blurDataURL={`${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`}
                      />
                    </div>
                    <div>
                      <h1
                        className={`md:text-2xl text-base font-semibold pb-2`}
                      >
                        {item.name}
                      </h1>
                      <h2 className={`md:text-xl text-sm md:font-medium`}>
                        {item.designation}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <button
              onClick={slidePrev}
              className=" absolute top-0 left-0 h-full  md:pl-5 pl-1"
            >
              <LeftArrow2SVG width="32px" height="32px" fillColor="#565C61" />
            </button>

            <button
              onClick={slideNext}
              className=" absolute top-0 right-0 h-full md:pr-5 pr-1"
            >
              <RightArrow2SVG width="32px" height="32px" fillColor="#565C61" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackSlider;
