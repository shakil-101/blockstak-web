import React from "react";
import RightArrowSVG from "../SVG/RightArrowSVG";

const ArrowButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <div className="">
      <button className="group rounded-full flex items-center hover:bg-primaryLight bg-primaryDark overflow-hidden pr-6   ">
        <div className="w-fit group-hover:-mr-14 mr-0 duration-500 ease-in-out bg-primaryLight p-3 rounded-full">
          <RightArrowSVG width="28px" height="28px" fillColor="#F4F4F4" />
        </div>
        <p className="text-primaryWhite text-2xl group-hover:bg-primaryLight bg-primaryDark  overflow-hidden  rounded-full z-10 py-3 pl-5">
          {buttonText}
        </p>
        <div className="w-fit -ml-8 group-hover:ml-2 duration-500">
          <RightArrowSVG width="28px" height="28px" fillColor="#F4F4F4" />
        </div>
      </button>
    </div>
  );
};

export default ArrowButton;
