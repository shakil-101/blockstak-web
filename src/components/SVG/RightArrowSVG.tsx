import React from "react";

const RightArrowSVG = ({ width, height, fillColor }: any) => {
  return (
    <div>
      <svg
        className={``}
        fill={fillColor}
        width={width}
        height={height}
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_747_122)">
          <path d="M18.8671 12.8334H4.66646V15.1667H18.8671L12.6091 21.4247L14.2588 23.0744L23.3331 14.0001L14.2588 4.92572L12.6091 6.57539L18.8671 12.8334Z" />
        </g>
        <defs>
          <clipPath id="clip0_747_122">
            <rect
              width="28"
              height="28"
              fill="white"
              transform="matrix(-1 0 0 1 27.9999 0)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default RightArrowSVG;
