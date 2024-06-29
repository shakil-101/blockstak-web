"use client";
import React, { useEffect, useRef, useState } from "react";

import { motion, useInView, Variants } from "framer-motion";

const Locations = () => {
  type locationType = {
    address: string;
    email: string;
    phone: string;
  };

  const [dhaka, setDhaka] = useState<locationType>({
    address: "House 141, Lane 1, Baridhara DOHS",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });

  const [dubai, setDubai] = useState<locationType>({
    address: "IZFA Properties, Dubai Silicon Oasis, UAE",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });
  const [sanJose, setSanJose] = useState<locationType>({
    address: "House 141, Lane 1, Baridhara DOHS",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });

  type dataType = {
    city: string;
    location: string;
    email: string;
    phone: string;
  };

  const [addressData, setAddressData] = useState<dataType[]>([
    {
      city: "San Jose",
      email: "support@blockstak.ai",
      location: "House 141, Lane 1, Baridhara DOHS",
      phone: "+880245267882",
    },
    {
      city: "Dhaka",
      email: "support@blockstak.ai",
      location: "House 141, Lane 1, Baridhara DOHS",
      phone: "+880245267882",
    },
  ]);

  const locationsRef1 = useRef(null); // Create a ref to track visibility
  const locationsRef2 = useRef(null); // Create a ref to track visibility
  const isInView1 = useInView(locationsRef1); // Determine if the component is in view
  const isInView2 = useInView(locationsRef1); // Determine if the component is in view
  const [animationTriggered1, setAnimationTriggered1] = useState(false); // Track if the animation has triggered
  const [animationTriggered2, setAnimationTriggered2] = useState(false); // Track if the animation has triggered

  if (isInView1 && !animationTriggered1) {
    setAnimationTriggered1(true); // Only trigger the animation once
  }
  if (isInView2 && !animationTriggered2) {
    setAnimationTriggered2(true); // Only trigger the animation once
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/address`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setAddressData(data.docs);
      }
      console.log("fetch address: ", data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="bg-[#FEFEFE] text-neutral-700">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16">
          <motion.div
            ref={locationsRef1} // Attach ref to track visibility
            className="foreign-address-bg md:py-20 py-10 lg:text-start text-center"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={animationTriggered1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-neutral-800 md:text-[32px] sm:text-lg text-base font-bold pb-2 "
            >
              {addressData[1]?.city}
            </motion.h1>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={animationTriggered1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="py-2"
            >
              <address className="md:text-xl sm:text-base text-sm md:font-medium not-italic">
                {addressData[1]?.location}
              </address>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={animationTriggered1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:pb-24 pb-10"
            >
              {/* <a
                href={`mailto:${addressData[1]?.email}`}
                className="md:text-xl sm:text-base text-sm md:font-medium"
              >
                {addressData[1]?.email}
              </a> */}
            </motion.div>
          </motion.div>

          <motion.div
            ref={locationsRef2} // Attach ref to track visibility
            className="foreign-address-bg2 md:py-20 py-10 lg:text-start text-center"
          >
            <div className="">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={animationTriggered2 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-neutral-800 md:text-[32px] sm:text-lg text-base font-bold pb-2 "
              >
                {addressData[0]?.city}
              </motion.h1>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={animationTriggered2 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="py-2"
              >
                <address className="md:text-xl sm:text-base text-sm md:font-medium not-italic">
                  {addressData[0]?.location}
                </address>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={animationTriggered2 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="lg:pb-24 pb-10"
              >
                {/* <a
                  href={`mailto:${addressData[0]?.email}`}
                  className="md:text-xl sm:text-base text-sm md:font-medium"
                >
                  {addressData[0]?.email}
                </a> */}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
