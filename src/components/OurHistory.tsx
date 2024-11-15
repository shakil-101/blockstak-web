import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const OurHistory = () => {
  type ParagraphType = {
    text: string;
  };

  const [history, setHistory] = useState<ParagraphType[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/our-history`
      );
      const data = await response.json();
      if (response.ok) {
        setHistory(data.docs[0]?.paragraph);
      } else {
        console.log("Network response was not ok", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const textVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay * 0.1, // Incremental delay, each item delayed more than the previous
      },
    }),
  };

  return (
    <div className="lg:pb-20 pb-10">
      <div className="container mx-auto">
        <div className="lg:grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <h1 className="md:text-[42px] text-3xl font-semibold lg:pb-16 pb-8 leading-normal">
              Our History
            </h1>
          </div>
          <div className="col-span-2 history-description ">
            {history.map((item, index) => (
              <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={textVariants}
                custom={index} // Pass index as custom prop for dynamic delay
                key={index}
                className={`md:text-2xl text-lg font-medium ${
                  history.length === index + 1 ? "pb-0" : "pb-10"
                }`}
              >
                {item.text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
