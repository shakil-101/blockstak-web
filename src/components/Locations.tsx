"use client";
import React, { useEffect, useState } from "react";

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

  const [addressData, setAddressData] = useState<dataType[]>([]);

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
    fetchData();
  }, []);

  return (
    <div className="bg-[#FEFEFE] text-neutral-700">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16">
          <div className="foreign-address-bg md:py-20 py-10 lg:text-start text-center">
            <h1 className="text-neutral-800 md:text-[32px] sm:text-lg text-base font-bold pb-2 ">
              {addressData[1]?.city}
            </h1>

            <div className="py-2">
              <address className="md:text-xl sm:text-base text-sm md:font-medium not-italic">
                {addressData[1]?.location}
              </address>
            </div>

            <div className="lg:pb-24 pb-10">
              <a
                href={`mailto:${addressData[1]?.email}`}
                className="md:text-xl sm:text-base text-sm md:font-medium"
              >
                {addressData[1]?.email}
              </a>
            </div>
          </div>

          <div className="foreign-address-bg2 md:py-20 py-10 lg:text-start text-center  ">
            <div className="">
              <h1 className="text-neutral-800 md:text-[32px] sm:text-lg text-base font-bold pb-2 ">
                {addressData[0]?.city}
              </h1>

              <div className="py-2">
                <address className="md:text-xl sm:text-base text-sm md:font-medium not-italic">
                  {addressData[0]?.location}
                </address>
              </div>

              <div className="lg:pb-24 pb-10">
                <a
                  href={`mailto:${addressData[0]?.email}`}
                  className="md:text-xl sm:text-base text-sm md:font-medium"
                >
                  {addressData[0]?.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
