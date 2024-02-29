import React from "react";

const TimeClock = ({w, h}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
        fill="#696D6E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16.5523 8 17 8.44772 17 9V15H23C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17H16C15.4477 17 15 16.5523 15 16V9C15 8.44772 15.4477 8 16 8Z"
        fill="#696D6E"
      />
    </svg>
  );
};

export default TimeClock;
