import React, { useState } from "react";
import RightArrowSVG from "./SVG/RightArrowSVG";
import SubmitButton from "./buttons/SubmitButton";
import { toast } from "react-toastify";
import { motion, Variants } from "framer-motion";

const ContactForm = () => {
  type formDataType = {
    name: string;
    email: string;
    message: string;
  };

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    message: "",
  });

  const submitForm = async (e: any) => {
    e.preventDefault();

    try {
      console.log("req data --: ", formData);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact-messages`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await response.json();
      console.log("post res--: ", data);

      if (!response.ok) {
        // toast.error("Network response was not ok");
        console.log("error res--: ", data.errors[0].message);
      } else {
        toast.success("Message Has Been Sent");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.log("Error fetching data:", error);
    }
  };

  const textVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.7,
        delay: delay * 0.1, // Incremental delay, each item delayed more than the previous
      },
    }),
  };

  return (
    <div id="contact-us" className="lg:pt-28 lg:pb-16 py-10 ">
      <div className="container mx-auto">
        <div className="xl:px-[120px]">
          <h1 className={`sm:text-[35px] text-lg font-medium lg:pb-16 pb-8`}>
            Let’s Start a Conversation
          </h1>

          <form onSubmit={submitForm}>
            <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-10 gap-6 sm:pb-10 pb-6">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={textVariants}
                custom={1}
              >
                <input
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={textVariants}
                custom={2}
              >
                <input
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </motion.div>
            </div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={textVariants}
              custom={3}
              className="sm:pb-10 pb-6"
            >
              <textarea
                required
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                value={formData.message}
                placeholder="Your Message"
                rows={4}
                className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
              />
            </motion.div>
            <div className="sm:flex justify-center">
              <button className="group sm:w-[210px] w-full bg-primaryLight  sm:py-4 py-2 flex items-center justify-center gap-4 rounded border duration-300  border-primaryLight hover:bg-primaryDark hover:border-primaryWhite">
                <span className="sm:text-xl text-lg sm:font-medium">
                  Submit
                </span>
                <div className="group-hover:translate-x-3  duration-300">
                  <RightArrowSVG
                    width="28px"
                    height="28px"
                    fillColor="#F4F4F4"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
