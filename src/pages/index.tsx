"use client";

import dynamic from "next/dynamic";

import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import FeedbackSlider from "@/components/sliders/FeedbackSlider";
import Blogs from "@/components/Blogs";
import Projects from "@/components/Projects";
import IntroductionSlider from "@/components/sliders/IntroductionSlider";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import OurWorkSlider from "@/components/sliders/OurWorkSlider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const TechStack = dynamic(() => import("@/components/TechStack"), {
  ssr: false,
});
const Locations = dynamic(() => import("@/components/Locations"), {
  ssr: false,
});
const Banner = dynamic(() => import("@/components/Banner"), {
  ssr: false,
});

export default function Home() {
  return (
    <div
      className={`bg-primaryDark min-h-screen text-primaryWhite ${poppins.className}`}
    >
      <Banner />
      <IntroductionSlider />

      <TechStack />
      {/* <FeedbackSlider /> */}
      {/* <OurWorkSlider /> */}
      {/* <Projects /> */}
      {/* <Blogs /> */}
      <Locations />
    </div>
  );
}
