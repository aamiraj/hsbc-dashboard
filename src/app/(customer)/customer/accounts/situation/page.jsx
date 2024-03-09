import React from "react";
import image from "../../../../../images/af8da771f5eb688450c14d598e835ea6.png";
import Image from "next/image";
import Adviser from "../_components/Adviser"

const SituationPage = () => {
  return (
    <section className="flex gap-x-10">
      <div className="bg-white w-[440px] h-[610px] mt-7 mb-16 rounded-xl">
        <h1 className="text-[16px] font-semibold py-5 text-center">
          Account Status
        </h1>
        <div className="border border-[#979797] rounded-xl m-8">
          <div className="px-4 pt-6">
            <div className="flex justify-between">
              <h1 className=" font-bold">Fund Available</h1>
              <h1 className="text-[#FF002E] text-[22px] font-extrabold">
                $240,399
              </h1>
            </div>
            <div className="bg-[#FB3F6C] rounded flex justify-between mt-4 mb-5">
              <div className="p-4 text-white">
                <h1 className="text-sm font-medium">Account type</h1>
                <h2 className="text-[16px] font-bold">Debit Card</h2>
                <h2 className="text-sm">**** **** **** 2598</h2>
              </div>
              <div className="p-4">
                <div className="flex justify-end">

                <Image
                  src={image}
                  alt="Mastercard-Logo.png"
                  className="w-[43px] h-[24px]"
                />
                </div>
                 <small className=" invisible">invisible</small>
                <div className="flex gap-x-2">
                  <h1 className="text-white text-[16px] font-bold">$25000</h1>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="white" />
                    <path
                      d="M8.66675 15.3333L15.3334 8.66667"
                      stroke="#299D91"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.66675 8.66667H15.3334V15.3333"
                      stroke="#299D91"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white rounded-2xl mx-8">
          <div className="px-3 py-4 flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-[#369FFF]/20 p-[10px] rounded"
              >
                <path
                  d="M10 22V15.65L11.625 11H20.375L22 15.65V22H20V20.5H12V22H10ZM12 14.5H20L19.3 12.5H12.7L12 14.5ZM13 18.5C13.2833 18.5 13.521 18.404 13.713 18.212C13.9043 18.0207 14 17.7833 14 17.5C14 17.2167 13.9043 16.9793 13.713 16.788C13.521 16.596 13.2833 16.5 13 16.5C12.7167 16.5 12.4793 16.596 12.288 16.788C12.096 16.9793 12 17.2167 12 17.5C12 17.7833 12.096 18.0207 12.288 18.212C12.4793 18.404 12.7167 18.5 13 18.5ZM19 18.5C19.2833 18.5 19.5207 18.404 19.712 18.212C19.904 18.0207 20 17.7833 20 17.5C20 17.2167 19.904 16.9793 19.712 16.788C19.5207 16.596 19.2833 16.5 19 16.5C18.7167 16.5 18.4793 16.596 18.288 16.788C18.096 16.9793 18 17.2167 18 17.5C18 17.7833 18.096 18.0207 18.288 18.212C18.4793 18.404 18.7167 18.5 19 18.5ZM6 14V12H8V14H6ZM11 8V6H13V8H11ZM6 18V16H8V18H6ZM6 22V20H8V22H6ZM2 22V8H7V2H17V9H15V4H9V10H4V22H2ZM11.5 19H20.5V16H11.5V19Z"
                  fill="white"
                />
              </svg>
              <div>
                <h1>Total Amount Invested</h1>
                <h1 className="text-[24px] font-bold text-[#BDBDBD]">$0</h1>
              </div>
            </div>
            <svg
              width="4"
              height="19"
              viewBox="0 0 4 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11_4726)">
                <path
                  d="M2 11.5C3.10457 11.5 4 10.6046 4 9.5C4 8.39543 3.10457 7.5 2 7.5C0.89543 7.5 0 8.39543 0 9.5C0 10.6046 0.89543 11.5 2 11.5Z"
                  fill="#909090"
                />
                <path
                  d="M2 4.5C3.10457 4.5 4 3.60457 4 2.5C4 1.39543 3.10457 0.5 2 0.5C0.89543 0.5 0 1.39543 0 2.5C0 3.60457 0.89543 4.5 2 4.5Z"
                  fill="#909090"
                />
                <path
                  d="M2 18.5C3.10457 18.5 4 17.6046 4 16.5C4 15.3954 3.10457 14.5 2 14.5C0.89543 14.5 0 15.3954 0 16.5C0 17.6046 0.89543 18.5 2 18.5Z"
                  fill="#909090"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_4726">
                  <rect
                    width="4"
                    height="18"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="bg-black text-white rounded-2xl mx-8 mt-8">
          <div className="px-3 py-4 flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-[#369FFF]/20 p-[10px] rounded"
              >
                <path
                  d="M10 22V15.65L11.625 11H20.375L22 15.65V22H20V20.5H12V22H10ZM12 14.5H20L19.3 12.5H12.7L12 14.5ZM13 18.5C13.2833 18.5 13.521 18.404 13.713 18.212C13.9043 18.0207 14 17.7833 14 17.5C14 17.2167 13.9043 16.9793 13.713 16.788C13.521 16.596 13.2833 16.5 13 16.5C12.7167 16.5 12.4793 16.596 12.288 16.788C12.096 16.9793 12 17.2167 12 17.5C12 17.7833 12.096 18.0207 12.288 18.212C12.4793 18.404 12.7167 18.5 13 18.5ZM19 18.5C19.2833 18.5 19.5207 18.404 19.712 18.212C19.904 18.0207 20 17.7833 20 17.5C20 17.2167 19.904 16.9793 19.712 16.788C19.5207 16.596 19.2833 16.5 19 16.5C18.7167 16.5 18.4793 16.596 18.288 16.788C18.096 16.9793 18 17.2167 18 17.5C18 17.7833 18.096 18.0207 18.288 18.212C18.4793 18.404 18.7167 18.5 19 18.5ZM6 14V12H8V14H6ZM11 8V6H13V8H11ZM6 18V16H8V18H6ZM6 22V20H8V22H6ZM2 22V8H7V2H17V9H15V4H9V10H4V22H2ZM11.5 19H20.5V16H11.5V19Z"
                  fill="white"
                />
              </svg>
              <div>
                <h1>Total Amount Invested</h1>
                <h1 className="text-[24px] font-bold text-[#BDBDBD]">$0</h1>
              </div>
            </div>
            <svg
              width="4"
              height="19"
              viewBox="0 0 4 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_11_4726)">
                <path
                  d="M2 11.5C3.10457 11.5 4 10.6046 4 9.5C4 8.39543 3.10457 7.5 2 7.5C0.89543 7.5 0 8.39543 0 9.5C0 10.6046 0.89543 11.5 2 11.5Z"
                  fill="#909090"
                />
                <path
                  d="M2 4.5C3.10457 4.5 4 3.60457 4 2.5C4 1.39543 3.10457 0.5 2 0.5C0.89543 0.5 0 1.39543 0 2.5C0 3.60457 0.89543 4.5 2 4.5Z"
                  fill="#909090"
                />
                <path
                  d="M2 18.5C3.10457 18.5 4 17.6046 4 16.5C4 15.3954 3.10457 14.5 2 14.5C0.89543 14.5 0 15.3954 0 16.5C0 17.6046 0.89543 18.5 2 18.5Z"
                  fill="#909090"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_4726">
                  <rect
                    width="4"
                    height="18"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* cart two  */}
     <Adviser/>
    </section>
  );
};

export default SituationPage;
