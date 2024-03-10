import React from "react";
import Adviser from "../_components/Adviser";
import {optionList} from "../../../../(admin)/dashboard/options/optionList";
const MovementPage = () => {
  return (
    <div className="flex gap-x-10">
      <div className="bg-white w-[436px] h-[610px] mt-7 mb-16 rounded-xl">
        <h1 className="text-[16px] font-bold text-center py-5">
          Movement Of Funds
        </h1>
        <h1 className="text-[16px] font-bold text-center py-5">Send From</h1>
        <select
          name="timerange"
          id="timerange"
          className="flex items-center justify-between gap-2 p-2  text-[#7E7E7E] w-10/12 mx-auto border border-[#878790] outline-none"
        >
          {optionList.map(({ text, value }, i) => (
            <option key={i} value={value} className="text-sm">
              {text}
            </option>
          ))}
        </select>
        <h1 className="text-[16px] font-bold text-center pt-7 pb-5">
          AVAILABLE
        </h1>
        <p className="border border-[#878790] w-6/12 mx-auto text-center py-2 text-[#DD9A19] text-[16px] font-bold">
          119.998.100
        </p>
        <svg
          width="16"
          height="23"
          viewBox="0 0 16 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="  mx-auto"
        >
          <path
            d="M7.29289 22.7071C7.68342 23.0976 8.31658 23.0976 8.70711 22.7071L15.0711 16.3431C15.4616 15.9526 15.4616 15.3195 15.0711 14.9289C14.6805 14.5384 14.0474 14.5384 13.6569 14.9289L8 20.5858L2.34315 14.9289C1.95262 14.5384 1.31946 14.5384 0.928932 14.9289C0.538407 15.3195 0.538407 15.9526 0.928931 16.3431L7.29289 22.7071ZM7 -4.37114e-08L7 22L9 22L9 4.37114e-08L7 -4.37114e-08Z"
            fill="#878790"
          />
        </svg>
        <h1 className="text-[16px] font-bold text-center py-5">Send From</h1>
        <select
          name="timerange"
          id="timerange"
          className="flex items-center justify-between gap-2 p-2  text-[#7E7E7E] w-10/12 mx-auto border border-[#878790] outline-none"
        >
          {optionList.map(({ text, value }, i) => (
            <option key={i} value={value} className="text-sm">
              {text}
            </option>
          ))}
        </select>
        <div className="mt-6 flex justify-center">
        <button className="bg-[#FF002E] text-white py-3 px-12 rounded-md text-sm font-bold">
        Validate
        </button>
        </div>
      </div>
      <Adviser />
    </div>
  );
};

export default MovementPage;
