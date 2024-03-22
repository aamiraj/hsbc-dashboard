import React from "react";
import Image from "next/image";
import Adviser from "../_components/Adviser";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddFund from "../_components/AddFund";

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
                    src={"/assets/af8da771f5eb688450c14d598e835ea6.png"}
                    alt="Mastercard-Logo.png"
                    width={200} height={200}
                  />
                </div>
                <small className=" invisible">invisible</small>
                <div className="flex items-center gap-x-2">
                  <h1 className="text-white text-[16px] font-bold">$25000</h1>
                  <BsArrowUpRightCircleFill style={{ color: "white" }} />
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
            <BsThreeDotsVertical
              style={{ width: 20, height: 20, color: "white" }}
            />
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
                <h1>Total Performance</h1>
                <h1 className="text-[24px] font-bold text-[#BDBDBD]">$0</h1>
              </div>
            </div>
            <BsThreeDotsVertical
              style={{ width: 20, height: 20, color: "white" }}
            />
          </div>
        </div>
      </div>

      {/* cart two  */}
      <Adviser />
      
    </section>
  );
};

export default SituationPage;
