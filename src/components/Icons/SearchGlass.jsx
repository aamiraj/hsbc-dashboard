import React from "react";

const SearchGlass = ({w, h}) => {
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
        d="M14.5 5C9.25329 5 5 9.25329 5 14.5C5 19.7467 9.25329 24 14.5 24C19.7467 24 24 19.7467 24 14.5C24 9.25329 19.7467 5 14.5 5ZM3 14.5C3 8.14873 8.14873 3 14.5 3C20.8513 3 26 8.14873 26 14.5C26 20.8513 20.8513 26 14.5 26C8.14873 26 3 20.8513 3 14.5Z"
        fill="#1C1C1C33"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2179 21.2179C21.6085 20.8274 22.2416 20.8274 22.6322 21.2179L28.7072 27.2929C29.0977 27.6834 29.0977 28.3166 28.7072 28.7071C28.3166 29.0976 27.6835 29.0976 27.2929 28.7071L21.2179 22.6321C20.8274 22.2416 20.8274 21.6084 21.2179 21.2179Z"
        fill="#1C1C1C33"
      />
    </svg>
  );
};

export default SearchGlass;
