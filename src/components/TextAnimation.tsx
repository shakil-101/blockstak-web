import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const TextAnimation: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null); // Specify that the ref will be attached to a div element

  useEffect(() => {
    if (textRef.current) {
      // Use SplitType to split the text
      const split = new SplitType(textRef.current, {
        types: "lines,words,chars",
        tagName: "span",
      });

      gsap.fromTo(
        split.chars,
        {
          y: "110%",
          rotationZ: "10",
          opacity: 0,
        },
        {
          y: "0%",
          rotationZ: "0",
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
          stagger: 0.1,
        }
      );

      // Optional: Clean up SplitType modifications when component unmounts
      return () => {
        split.revert();
      };
    }
  }, []);

  return <div ref={textRef}>Animate this text with SplitType and GSAP!</div>;
};

export default TextAnimation;
