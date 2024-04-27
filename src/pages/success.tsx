import Link from "next/link";
import React, { useState } from "react";
import Lottie from "lottie-react";
import Sparkles from "../../public/sparkles.json";

const Success = () => {
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
  };

  const [hideLottie, setHideLottie] = useState(false);

  const handleAnimationComplete = () => {
    setHideLottie(true);
  };

  return (
    <div className="">
      <div className="container flex items-center justify-center py-20 ">
        <Lottie
          className={`${
            hideLottie ? "hidden" : "block"
          } absolute top-0 left-0 w-full h-screen`}
          animationData={Sparkles}
          loop={false}
          onComplete={handleAnimationComplete}
        />
        <div className="max-w-[755px] h-fit bg-[#2E2E2E] lg:p-[60px] p-10 rounded-lg ">
          <h1 className="lg:text-[32px] text-2xl font-medium mb-6 ">
            Thank you for applying to this position!
          </h1>
          <p className="lg:text-2xl text-lg mb-6 ">
            We have successfully received your application. <br /> We will get
            back to you as soon as possible!
          </p>
          <div>
            <Link href={`/`}>
              <button
                className={`bg-primaryLight border-primaryLight  w-full lg:h-[60px] h-[42px] border  rounded-lg lg:text-lg font-medium `}
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
