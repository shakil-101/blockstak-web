"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Head from "next/head";

const PrimaryLayout = ({ children }: any) => {
  const router = useRouter();
  return (
    <div
      className={`bg-primaryDark min-h-screen text-primaryWhite ${poppins.className} flex flex-col justify-between`}
    >
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Blockstak</title>
      </Head>
      <ToastContainer position="top-center" />
      <Header />
      <main className="pt-[100px] ">{children}</main>
      {router.pathname.includes("success") ? <div></div> : <Footer />}
    </div>
  );
};

export default PrimaryLayout;
