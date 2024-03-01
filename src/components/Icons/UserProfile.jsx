import React from "react";

const UserProfile = ({w, h}) => {
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
        d="M16 11C13.7909 11 12 12.7909 12 15C12 17.2091 13.7909 19 16 19C18.2091 19 20 17.2091 20 15C20 12.7909 18.2091 11 16 11ZM10 15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15C22 18.3137 19.3137 21 16 21C12.6863 21 10 18.3137 10 15Z"
        fill="#595959"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V6ZM26 6H6V26H26V6Z"
        fill="#595959"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 20.9999C14.1872 20.9999 12.4282 21.6156 11.0111 22.746C9.59397 23.8765 8.60282 25.4548 8.20001 27.2222C8.07729 27.7607 7.54128 28.0978 7.00281 27.975C6.46433 27.8523 6.12729 27.3163 6.25001 26.7778C6.75352 24.5685 7.99246 22.5957 9.76385 21.1826C11.5352 19.7695 13.734 18.9999 16 18.9999C18.266 18.9999 20.4648 19.7695 22.2362 21.1826C24.0076 22.5957 25.2465 24.5685 25.75 26.7778C25.8727 27.3163 25.5357 27.8523 24.9972 27.975C24.4587 28.0978 23.9227 27.7607 23.8 27.2222C23.3972 25.4548 22.4061 23.8765 20.9889 22.746C19.5718 21.6156 17.8128 20.9999 16 20.9999Z"
        fill="#595959"
      />
    </svg>
  );
};

export default UserProfile;