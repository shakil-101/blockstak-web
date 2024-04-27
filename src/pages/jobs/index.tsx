"use client";
import AllJobs from "@/components/AllJobs";
import ContactForm from "@/components/ContactForm";
import Locations from "@/components/Locations";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Index = () => {
  return (
    <div>
      <AllJobs />
      <Locations />
      {/* <ContactForm /> */}
    </div>
  );
};

export default Index;
