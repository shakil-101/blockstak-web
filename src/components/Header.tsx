"use client";
import React, { useEffect, useState } from "react";
import MainLogo from "./SVG/MainLogoSVG";
import Image from "next/image";
import Link from "next/link";
import BubbleButton from "./buttons/BubbleButton";
import { usePathname } from "next/navigation";
import HamburgerButton from "./buttons/HamburgerButton";

import { useDetectClickOutside } from "react-detect-click-outside";
import RightArrowSVG from "./SVG/RightArrowSVG";
import DownArrowSVG from "./SVG/DownArrowSVG";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  // console.log({ router });
  // console.log(router.pathname);
  // console.log(router.query.id);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [productDropdown, setProductDropdown] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState("200px");

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpened((prevState) => !prevState);
  };

  const closeSideBar = () => {
    setIsOpened(false);
  };

  const ref = useDetectClickOutside({ onTriggered: closeSideBar });

  useEffect(() => {
    if (productDropdown) {
      setDropdownHeight("380px");
    } else {
      setDropdownHeight("200px");
    }
  }, [productDropdown]);

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 w-full z-[100] py-5 duration-300 overflow-hidden ${
        isOpened
          ? `h-[${dropdownHeight}] bg-tertiaryDark`
          : "md:h-[100px] h-[85px] bg-primaryDark"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between ">
          <div>
            <Link href="/">
              <Image
                className={`relative md:block hidden duration-700 ease-in-out ${
                  isLoading ? " blur-2xl grayscale" : " blur-0 grayscale-0"
                } `}
                src="/blockstak-white.svg"
                alt="Blockstak Logo"
                width={200}
                height={200}
                priority
                onLoadingComplete={() => setLoading(false)}
              />
              <Image
                className={`relative md:hidden duration-700 ease-in-out ${
                  isLoading ? "blur-2xl grayscale" : " blur-0 grayscale-0"
                }`}
                src="/blockstak-white.svg"
                alt="Blockstak Logo"
                width={150}
                height={150}
                priority
                onLoadingComplete={() => setLoading(false)}
              />
            </Link>
          </div>

          <div className="flex items-center">
            <div className="md:block hidden">
              <div className="flex items-center gap-10">
                <div>
                  <Link href={`/about`}>
                    <button
                      className={` hover:text-primaryLight text-xl font-medium duration-200 ${
                        router.pathname.includes("about")
                          ? "text-primaryLight"
                          : "text-white"
                      }`}
                    >
                      About
                    </button>
                  </Link>
                </div>

                <div>
                  <Link href={`/career`}>
                    <button
                      className={` hover:text-primaryLight text-xl font-medium duration-200 ${
                        router.pathname.includes("career")
                          ? "text-primaryLight"
                          : "text-white"
                      }`}
                    >
                      Career
                    </button>
                  </Link>
                </div>

                {/* <div>
                  <Link href={`/#products`}>
                    <button className="text-white hover:text-primaryLight text-xl font-medium duration-200">
                      Products
                    </button>
                  </Link>
                </div> */}

                <div>
                  <Link href={`#contact-us`}>
                    <BubbleButton />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <HamburgerButton
                isOpened={isOpened}
                handleButtonClick={handleButtonClick}
              />
            </div>
          </div>
        </div>

        <div className="md:hidden border-t border-[#9CA3AF] mt-3 p-3">
          <Link href={`/about`}>
            <div
              onClick={() => setIsOpened(false)}
              className="group flex items-center justify-between py-3"
            >
              <button className=" text-primaryWhite group-hover:text-primary  duration-200 text-left">
                About
              </button>
            </div>
          </Link>

          {/* <div className="group ">
            <div
              onClick={() => {
                setProductDropdown(!productDropdown);
              }}
              className={`flex items-center justify-between py-3 ${
                productDropdown ? "underline" : "no-underline"
              }`}
            >
              <button className="text-left">Products</button>
              <div
                className={`${
                  productDropdown ? "rotate-180" : "rotate-0"
                } duration-200`}
              >
                <DownArrowSVG />
              </div>
            </div>
            <div
              className={`${
                productDropdown ? "h-[125px]" : "h-0"
              } duration-300 overflow-hidden `}
            >
              <div className="py-2">
                <button
                  onClick={() => {
                    setProductDropdown(!productDropdown);
                  }}
                  className="text-left pl-5"
                >
                  Product Development
                </button>
              </div>

              <div className="py-2">
                <button
                  onClick={() => {
                    setProductDropdown(!productDropdown);
                    setDropdownHeight("380px");
                  }}
                  className="text-left pl-5"
                >
                  Artificial Intelligence
                </button>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setProductDropdown(!productDropdown);
                    setDropdownHeight("380px");
                  }}
                  className="text-left pl-5"
                >
                  Data Solutions
                </button>
              </div>
            </div>
          </div> */}

          <Link href={`/career`}>
            <div
              onClick={() => setIsOpened(false)}
              className="flex items-center justify-between py-3 group"
            >
              <button className=" text-primaryWhite group-hover:text-primary  duration-200 text-left">
                Career
              </button>
              {/* <div className="">
                <DownArrowSVG />
              </div> */}
            </div>
          </Link>

          <div onClick={() => setIsOpened(false)}>
            <Link href={`#contact-us`}>
              <BubbleButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
