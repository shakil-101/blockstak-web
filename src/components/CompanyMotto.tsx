import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const CompanyMotto = () => {
  const ref = useRef(null); // Create a ref to track visibility
  const isInView = useInView(ref); // Determine if the component is in view
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if the animation has triggered

  if (isInView && !animationTriggered) {
    setAnimationTriggered(true); // Only trigger the animation once
  }

  return (
    <div className="lg:py-20 py-10">
      <div className="container mx-auto">
        <motion.div
          ref={ref} // Attach ref to track visibility
          initial={{ scale: 0.8, opacity: 0 }} // Start smaller and fade-in
          animate={animationTriggered ? { scale: 1, opacity: 1 } : {}} // Zoom in when in view
          transition={{ duration: 0.8 }} // Duration of the animation
        >
          <Image
            src="/company-motto.svg"
            alt="Company Motto"
            layout="responsive" // Ensure the image is responsive
            width={450}
            height={450}
            className="w-full md:block hidden" // Ensure full width
          />
          {/* <div className="bg-primaryLight md:h-52 h-44 w-full rounded-xl relative overflow-hidden flex items-center justify-center">
            <Image
              src="/ring.png" // Replace with your image path
              alt="Brightened"
              width={130}
              height={130}
              className="w-auto h-full absolute top-0 left-0" // Ensure full-width image
            />
            <Image
              src="/spring.png" // Replace with your image path
              alt="Brightened"
              width={130}
              height={130}
              className="w-auto h-full absolute top-0 right-0" // Ensure full-width image
            />
            <div className="text-center lg:text-[40px] md:text-[30px] text-[25px] font-semibold z-10">
              <h1>Building in stealth.</h1>
              <h1>Empowered to disrupt</h1>
            </div>
          </div> */}

          <div className=" md:hidden block">
            <div className=" bg-[#3F2D82]  h-36 w-full rounded-xl relative overflow-hidden flex items-center justify-center">
              <Image
                src="/wave.svg" // Replace with your image path
                alt="Brightened"
                width={150}
                height={150}
                className="w-full h-full absolute inset-x-0 bottom-0" // Ensure full-width image
              />
              <div className="text-center lg:text-[40px] md:text-[30px] text-[25px] font-semibold z-10">
                <h1>Building in stealth. Empowered to disrupt</h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyMotto;
