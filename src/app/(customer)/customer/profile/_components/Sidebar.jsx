import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="border-r border-[#97979A]">
      <h1 className="text-[24px] font-bold mb-7">Step To Follow</h1>
      <div className="flex gap-x-5">
        <ul>
          <li className="flex items-center gap-x-5">
            <svg
              width="35"
              height="35"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#FF0000" />
              <path
                d="M10 21.5L17 28.5L31.5 14"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </li>
          <li className="border-r w-[18px] border-black h-20 flex justify-center"></li>
          <li className="flex items-center gap-x-5">
            <svg
              width="35"
              height="35"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#FF0000" />
              <path
                d="M10 21.5L17 28.5L31.5 14"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </li>
          <li className="border-r w-[18px] border-black h-20 flex justify-center"></li>
          <li className="flex items-center gap-x-5">
            <svg
              width="35"
              height="35"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#FF0000" />
              <path
                d="M10 21.5L17 28.5L31.5 14"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </li>
          <li className="border-r w-[18px] border-black h-20 flex justify-center"></li>
          <li className="flex items-center gap-x-5">
            <svg
              width="35"
              height="35"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#FF0000" />
              <path
                d="M10 21.5L17 28.5L31.5 14"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </li>
          <li className="border-r w-[18px] border-black h-20 flex justify-center"></li>
          <li className="flex items-center gap-x-5">
            <svg
              width="35"
              height="35"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#FF0000" />
              <path
                d="M10 21.5L17 28.5L31.5 14"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </li>
          <li className="border-r w-[18px] border-black h-20 flex justify-center"></li>
          <li className="flex items-center gap-x-5">
            <svg
              width="35"
              height="35"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#FF0000" />
              <path
                d="M10 21.5L17 28.5L31.5 14"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </li>
          <li className="border-r w-[18px] border-black h-20 flex justify-center"></li>
          <li className="flex items-center gap-x-5">
            <svg
              width="35"
              height="35"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#FF0000" />
              <path
                d="M10 21.5L17 28.5L31.5 14"
                stroke="white"
                strokeWidth="4"
              />
            </svg>
          </li>
          
        </ul>
        <ul>
          <li className="h-28">
            {" "}
            <Link href={"/customer/profile/personal-data"}>
              <h1 className="text-[16px] font-bold">Personal Data</h1>
              <p className="text-[13px] font-normal">
                Complete the information
              </p>
              <p className="text-[13px] font-normal">
                {" "}
                Request in the block blow
              </p>
            </Link>
          </li>
          <li className="h-28">
            {" "}
            <Link href="/customer/profile/identity">
              <h1 className="text-[16px] font-bold">Id</h1>
              <p className="text-[13px] font-normal">
                Complete the information
              </p>
              <p className="text-[13px] font-normal">
                {" "}
                Request in the block blow
              </p>
            </Link>
          </li>
          <li className="h-28">
            {" "}
            <Link href="/customer/profile/address">
              <h1 className="text-[16px] font-bold">Address</h1>
              <p className="text-[13px] font-normal">
                Complete the information
              </p>
              <p className="text-[13px] font-normal">
                {" "}
                Request in the block blow
              </p>
            </Link>
          </li>
          <li className="h-28">
            {" "}
            <Link href="/customer/profile/selfie">
              <h1 className="text-[16px] font-bold">Selfie</h1>
              <p className="text-[13px] font-normal">
                Complete the information
              </p>
              <p className="text-[13px] font-normal">
                {" "}
                Request in the block blow
              </p>
            </Link>
          </li>
          <li className="h-28">
            {" "}
            <Link href="/customer/profile/tax-management">
              <h1 className="text-[16px] font-bold">Tax Management</h1>
              <p className="text-[13px] font-normal">
                Complete the information
              </p>
              <p className="text-[13px] font-normal">
                {" "}
                Request in the block blow
              </p>
            </Link>
          </li>
          <li className="h-28">
            {" "}
            <Link href="/customer/profile/bank-info">
              <h1 className="text-[16px] font-bold">Bank Information</h1>
              <p className="text-[13px] font-normal">
                Complete the information
              </p>
              <p className="text-[13px] font-normal">
                {" "}
                Request in the block blow
              </p>
            </Link>
          </li>
          <li className="h-28">
            {" "}
            <Link href="/customer/profile/beneficiaries">
              <h1 className="text-[16px] font-bold">Beneficiaries</h1>
              <p className="text-[13px] font-normal">
                Complete the information
              </p>
              <p className="text-[13px] font-normal">
                {" "}
                Request in the block blow
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
