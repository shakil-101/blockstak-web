import React, { useEffect, useState } from "react";
import WhiteShadow from "./SVG/WhiteShadowSVG";
import HtmlSVG from "./SVG/HtmlSVG";
import FireshipSVG from "./SVG/FireshipSVG";
import NetlifySVG from "./SVG/NetlifySVG";
import FigmaSVG from "./SVG/FigmaSVG";
import NpmSVG from "./SVG/NpmSVG";
import AwsSVG from "./SVG/AwsSVG";
import PythonSVG from "./SVG/PythonSVG";
import NodeSVG from "./SVG/NodeSVG";
import JiraSVG from "./SVG/JiraSVG";
import Html3SVG from "./SVG/Html3SVG";

import { Poppins, Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const TechStack = () => {
  type dataType = {
    name: string;
    url?: string;
  };
  const [technologies, setTechnologies] = useState<dataType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/technologies`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setTechnologies(data.docs);
      }
      console.log("fetch: ", data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lg:py-20">
      <div className="container mx-auto">
        <div className="border-t border-[#9CA3AF] relative techstack-white-bg ">
          <h1
            className={` max-w-[500px] mx-auto sm:text-2xl text-sm text-[#F4F4F4] text-center sm:py-[50px] py-5 ${raleway.className}`}
          >
            We produce state of the art technology with our unique technology
            stack
          </h1>
          <div className="flex justify-center flex-wrap w-full ">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="lg:w-2/12 md:w-1/5 w-1/4 md:p-10 sm:p-6 p-4"
              >
                <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:rounded-3xl rounded-xl sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] flex items-center justify-center mx-auto overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${tech.url}`}
                    alt="Technologies"
                    width={150}
                    height={150}
                    className="w-[65%] h-[65%]"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* <div className="grid grid-cols-6 sm:gap-4 gap-2 ">
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:rounded-3xl rounded-xl sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] flex items-center justify-center mx-auto">
              <HtmlSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <FireshipSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <NetlifySVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <FigmaSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <Html3SVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <NpmSVG />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4 sm:mt-20 mt-5">
            <div></div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <AwsSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <PythonSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <NodeSVG />
            </div>
            <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] sm:rounded-3xl rounded-xl flex items-center justify-center mx-auto">
              <JiraSVG />
            </div>
            <div></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
