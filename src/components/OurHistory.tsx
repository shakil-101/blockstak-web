import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

import { Poppins, Raleway } from "next/font/google";
import Image from "next/image";
import ArrowButton from "./buttons/ArrowButton";
import RightArrowSVG from "./SVG/RightArrowSVG";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const OurHistory = () => {
  const ref = useRef(null); // Create a ref for the component
  const isInView = useInView(ref); // Track visibility with useInView
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if animation has run

  if (isInView && !animationTriggered) {
    setAnimationTriggered(true); // Only trigger animation once
  }

  type paragraphType = {
    text: string;
  };

  const [history, setHistory] = useState<paragraphType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/our-history`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setHistory(data.docs[0]?.paragraph);
      }
      console.log("fetch history: ", data.docs[0]?.paragraph);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      ref={ref} // Attach the ref to track visibility
      initial={{ opacity: 0, y: 80 }} // Start off-screen and invisible
      animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }} // Animation duration
      className="lg:py-20 py-10"
    >
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <h1 className="md:text-[42px] text-3xl font-semibold lg:pb-16 pb-8 leading-normal ">
              Our History
            </h1>
          </div>
          <div className="col-span-2">
            {history.map((item, index) => (
              <p
                key={index}
                className={`md:text-2xl text-lg font-medium ${
                  history.length === index + 1 ? "pb-0" : "pb-10"
                }`}
              >
                {item?.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurHistory;
