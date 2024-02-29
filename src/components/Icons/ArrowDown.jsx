import React from "react";

const ArrowDown = ({w, h}) => {
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
        d="M5.29289 11.2929C5.68342 10.9024 6.31658 10.9024 6.70711 11.2929L16 20.5858L25.2929 11.2929C25.6834 10.9024 26.3166 10.9024 26.7071 11.2929C27.0976 11.6834 27.0976 12.3166 26.7071 12.7071L16.7071 22.7071C16.3166 23.0976 15.6834 23.0976 15.2929 22.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929Z"
        fill="#27A857"
      />
    </svg>
  );
};

export default ArrowDown;
