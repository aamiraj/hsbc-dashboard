import React from "react";

const Edit = ({w,h}) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 13.3333H14"
        stroke="#525256"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 2.33333C11.2652 2.06812 11.6249 1.91912 12 1.91912C12.1857 1.91912 12.3696 1.9557 12.5412 2.02677C12.7128 2.09784 12.8687 2.20201 13 2.33333C13.1313 2.46466 13.2355 2.62056 13.3066 2.79214C13.3776 2.96372 13.4142 3.14762 13.4142 3.33333C13.4142 3.51905 13.3776 3.70295 13.3066 3.87453C13.2355 4.04611 13.1313 4.20201 13 4.33333L4.66667 12.6667L2 13.3333L2.66667 10.6667L11 2.33333Z"
        stroke="#525256"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Edit;
