import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Poppins, Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const MissionAndVision = () => {
  const ref = useRef(null); // Create a ref for the component
  const isInView = useInView(ref); // Track visibility with useInView
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if animation has run

  if (isInView && !animationTriggered) {
    setAnimationTriggered(true); // Only trigger animation once
  }

  type dataType = {
    description?: string;
    featuredImage1?: { url: string };
    featuredImage2?: { url: string };
  };

  const [data, setData] = useState<dataType>();

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
        setData(data.docs[0]);
      }
      console.log("fetch mission: ", data.docs[0]);
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
      initial={{ opacity: 0, x: 80 }} // Start off-screen and invisible
      animate={animationTriggered ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }} // Animation duration
      className="lg:py-20 py-10 "
    >
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-2 gap-14">
          <div>
            <div>
              {data && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.featuredImage1?.url}`}
                  alt="Mission and vision"
                  layout="responsive"
                  width={450}
                  height={450}
                  className="w-full"
                />
              )}
            </div>
            <div className="pt-20">
              <h1 className="md:text-[42px] text-3xl font-semibold">
                Our Mission & Vision
              </h1>
              <p className="md:text-2xl text-lg font-medium pt-10 lg:pr-20">
                {data?.description}
              </p>
            </div>
          </div>

          <div className="lg:block hidden">
            <div className="pt-24">
              {data && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${data?.featuredImage2?.url}`}
                  alt="Mission and vision"
                  layout="responsive"
                  width={450}
                  height={450}
                  className="w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionAndVision;
