import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

const FadeInComponent = () => {
  const ref = useRef<HTMLDivElement>(null); // Specify the type of element you're expecting
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (ref.current) {
      //   const elements = ref.current.children;
      const texts = ref.current.querySelector(".textbox");
      const spiral = ref.current.querySelector(".spiral");
      const pieImage = ref.current.querySelector(".pieImage");

      gsap.fromTo(
        texts,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          duration: 1,
          y: 0,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%", // when the top of the container enters the 90% of the viewport
            end: "bottom 10%", // end when the bottom of the container exits the 10% of the viewport
            toggleActions: "play none none none",
            markers: true, // for debugging
          },
        }
      );

      gsap.fromTo(
        pieImage,
        {
          scale: 0.5, // Starting scale at 50%
        },
        {
          scale: 5, // Target scale at 200%
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom", // Animation starts when the top of the trigger hits the bottom of the viewport
            end: "bottom top", // Animation ends when the bottom of the trigger hits the top of the viewport
            scrub: true, // Smooth transition that links the animation progress to the scrollbar movement
          },
        }
      );

      gsap.to(spiral, {
        rotation: 180, // Full rotation
        duration: 3,

        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top center", // Animation starts when top of the container hits the center of the viewport
          end: "bottom top", // Animation ends when bottom of the container is at the top of the viewport
          scrub: true, // Smooth scrubbing, links animation to the scroll bar movement
        },
        x: 100, // Moves right 100px along the x-axis
        y: -50, // Moves up 50px along the y-axis
      });
    }

    // Cleanup function to kill ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={ref} className="relative bg-red-300">
      <Image
        src="/spiral.svg"
        width={110}
        height={110}
        alt="spiral image"
        className={`spiral `}
      />

      <div className="textbox z-10">
        <div>Scroll to animate</div>
        <div>Fade In Item 1</div>
        <div>Fade In Item 2</div>
        <div>Fade In Item 3</div>
      </div>

      <Image
        src="pie.svg"
        width={70}
        height={70}
        alt="pie image"
        className={`pieImage z-[-1]`}
      />
    </div>
  );
};

export default FadeInComponent;
