import React, { useEffect, useState } from "react";
import FacebookSVG from "./SVG/FacebookSVG";
import LinkedinSVG from "./SVG/LinkedinSVG";
import MessengerSVG from "./SVG/MessengerSVG";
import GithubSVG from "./SVG/GithubSVG";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Footer = () => {
  interface dataType {
    heading: string;
    email: string;
    facebook?: string;
    messenger?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    youtube?: string;
  }

  const [footerData, setFooterData] = useState<dataType>();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/footer`
      );
      const data = await response.json();

      if (!response.ok) {
        console.log("res error", response);
        // toast.error("Network response was not ok");
      } else {
        setFooterData(data.docs[0]);
      }
      console.log("fetch footer: ", data.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="footer-bg">
      <ContactForm />
      <div className="border-t border-[#575959] lg:py-14 py-[60px]   ">
        <div className="container ">
          <div className="xl:px-[120px] backdrop-blur py-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-5">
              <div className="">
                <div className="pb-2">
                  <h1 className="text-2xl font-medium lg:text-start text-center ">
                    Ready to book a meeting?
                  </h1>
                </div>
                <div className="lg:text-start text-center ">
                  <a
                    href={`mailto: support@blockstak.ai`}
                    className="text-2xl font-medium underline"
                  >
                    {/* {footerData?.email} */}
                    support@blockstak.ai
                  </a>
                </div>
              </div>

              <div className="flex items-center lg:justify-end justify-center gap-5">
                {/* {footerData?.facebook && ( */}
                <div className=" hover:scale-125 duration-200">
                  {/* <Link href={footerData.facebook}> */}
                  <Link href={"#"}>
                    <FacebookSVG />
                  </Link>
                </div>
                {/* )} */}

                {/* {footerData?.linkedin && ( */}
                <div className=" hover:scale-125 duration-200">
                  {/* <Link href={footerData.linkedin}> */}
                  <Link href={"#"}>
                    <LinkedinSVG />
                  </Link>
                </div>
                {/* )} */}
              </div>
            </div>

            <div className="lg:hidden h-2 w-48 bg-primaryWhite rounded-full mx-auto mt-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
