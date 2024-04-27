import React, { useState } from "react";

import { Poppins, Raleway } from "next/font/google";
import Image from "next/image";
import ArrowButton from "./buttons/ArrowButton";
import RightArrowSVG from "./SVG/RightArrowSVG";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Locations2 = () => {
  type membersType = {
    name: string;
    position: string;
    image?: string;
  };

  const [members, setMembers] = useState<membersType[]>([
    {
      name: "3",
      position: "Locations",
      image: "rectangle.png",
    },
    {
      name: "3",
      position: "Locations",
      image: "rectangle.png",
    },
    {
      name: "3",
      position: "Locations",
      image: "rectangle.png",
    },
  ]);

  return (
    <div className="lg:py-20 py-10 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 min-h-[550px] bg-tertiaryDark rounded-md p-5 flex justify-start items-end">
            <div className="">
              <h1 className="text-5xl font-bold">{members[0].name}</h1>
              <p className="text-2xl pt-2">{members[0].position}</p>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-6">
            {members.map((member, index) => (
              <div
                key={index}
                className={` ${
                  index + 1 === members.length ? "col-span-2" : "col-span-1"
                } bg-tertiaryDark rounded-md p-5 flex justify-start items-end`}
              >
                <div className="">
                  <h1 className="text-5xl font-bold">{member.name}</h1>
                  <p className="text-2xl pt-2">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations2;
