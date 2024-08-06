import React from "react";

const VolumeMute = ({ width = 64, height = 64 }: any) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1342_1774)">
        <circle cx="30" cy="30" r="29.1" stroke="white" strokeWidth="1.8" />
        <path
          d="M20.2541 24.4615L28.34 19.0431C29.0044 18.5979 29.8966 19.0741 29.8966 19.8739V40.1261C29.8966 40.9259 29.0044 41.4021 28.34 40.9569L20.2541 35.5385M20.2541 24.4615V35.5385M20.2541 24.4615H17C16.4477 24.4615 16 24.9093 16 25.4615V34.5385C16 35.0907 16.4477 35.5385 17 35.5385H20.2541M35.4411 25.4685L44 34.5315M35.4411 34.5315L44 25.4685"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1342_1774">
          <rect width="60" height="60" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default VolumeMute;
