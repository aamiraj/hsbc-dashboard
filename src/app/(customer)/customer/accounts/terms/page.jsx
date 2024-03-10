import React from "react";
import Adviser from "../_components/Adviser";

const TermsPage = () => {
  return (
    <div className="flex gap-x-10">
      <div className="bg-white w-[436px] h-[610px] mt-7 mb-16 rounded-xl">
        <div className="px-10 py-16">
          <div className="flex justify-between">
            <h1 className="text-[16px] text-[#878790] font-medium ">
              General Information
            </h1>
            <h2 className="text-[16px] font-bold text-black">EUR/USD</h2>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="text-[16px] text-[#878790] font-medium ">
              Fund Payment Date
            </h1>
            <h2 className="text-[16px] font-bold text-black">
              2023-12-12 / 18:24
            </h2>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="text-[16px] text-[#878790] font-medium ">
              Available For
            </h1>
            <h2 className="text-[16px] font-bold text-black">
              Invested / Trading
            </h2>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="text-[16px] text-[#878790] font-medium ">
              Remitted Amount
            </h1>
            <h2 className="text-[16px] font-bold text-black">$1.100</h2>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="text-[16px] text-[#878790] font-medium ">Bonuses</h1>
            <h2 className="text-[16px] font-bold text-black">0.0%</h2>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="text-[16px] text-[#878790] font-medium ">
              Credited Amount
            </h1>
            <h2 className="text-[16px] font-bold text-black">$1.245</h2>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="text-[16px] text-[#878790] font-medium ">
              Leverage Effect
            </h1>
            <h2 className="text-[16px] font-bold text-black">10</h2>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="text-[16px] text-[#878790] font-medium ">
              Leverage Effect
            </h1>
            <h2 className="text-[16px] font-bold text-black">0 Month</h2>
          </div>
          <div className="flex justify-between pt-7">
            <h1 className="text-[16px] text-[#878790] font-medium ">
              Your Investment Is <br /> Guarantedd up to
            </h1>
            <h2 className="text-[16px] font-bold text-black">10</h2>
          </div>
        </div>
      </div>
      <Adviser />
    </div>
  );
};

export default TermsPage;
