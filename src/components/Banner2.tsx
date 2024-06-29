import React, { useEffect, useRef, useState } from "react";

import { Poppins, Raleway } from "next/font/google";
import Image from "next/image";
import ArrowButton from "./buttons/ArrowButton";
import RightArrowSVG from "./SVG/RightArrowSVG";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const Banner2 = () => {
  const [isLoading1, setLoading1] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);

  const textVariants1: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      y: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 1,
      },
    },
  };
  const textVariants2: Variants = {
    offscreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        duration: 1,
        delay: 0.4,
      },
    },
  };

  return (
    <div className="py-10 min-h-[60vh]  flex items-center justify-center  overflow-hidden">
      <div className="container mx-auto  ">
        <div className="">
          <h1
            id="banner-heading1"
            className={`textbox relative w-fit mx-auto text-primaryWhite lg:text-[74px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold ${raleway.className}`}
          >
            <Image
              src="spiral.svg"
              width={110}
              height={110}
              alt="spiral image"
              className={`spiral-img absolute -left-28 -top-1.5 md:block hidden duration-700 ease-in-out ${
                isLoading1 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading1(false)}
            />
            <Image
              src="spiral.svg"
              width={60}
              height={600}
              alt="spiral image"
              className={`spiral-img absolute -left-16 -top-3 md:hidden duration-700 ease-in-out ${
                isLoading1 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading1(false)}
            />
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={textVariants1}
              className=""
            >
              Get closer to us by
            </motion.p>
            <Image
              src="box.svg"
              width={100}
              height={100}
              alt="box image"
              className={`box-img absolute -right-28 top-0 md:block hidden duration-700 ease-in-out ${
                isLoading2 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading2(false)}
            />
            <Image
              src="box.svg"
              width={60}
              height={60}
              alt="box image"
              className={`box-img absolute -right-16 top-1.5 md:hidden duration-700 ease-in-out ${
                isLoading2 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading2(false)}
            />
          </h1>
          <div
            className={`pt-3 flex items-center justify-center flex-wrap md:gap-4 sm:gap-3 gap-2 lg:text-[74px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold ${raleway.className}`}
          >
            <h1 id="banner-heading2" className="relative py-3 w-fit z-0">
              <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                className=""
                variants={textVariants2}
              >
                Knowing about us
              </motion.p>
              <Image
                src="/float.svg"
                alt="float icon"
                width={250}
                height={250}
                className="absolute sm:bottom-1 bottom-3 right-0 z-[-1] w-20 xs:w-24 sm:w-36 md:w-48 lg:w-64"
                id="float-icon"
              />
            </h1>
          </div>

          <div className="">
            <Image
              src="pie.svg"
              width={120}
              height={100}
              alt="pie image"
              className={`pie-img mx-auto md:block hidden duration-700 ease-in-out ${
                isLoading3 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading3(false)}
            />
            <Image
              src="pie.svg"
              width={70}
              height={70}
              alt="pie image"
              className={`pie-img mx-auto md:hidden duration-700 ease-in-out ${
                isLoading3 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              } `}
              onLoadingComplete={() => setLoading3(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
