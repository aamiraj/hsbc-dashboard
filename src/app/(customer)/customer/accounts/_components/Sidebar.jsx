"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const path = usePathname();
  const parts = path.split("/");
  const situation = parts[parts.length - 1];

  return (
    <div className="bg-white w-[328px] h-[610px] mt-7 mb-16 mr-10 mx-auto rounded-xl">
      <div className="p-4">
        <h1 className="text-[16px] font-semibold py-5 text-center">
          My Account
        </h1>
        <ul className="border border-[#979797] rounded-xl py-10 ">
          <Link href={"/customer/accounts/situation"}>
            <li
              className={
                situation === "situation"
                  ? "flex gap-x-5 px-10 pt-4 pb-3 mb-4 bg-black text-white"
                  : "flex gap-x-5 px-10   mb-5"
              }
            >
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_63_11883)">
                  <path
                    d="M15.5233 8.94116H8.54418L13.1921 13.5891C13.3698 13.7667 13.6621 13.7812 13.8448 13.6091C14.983 12.5367 15.7659 11.0912 15.9957 9.46616C16.0351 9.18793 15.8042 8.94116 15.5233 8.94116ZM15.0577 7.03528C14.8154 3.52176 12.0077 0.714119 8.49418 0.471767C8.22595 0.453237 8.00006 0.679413 8.00006 0.948236V7.5294H14.5815C14.8504 7.5294 15.0762 7.30352 15.0577 7.03528ZM6.5883 8.94116V1.96206C6.5883 1.68118 6.34153 1.45029 6.06359 1.48971C2.55859 1.985 -0.120524 5.04705 0.00418193 8.71675C0.132417 12.4856 3.37742 15.5761 7.14801 15.5288C8.63036 15.5103 10.0001 15.0326 11.1262 14.2338C11.3586 14.0691 11.3739 13.727 11.1724 13.5256L6.5883 8.94116Z"
                    fill="#C3C4C5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_63_11883">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className=" text-[16px] font-normal -mt-[3px]">
                Situation
              </span>
            </li>
          </Link>
          <Link href={"/customer/accounts/commitment"}>
            <li
              className={
                situation === "commitment"
                  ? "flex gap-x-5 px-10 pt-4 pb-3 mb-4 bg-black text-white"
                  : "flex gap-x-5 px-10  mb-5"
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M3.55556 5.33334H12.4444V10.6667H3.55556V5.33334ZM14.6667 8C14.6667 8.73639 15.2636 9.33334 16 9.33334V12C16 12.7364 15.4031 13.3333 14.6667 13.3333H1.33333C0.596944 13.3333 0 12.7364 0 12V9.33334C0.736389 9.33334 1.33333 8.73639 1.33333 8C1.33333 7.26362 0.736389 6.66667 0 6.66667V4.00001C0 3.26362 0.596944 2.66667 1.33333 2.66667H14.6667C15.4031 2.66667 16 3.26362 16 4.00001V6.66667C15.2636 6.66667 14.6667 7.26362 14.6667 8ZM13.3333 5.11112C13.3333 4.74292 13.0349 4.44445 12.6667 4.44445H3.33333C2.96514 4.44445 2.66667 4.74292 2.66667 5.11112V10.8889C2.66667 11.2571 2.96514 11.5556 3.33333 11.5556H12.6667C13.0349 11.5556 13.3333 11.2571 13.3333 10.8889V5.11112Z"
                  fill="#595959"
                />
              </svg>
              <span className=" text-[16px] font-normal -mt-[3px]">
                Commitment
              </span>
            </li>
          </Link>
          <Link href={"/customer/accounts/historical"}>
            <li
              className={
                situation === "historical"
                  ? "flex gap-x-5 px-10 pt-4 pb-3 mb-4 bg-black text-white"
                  : "flex gap-x-5 px-10   mb-5"
              }
            >
              {" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_11_2935)">
                  <path
                    opacity="0.4"
                    d="M5.50187 14.1984C5.50219 14.395 5.56031 14.5875 5.66937 14.7512L6.20344 15.5541C6.29467 15.6913 6.41841 15.8038 6.56366 15.8817C6.7089 15.9596 6.87114 16.0003 7.03594 16.0003H8.96438C9.12917 16.0003 9.29141 15.9596 9.43665 15.8817C9.5819 15.8038 9.70564 15.6913 9.79688 15.5541L10.3309 14.7512C10.44 14.5875 10.4982 14.3952 10.4984 14.1984L10.4997 13H5.50031L5.50187 14.1984ZM2.5 5.49999C2.5 6.88655 3.01406 8.15156 3.86125 9.11812C4.3775 9.70718 5.185 10.9378 5.49281 11.9759C5.49406 11.9841 5.495 11.9922 5.49625 12.0003H10.5037C10.505 11.9922 10.5059 11.9844 10.5072 11.9759C10.815 10.9378 11.6225 9.70718 12.1388 9.11812C12.9859 8.15156 13.5 6.88655 13.5 5.49999C13.5 2.45655 11.0284 -0.00938269 7.98281 -7.68921e-06C4.795 0.00967981 2.5 2.5928 2.5 5.49999ZM8 2.99999C6.62156 2.99999 5.5 4.12155 5.5 5.49999C5.5 5.77624 5.27625 5.99999 5 5.99999C4.72375 5.99999 4.5 5.77624 4.5 5.49999C4.5 3.56999 6.07 1.99999 8 1.99999C8.27625 1.99999 8.5 2.22374 8.5 2.49999C8.5 2.77624 8.27625 2.99999 8 2.99999Z"
                    fill="#595959"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11_2935">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className=" text-[16px] font-normal -mt-[3px]">
                Historical
              </span>
            </li>
          </Link>
          <Link href={"/customer/accounts/movement"}>
            <li
              className={
                situation === "movement"
                  ? "flex gap-x-5 px-10 pt-4 pb-3 mb-4 bg-black text-white"
                  : "flex gap-x-5 px-10  mb-5"
              }
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M2.4 5.2C3.2825 5.2 4 4.4825 4 3.6C4 2.7175 3.2825 2 2.4 2C1.5175 2 0.8 2.7175 0.8 3.6C0.8 4.4825 1.5175 5.2 2.4 5.2ZM13.6 5.2C14.4825 5.2 15.2 4.4825 15.2 3.6C15.2 2.7175 14.4825 2 13.6 2C12.7175 2 12 2.7175 12 3.6C12 4.4825 12.7175 5.2 13.6 5.2ZM14.4 6H12.8C12.36 6 11.9625 6.1775 11.6725 6.465C12.68 7.0175 13.395 8.015 13.55 9.2H15.2C15.6425 9.2 16 8.8425 16 8.4V7.6C16 6.7175 15.2825 6 14.4 6ZM8 6C9.5475 6 10.8 4.7475 10.8 3.2C10.8 1.6525 9.5475 0.4 8 0.4C6.4525 0.4 5.2 1.6525 5.2 3.2C5.2 4.7475 6.4525 6 8 6ZM9.92 6.8H9.7125C9.1925 7.05 8.615 7.2 8 7.2C7.385 7.2 6.81 7.05 6.2875 6.8H6.08C4.49 6.8 3.2 8.09 3.2 9.68V10.4C3.2 11.0625 3.7375 11.6 4.4 11.6H11.6C12.2625 11.6 12.8 11.0625 12.8 10.4V9.68C12.8 8.09 11.51 6.8 9.92 6.8ZM4.3275 6.465C4.0375 6.1775 3.64 6 3.2 6H1.6C0.7175 6 0 6.7175 0 7.6V8.4C0 8.8425 0.3575 9.2 0.8 9.2H2.4475C2.605 8.015 3.32 7.0175 4.3275 6.465Z"
                  fill="#595959"
                />
              </svg>
              <span className=" text-[16px] font-normal -mt-[3px]">
                Movement
              </span>
            </li>
          </Link>
          <Link href={"/customer/accounts/terms"}>
            <li
              className={
                situation === "terms"
                  ? "flex gap-x-5 px-10 pt-4 pb-3 mb-4 bg-black text-white"
                  : "flex gap-x-5 px-10 mb-5"
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.9937 9.01875L9.5 15L8.5 10.75L9.5 9H6.5L7.5 10.75L6.5 15L5.00625 9.01875C2.77812 9.125 1 10.9469 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.9469 13.2219 9.125 10.9937 9.01875Z"
                  fill="#595959"
                />
              </svg>
              <span className=" text-[16px] font-normal -mt-[3px]">Terms</span>
            </li>
          </Link>
        </ul>
        <div className="mt-5 cursor-pointer">
          <svg
            width="168"
            height="37"
            viewBox="0 0 168 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="167.5" height="37" rx="8" fill="#D2FFD7" />
            <path d="M127.25 11V23.5" stroke="black" strokeWidth="2" />
            <path d="M133.5 17.25L121 17.25" stroke="black" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
