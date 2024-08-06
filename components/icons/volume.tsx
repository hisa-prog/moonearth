import React from "react";

const Volume = ({ width = 64, height = 64 }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1342_1839)">
        <circle cx="30" cy="30" r="29.1" stroke="white" strokeWidth="1.8" />
        <path
          d="M21.3333 24.4615L29.6059 19.0194C30.2709 18.582 31.1555 19.0589 31.1555 19.8548V40.1452C31.1555 40.9411 30.2709 41.418 29.6059 40.9806L21.3333 35.5385M21.3333 24.4615V35.5385M21.3333 24.4615H18C17.4477 24.4615 17 24.9093 17 25.4615V34.5385C17 35.0907 17.4477 35.5385 18 35.5385H21.3333M36.8033 25.4685C38.6761 29.0035 38.6648 30.9943 36.8033 34.5315M40.7817 22.951C43.7266 28.4656 43.7523 31.5573 40.7817 37.049"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1342_1839">
          <rect width="60" height="60" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Volume;
