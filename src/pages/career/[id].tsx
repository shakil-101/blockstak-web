"use client";
import ContactForm from "@/components/ContactForm";
import DisplayRichText from "@/components/DisplayRichText";
import Locations from "@/components/Locations";
import CalendarSVG from "@/components/SVG/CalendarSVG";
import ClockSVG from "@/components/SVG/ClockSVG";
import LocationSVG from "@/components/SVG/LocationSVG";
import RightArrowSVG from "@/components/SVG/RightArrowSVG";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// import escapeHTML from "escape-html";
import { Text } from "slate";
import { formatDeadline } from "../../../utils/momentFormatter";
import JobDetailSkeleton from "@/components/skeletons/JobDetailSkeleton";

const JobDetails = () => {
  const router = useRouter();

  type detailsType = {
    url?: string;
    title: string;
    heading: string;
    shortDescription: string;
    deadline: string;
    address?: string;
    location: string;
    category: string;
    designation?: string;
    lookingFor?: string;
    responsibility: any;
    qualification: any;
    salaryBenefit: any;
    aboutUs: string;
    officeLocation: string;
    workingHours: string;
    workingDays: string;
    createdAt?: string;
    updatedAt?: string;
    id?: string;
  };

  const [details, setDetails] = useState<detailsType>({
    url: "string",
    title: "Blockstak IS LOOKING FOR ONE UI-UX DESIGNER TO JOIN THEIR TEAM",
    heading: "string",
    shortDescription: "string",
    deadline: "31st July 2024",
    address: "Mirpur DOHS, Dhaka",
    location: "Mirpur DOHS, Dhaka",
    category: "string",
    designation: "UI/UX Designer",
    lookingFor:
      "As a UI/UX Designer at Blockstak, you will be responsible for creating compelling and user-centric designs for our digital products and services. You will collaborate closely with cross-functional teams, including product managers, developers, and stakeholders, to conceptualize, prototype, and implement exceptional user experiences. You will be building products and solutions for emerging startups in Silicon Valley.ring",
    responsibility: [
      "Design user flows, wire frames, and pixel-perfect high-fidelity mockups at a high level and build out refined details",
      "Prototype concepts for communication with the business, to aid in sales demos, development, and usability studies",
      "Collaborate with other UX designers to translate requirements for use by Engineering colleagues",
      "Understand and incorporate complex technical and business requirements into elegant design decisions based on data, trends, and industry best practices",
      "Contribute to team standards for “what is good experience design” and design quality, including keeping our UI design pattern library up to date",
      "Design simple, elegant, data-driven, user-centric experiences that delight users",
      "Gather and evaluate user requirements in collaboration with product managers and engineers",
      "Illustrate design ideas using storyboards, process flows, and sitemaps",
      "Design graphic user interface elements, like menus, tabs, and widgets",
      "Develop UI mockups and prototypes that clearly illustrate how sites function and look.",
      "Prepare and present rough drafts to internal teams and key stakeholders",
      "Identify and troubleshoot UX problems",
      "Conduct layout adjustments based on user feedback",
      "Adhere to style standards on fonts, colors, and images",
    ],
    qualification: [
      "Proven experience as a UI/UX Designer or a similar role.",
      "Strong portfolio demonstrating a solid understanding of user-centered design principles and exceptional visual design skills.",
      "Proficiency in design tools such as Sketch, Adobe XD, Figma, or similar software",
      "Knowledge of HTML, CSS, and JavaScript is a plus.",
      "Familiarity with Agile development methodologies.",
      "Excellent communication and presentation skills.",
      "Strong analytical and problem-solving abilities.",
      "Ability to work collaboratively in a fast-paced environment",
    ],
    salaryBenefit: [
      "BDT 40,000 — BDT 60,000 Per Month (based on your experience)",
      "Free lunch and snacks",
      "Two festival bonuses",
      "Industry-standard leave policy",
    ],
    aboutUs:
      "Blockstak is a stealth blockchain startup based in San Jose, California. We are building a team here in Dhaka of which you will be a part. We build Product MVPs for Silicon Valley-based emerging startups.",
    officeLocation: "House 648, Road-9, Mirpur DOHS",
    workingHours: "10AM - 6PM",
    workingDays: "Saturday - Wednesday",
    createdAt: "string",
    updatedAt: "string",
    id: "string",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (jobId: any) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/${jobId}`
      );
      // if (!response.ok) {
      //   toast.error("Network response was not ok");
      // }
      const data = await response.json();
      console.log("fetch: ", data);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   if (router.query.id) {
  //     fetchData(router.query.id);
  //   }
  // }, [router]);

  return (
    <div className="bg-tertiaryDark">
      <div className=" py-20">
        <div className="container">
          {loading ? (
            <div>
              <JobDetailSkeleton />
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-12">
                <div className="lg:col-span-9 col-span-12">
                  <h1 className="lg:text-[32px] text-2xl font-medium pb-3">
                    Title: {details?.designation}
                  </h1>

                  <div className="flex items-center lg:gap-5 gap-3 flex-wrap ">
                    <div className="flex items-center gap-3">
                      <CalendarSVG />
                      <p className="lg:text-lg font-normal">
                        Deadline: {details?.deadline}
                        {/* {formatDeadline(details?.deadline)} */}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <LocationSVG />
                      <p className="lg:text-lg font-normal">
                        {details?.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 col-span-12 lg:mt-0 mt-10">
                  {/* <Link href={`/application/${router.query.id}`}>
                    <div className="lg:flex justify-end">
                      <button className="group sm:w-[210px]  w-full bg-primaryLight  sm:py-3.5 py-2 flex items-center justify-center gap-4 rounded border duration-300  border-primaryLight hover:bg-primaryDark hover:border-primaryWhite">
                        <span className="sm:text-xl text-lg sm:font-medium">
                          Submit
                        </span>
                        <div className="group-hover:translate-x-3  duration-300">
                          <RightArrowSVG
                            width="22px"
                            height="22px"
                            fillColor="#F4F4F4"
                          />
                        </div>
                      </button>
                    </div>
                  </Link> */}
                </div>
              </div>
              <div className="border-t mt-6">
                <h1 className="lg:text-[28px] text-lg font-bold my-12">
                  {details?.title}
                </h1>

                <div className="max-w-[945px]">
                  {/* ======== looking for ======== */}
                  <div className="mb-12">
                    <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                      What we are looking for
                    </h1>
                    <p className="lg:text-2xl font-normal lg:leading-[35px]">
                      {details?.lookingFor}
                    </p>
                  </div>

                  {/* ====== Responsibilities ====== */}
                  <div className="mb-12">
                    <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                      Key Responsibilities
                    </h1>

                    <div className="lg:text-2xl pl-6 leading-[35px]">
                      {/* {details?.responsibility && (
                        <DisplayRichText richText={details.responsibility} />
                      )} */}
                    </div>
                    <ul className="list-disc lg:text-2xl pl-6 leading-[35px] pt-4">
                      {details?.responsibility.map(
                        (item: string, index: number) => (
                          <li key={index} className="mb-3">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* ====== Qualifications ====== */}
                  <div className="mb-12">
                    <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                      Qualifications
                    </h1>

                    <div className=" lg:text-2xl pl-6 leading-[35px]">
                      {/* {details?.qualification && (
                        <DisplayRichText richText={details.qualification} />
                      )} */}
                    </div>
                    <ul className="list-disc lg:text-2xl pl-6 leading-[35px] pt-4">
                      {details?.qualification.map(
                        (item: string, index: number) => (
                          <li key={index} className="mb-3">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* ====== Salary and Benefit ====== */}
                  <div className="mb-12">
                    <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                      Salary and Benefit
                    </h1>

                    <div className=" lg:text-2xl pl-6 leading-[35px]">
                      {/* {details?.salaryBenefit && (
                        <DisplayRichText richText={details.salaryBenefit} />
                      )} */}
                    </div>
                    <ul className="list-disc lg:text-2xl pl-6 leading-[35px] pt-4">
                      {details?.salaryBenefit.map(
                        (item: string, index: number) => (
                          <li key={index} className="mb-3">
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="mb-12">
                    <h1 className="lg:text-[28px] text-lg font-bold pb-4">
                      About Us
                    </h1>
                    <p className="lg:text-2xl font-normal leading-[35px]">
                      {details?.aboutUs}
                    </p>
                  </div>

                  <div className="">
                    <div className="flex items-center gap-3 mb-4">
                      <LocationSVG />
                      <p className="lg:text-2xl font-semibold">
                        Office Location: {details?.officeLocation}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <ClockSVG />
                      <p className="lg:text-2xl font-semibold">
                        Working Hours: {details?.workingHours}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CalendarSVG />
                      <p className="lg:text-2xl font-semibold">
                        Working Days: {details?.workingDays}
                      </p>
                    </div>
                  </div>

                  <p className="lg:text-2xl font-normal leading-[35px] pt-10">
                    Does this role sound like a good fit? Email us at
                    jobs@blockstak.ai <br />
                    Include the role&#39;s title in your subject line. Along
                    with your resume, please send us links that best showcase
                    the relevant things you&#39;ve built and done.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Locations />
      {/* <ContactForm /> */}
    </div>
  );
};

export default JobDetails;
