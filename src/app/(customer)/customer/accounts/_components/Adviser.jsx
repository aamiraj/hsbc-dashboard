import Image from "next/image";
import React from "react";
import { FaEnvelope, FaMinus, FaPhone, FaPlus } from "react-icons/fa";

const Adviser = () => {
  return (
    <div>
      <div className="bg-white w-[400px] h-[610px] mt-7 mb-16 rounded-xl">
        <h1 className="text-[16px] font-semibold py-5 text-center">
          Your Advisor
        </h1>
        <div className="flex justify-center mt-3">
          <Image
            src={"/assets/pexels-photo-1133957.webp"}
            alt="image"
            width={200} height={200}
          />
        </div>

        <h1 className="text-[#28B5E1] text-[24px] font-bold text-center my-4">
          West Jackeline
        </h1>
        <div className="flex justify-center  gap-x-2">
          <div>
            <div className="flex gap-x-2">
              <FaPhone />
              <span>4268-2137-2138</span>
            </div>
            <div className="flex gap-x-2">
              <FaEnvelope />
              <span>laurent.florida@global.com</span>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-black rounded-b-lg">
          <div>
            <p className="px-5 py-7 text-[15px] font-medium text-white">
              Take advantage of the lastet tecnologies and dedicated support
              from expert. We are at your disposal to repond positifly to all
              yout expectations
            </p>
          </div>
          <div>
            <h1 className="text-[#FF002E] text-[18px] font-bold text-center">
              FUND MANAGEMENT
            </h1>
          </div>
          <div className="flex justify-center gap-4 pb-12 pt-6">
            <button type="button" className="flex justify-center items-center gap-x-2 bg-[#FF002E] rounded w-[121px] text-white h-[35px]">
              <FaPlus />
              <span className="text-xs">Add</span>
            </button>
            <button type="button" className="flex justify-center items-center gap-x-2 bg-[#FF002E] rounded w-[121px] text-white h-[35px]">
              <FaMinus />
              <span className="text-xs">Withdraw</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adviser;
