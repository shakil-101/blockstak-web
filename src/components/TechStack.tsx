import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

const TechStack = () => {
  gsap.registerPlugin(ScrollTrigger);
  const techRef = useRef<HTMLDivElement>(null);
  const logosRefs = useRef<HTMLDivElement[]>([]);

  const isInView = useInView(techRef);

  const [animationTriggered, setAnimationTriggered] = useState(false);

  if (isInView && !animationTriggered) {
    setAnimationTriggered(true); // Trigger animation only once
  }

  type DataType = {
    name: string;
    url?: string;
  };
  const [technologies, setTechnologies] = useState<DataType[]>([
    { name: "tech", url: "tech1.svg" },
    { name: "tech", url: "tech2.svg" },
    { name: "tech", url: "tech3.svg" },
    { name: "tech", url: "tech4.svg" },
    { name: "tech", url: "tech5.svg" },
    { name: "tech", url: "tech6.svg" },
    { name: "tech", url: "tech7.svg" },
    { name: "tech", url: "tech8.svg" },
    { name: "tech", url: "tech9.png" },
    { name: "tech", url: "tech10.png" },
    { name: "tech", url: "tech11.png" },
  ]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/technologies`
      );
      const data = await response.json();
      if (!response.ok) {
        console.error("Network response was not ok:", response);
      } else {
        setTechnologies(data.docs);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  // useEffect(() => {
  //   logosRefs.current = logosRefs.current.slice(0, technologies.length); // Adjust the array size based on the fetched data
  //   logosRefs.current.forEach((logo, index) => {
  //     if (index % 2 === 0) {
  //       // Only apply the animation to even-indexed logos
  //       gsap.fromTo(
  //         logo,
  //         {
  //           y: 0,
  //         },
  //         {
  //           y: -250, // Consistent Y movement for even-indexed logos
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: logo,
  //             start: "top center",
  //             end: "bottom top",
  //             scrub: 2,
  //           },
  //         }
  //       );
  //     } else {
  //       gsap.fromTo(
  //         logo,
  //         {
  //           y: 0,
  //         },
  //         {
  //           y: -150, // Consistent Y movement for even-indexed logos
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: logo,
  //             start: "top center",
  //             end: "bottom top",
  //             scrub: true,
  //           },
  //         }
  //       );
  //     }
  //   });

  //   return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup function to kill ScrollTriggers on unmount
  // }, [technologies]);

  // const addToRefs = (el: HTMLDivElement) => {
  //   if (el && !logosRefs.current.includes(el)) {
  //     logosRefs.current.push(el);
  //   }
  // };

  return (
    <div className="lg:py-20">
      <div className="container mx-auto">
        <motion.div
          ref={techRef}
          className="border-t border-[#9CA3AF] relative techstack-white-bg"
        >
          <h1 className="techHeading max-w-[500px] mx-auto sm:text-2xl text-sm text-[#F4F4F4] text-center sm:py-[50px] py-5">
            We produce state of the art technology with our unique technology
            stack
          </h1>
          <div className="logos flex justify-center flex-wrap w-full">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="lg:w-2/12 md:w-1/5 w-1/4 md:p-10 sm:p-6 p-4"
                // ref={addToRefs}
                initial={{ scale: 0.8, opacity: 0 }} // Start smaller and invisible
                animate={animationTriggered ? { scale: 1, opacity: 1 } : {}} // Animate to full scale and opacity
                transition={{
                  type: "spring",
                  bounce: 0.8,
                  delay: index * 0.2,
                  duration: 1.2,
                  // ease: "easeInOut",
                }}
              >
                <div className="bg-secondaryDark shadow-lg hover:shadow-primaryLight hover:-translate-y-2 duration-200 sm:rounded-3xl rounded-xl sm:w-[80px] w-[40px] sm:h-[80px] h-[40px] flex items-center justify-center mx-auto overflow-hidden">
                  <Image
                    // src={`${process.env.NEXT_PUBLIC_BASE_URL}${tech.url}`}
                    src={`${tech.url}`}
                    alt={tech.name}
                    width={150}
                    height={150}
                    className="w-[65%] h-[65%]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
