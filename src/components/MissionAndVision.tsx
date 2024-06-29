"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Poppins, Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MissionAndVision = () => {
  const ourMissionRef = useRef<HTMLDivElement>(null); // Specify the type of element you're expecting
  gsap.registerPlugin(ScrollTrigger);

  type dataType = {
    description?: string;
    featuredImage1?: { url: string };
    featuredImage2?: { url: string };
  };

  const [ourMission, setOurMission] = useState<dataType>();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/mission-and-vision`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setOurMission(data.docs[0]);
      }
      console.log("fetch mission: ", data.docs[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  useEffect(() => {
    if (ourMissionRef.current) {
      const leftImg = ourMissionRef.current.querySelector("#mission-left-img");
      const rightImg =
        ourMissionRef.current.querySelector("#mission-right-img");
      const missionDescription = ourMissionRef.current.querySelector(
        "#mission-description"
      );
      const missionHeading =
        ourMissionRef.current.querySelector("#mission-heading");

      gsap.fromTo(
        rightImg,
        {
          y: 0,
        },
        {
          y: -300, // Consistent Y movement for even-indexed logos
          ease: "none",
          scrollTrigger: {
            trigger: rightImg,
            start: "top center",
            end: "bottom top",
            scrub: 1.5,
            markers: false,
          },
        }
      );
      // gsap.fromTo(
      //   leftImg,
      //   {
      //     y: 0,
      //   },
      //   {
      //     y: -200, // Consistent Y movement for even-indexed logos
      //     ease: "none",
      //     scrollTrigger: {
      //       trigger: leftImg,
      //       start: "top center",
      //       end: "bottom top",
      //       scrub: 1.5,
      //       markers: false,
      //     },
      //   }
      // );

      gsap.fromTo(
        missionHeading,
        {
          y: 0,
        },
        {
          y: -70, // Consistent Y movement for even-indexed logos
          ease: "none",
          scrollTrigger: {
            trigger: missionHeading,
            start: "center center",
            end: "bottom top",
            scrub: 1.5,
            markers: false,
          },
        }
      );
      gsap.fromTo(
        missionDescription,
        {
          y: 0,
        },
        {
          y: -100, // Consistent Y movement for even-indexed logos
          ease: "none",
          scrollTrigger: {
            trigger: missionDescription,
            start: "center center",
            end: "bottom top",
            scrub: 1.5,
            markers: false,
          },
        }
      );
    }

    // Cleanup function to kill ScrollTriggers on unmount
    // return () => {
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
  }, []);

  return (
    <div ref={ourMissionRef} className="lg:pt-20 py-10 ">
      <div className="container mx-auto ">
        <div className="lg:grid grid-cols-2 gap-14 ">
          <div id="mission-left-img">
            <div className="">
              {/* {ourMission && ( */}
              <Image
                // src={`${process.env.NEXT_PUBLIC_BASE_URL}${ourMission?.featuredImage1?.url}`}
                src={`/mission.png`}
                alt="Mission and vision"
                layout="responsive"
                width={450}
                height={450}
                className="w-full "
              />
              {/* )} */}
            </div>
            <div className="pt-20">
              <h1
                className=" md:text-[42px] text-3xl font-semibold"
                // id="mission-heading"
              >
                Our Mission
              </h1>
              <p
                className=" md:text-2xl text-lg font-medium pt-10 lg:pr-20"
                // id="mission-description"
              >
                {/* {ourMission?.description} */}
                Lorem ipsum dolor sit amet consectetur. Ac nec sem et lacus
                parturient viverra fermentum. Id purus adipiscing sed enim
                euismod ultrices odio ornare.
              </p>
            </div>
          </div>

          <div className="block" id="mission-right-img">
            <div className="pt-24">
              {/* {ourMission && ( */}
              <Image
                // src={`${process.env.NEXT_PUBLIC_BASE_URL}${ourMission?.featuredImage2?.url}`}
                src={`/vision.png`}
                alt="Mission and vision"
                layout="responsive"
                width={450}
                height={450}
                className=" w-full"
              />
              {/* )} */}
            </div>
            <div className="pt-20">
              <h1 className=" md:text-[42px] text-3xl font-semibold">
                Our Vision
              </h1>
              <p className=" md:text-2xl text-lg font-medium pt-10 lg:pr-20">
                {/* {ourMission?.description} */}
                Lorem ipsum dolor sit amet consectetur. Ac nec sem et lacus
                parturient viverra fermentum. Id purus adipiscing sed enim
                euismod ultrices odio ornare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
