import { Raleway } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import ArrowButton from "./buttons/ArrowButton";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Projects = () => {
  type projectsType = {
    id: string;
    title: string;
    shortDescription: string;
    image: string;
  };
  const [allProjects, setAllProjects] = useState<projectsType[]>([
    {
      id: "1234567",
      title: "Good Days",
      shortDescription:
        "Lorem ipsum dolor sit amet consectetur. Ac nec sem et lacus parturient viverra fermentum. Id purus adipiscing sed enim euismod ultrices odio ornare.",
      image: "/project1.png",
    },
  ]);

  return (
    <div className="py-20">
      <div className="container ">
        <div className="">
          <h1
            className={`text-[42px] text-center font-semibold ${raleway.className}`}
          >
            Take a Look at our Work
          </h1>

          {allProjects.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-10 items-center ">
              <div className="col-span-5">
                <h1 className={`text-[42px] font-semibold pb-6`}>
                  {item.title}
                </h1>
                <p className={`text-2xl font-medium pb-9`}>
                  {item.shortDescription}
                </p>
                <div className="">
                  <ArrowButton buttonText="Learn more" />
                </div>
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-5  flex justify-end  ">
                <div
                  className="aspect-square"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  {/* <Image
                    src={`${item.image}`}
                    layout="fill"
                    objectFit="cover"
                    alt={item.title}
                    className=""
                  /> */}
                  <Image
                    src={`${item.image}`}
                    layout="fill"
                    style={{ objectFit: "contain" }}
                    alt={item.title}
                    className=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
