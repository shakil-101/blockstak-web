import React, { useState } from "react";
import ArrowButton from "./buttons/ArrowButton";
import RoundArrowSVG from "./SVG/RoundArrowSVG";
import Link from "next/link";
import RightArrowSVG from "./SVG/RightArrowSVG";

const Blogs = () => {
  type blogsType = {
    title: string;
    description: string;
    id?: string;
  };
  const [blogsData, setBlogsData] = useState<blogsType[]>([
    {
      title: "Drio- A Decentralized Data Exchange software",
      description:
        "A state-of-the-art disruptive technology that simplifies B2B Data Exchange",
      id: "234",
    },
    {
      title: "Drio- A Decentralized Data Exchange software",
      description:
        "A state-of-the-art disruptive technology that simplifies B2B Data Exchange",
      id: "234",
    },
    {
      title: "Drio- A Decentralized Data Exchange software",
      description:
        "A state-of-the-art disruptive technology that simplifies B2B Data Exchange",
      id: "234",
    },
    {
      title: "Drio- A Decentralized Data Exchange software",
      description:
        "A state-of-the-art disruptive technology that simplifies B2B Data Exchange",
      id: "234",
    },
  ]);

  return (
    <div className="lg:py-20 py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between md:pb-10 ">
          <h1 className="md:text-[32px] text-lg text-primaryWhite font-medium">
            Blogs
          </h1>
          <div className="lg:block hidden">
            <ArrowButton buttonText="Learn more" />
          </div>
          <div className="lg:hidden ">
            <div className="flex items-center gap-1 ">
              <p className="text-secondaryLight font-medium">View all</p>
              <RightArrowSVG width="18px" height="18px" fillColor="#C7C8FE" />
            </div>
          </div>
        </div>

        <div className="">
          {blogsData.map((item, index) => (
            <div key={index}>
              <Link href={`/`}>
                <div className="bg-[#292828] rounded-lg group shadow-lg hover:shadow-[#C98BEF]/30 duration-300 grid grid-cols-2 gap-5 my-5">
                  <div
                    className={` ${
                      index % 2 ? "order-2" : "order-1"
                    } lg:block hidden`}
                  >
                    <img
                      src="/blogs.svg"
                      alt={item.title}
                      className="w-full h-full rounded-lg"
                    />
                  </div>

                  <div
                    className={`md:p-10 p-5 ${
                      index % 2 ? "order-1" : "order-2"
                    } lg:col-span-1 col-span-2 `}
                  >
                    <div className="grid grid-cols-12">
                      <h1 className="col-span-11 text-primaryWhite md:text-[28px] text-xl font-semibold">
                        {item.title}
                      </h1>

                      <div className="col-span-1 flex justify-end ">
                        <div className="lg:block hidden group-hover:translate-x-2 duration-300">
                          <RoundArrowSVG />
                        </div>
                        <div className="lg:hidden bg-primaryDark w-fit h-fit rounded-full p-1">
                          <RightArrowSVG
                            width="18px"
                            height="18px"
                            fillColor="#C7C8FE"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-primaryWhite text-lg md:font-medium md:pt-8 pt-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
