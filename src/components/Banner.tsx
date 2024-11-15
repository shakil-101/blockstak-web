import React, { useState } from "react";

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

const Banner = () => {
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
    <div className="py-10 md:min-h-[80vh] min-h-[65vh]  flex items-center justify-center">
      <div className="container mx-auto ">
        <div className="">
          <h1
            className={`relative w-fit mx-auto text-primaryWhite lg:text-[74px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold ${raleway.className}`}
          >
            <Image
              src="spiral.svg"
              width={110}
              height={110}
              alt="spiral image"
              className={`absolute -left-28 -top-1.5 md:block hidden duration-700 ease-in-out ${
                isLoading1 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading1(false)}
            />
            <Image
              src="spiral.svg"
              width={60}
              height={600}
              alt="spiral image"
              className={`absolute -left-16 -top-3 md:hidden duration-700 ease-in-out ${
                isLoading1 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading1(false)}
            />
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className=""
              variants={textVariants1}
            >
              Building in <span className="text-primary">stealth.</span>
            </motion.p>
            <Image
              src="box.svg"
              width={100}
              height={100}
              alt="box image"
              className={`absolute -right-28 top-0 md:block hidden duration-700 ease-in-out ${
                isLoading2 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading2(false)}
            />
            <Image
              src="box.svg"
              width={60}
              height={60}
              alt="box image"
              className={`absolute -right-16 top-1.5 md:hidden duration-700 ease-in-out ${
                isLoading2 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading2(false)}
            />
          </h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={textVariants2}
            className={`pt-3 flex items-center justify-center flex-wrap md:gap-4 sm:gap-3 gap-2 lg:text-[74px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-semibold ${raleway.className}`}
          >
            <h1 className="py-3  w-fit ">Empowered to</h1>
            <h1 className="md:py-3 py-1 w-fit  float-bg">disrupt.</h1>
          </motion.div>

          <div className="">
            <Image
              src="pie.svg"
              width={120}
              height={100}
              alt="pie image"
              className={`mx-auto md:block hidden duration-700 ease-in-out ${
                isLoading3 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              })`}
              onLoadingComplete={() => setLoading3(false)}
            />
            <Image
              src="pie.svg"
              width={70}
              height={70}
              alt="pie image"
              className={`mx-auto md:hidden duration-700 ease-in-out ${
                isLoading3 ? " blur-2xl grayscale" : " blur-0 grayscale-0"
              } `}
              onLoadingComplete={() => setLoading3(false)}
            />
          </div>

          <div className="flex justify-center pt-5">
            <div className="lg:block hidden">
              <ArrowButton buttonText="Get in touch" />
            </div>
            <Link href={`/`} className="lg:hidden">
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
  );
};

export default Banner;
