import React from "react";

const LeftArrowSVG = ({ width, height, fillColor }: any) => {
  return (
    <div>
      <svg
        className={``}
        fill={fillColor}
        width={width}
        height={height}
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1047_2098)">
          <path d="M8.61925 11.691H20.8657V13.7032H8.61925L14.016 19.1L12.5934 20.5227L4.76785 12.6971L12.5934 4.87158L14.016 6.29422L8.61925 11.691Z" />
        </g>
        <defs>
          <clipPath id="clip0_1047_2098">
            <rect
              width="24.1467"
              height="24.1467"
              fill="white"
              transform="translate(0.74353 0.623779)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LeftArrowSVG;
