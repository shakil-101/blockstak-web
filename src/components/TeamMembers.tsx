import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const TeamMembers = () => {
  type membersType = {
    name: string;
    designation: string;
    url?: string;
  };

  const teamMembersRef = useRef(null); // Create a ref to track when in view
  const isInView = useInView(teamMembersRef); // Determine if the component is in view
  const [animationTriggered, setAnimationTriggered] = useState(false); // Track if the animation has triggered

  if (isInView && !animationTriggered) {
    setAnimationTriggered(true); // Trigger animation only once
  }

  const [members, setMembers] = useState<membersType[]>([
    {
      designation: "ML Developer",
      name: "Nayeem Khan",
      url: "team.webp",
    },
    {
      designation: "ML Developer",
      name: "Nayeem Khan",
      url: "team.webp",
    },
    {
      designation: "ML Developer",
      name: "Nayeem Khan",
      url: "team.webp",
    },
    {
      designation: "ML Developer",
      name: "Nayeem Khan",
      url: "team.webp",
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/team-members?sort=sortOrder`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setMembers(data.docs);
      }
      console.log("fetch: ", data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div className="lg:py-20 py-10">
      <div className="container mx-auto">
        <h1 className="md:text-[42px] text-3xl font-semibold lg:pb-16 pb-10">
          Our Team
        </h1>
        <motion.div
          ref={teamMembersRef} // Attach ref to track when it's in view
          className=""
        >
          <div className="col-span-2 grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-6">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }} // Start smaller and invisible
                animate={animationTriggered ? { scale: 1, opacity: 1 } : {}} // Animate to full scale and opacity
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className=""
              >
                <div>
                  <Image
                    // src={`${process.env.NEXT_PUBLIC_BASE_URL}${member.url}`}
                    src={`/${member.url}`}
                    alt="Team Member"
                    layout="responsive"
                    width={450}
                    height={450}
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="pt-4 sm:pb-0 pb-4 text-center">
                  <h1 className="text-xl font-medium">{member.name}</h1>
                  <p className="font-light pt-2">{member.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamMembers;
