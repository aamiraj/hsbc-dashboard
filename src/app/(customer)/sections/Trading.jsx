import React from "react";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import { iconSize } from "./HeaderNavBar";
import { PiRadical } from "react-icons/pi";
import { PiArrowUpRight } from "react-icons/pi";

const tradings = [
  {
    title: "Today",
    value: "$16",
  },
  {
    title: "Yesterday",
    value: "$12",
  },
  {
    title: "7 days",
    value: "$1.62",
  },
  {
    title: "30 days",
    value: "$1.62",
  },
  {
    title: "3 months",
    value: "$1.62",
  },
];

const Trading = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <PiRadical style={iconSize} />
          <h3 className="text-2xl font-bold pt-2">Trading</h3>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="p-1 border-2 border-black w-max">
            <PiArrowLeft style={iconSize} />
          </button>
          <button type="button" className="p-1 border-2 border-black w-max">
            <PiArrowRight style={iconSize} />
          </button>
        </div>
      </div>
      <div className="bg-white flex items-center justify-evenly gap-4 rounded-2xl shadow-lg p-8 my-10">
        <p className="p-2 font-bold text-2xl">Trading</p>
        {tradings.map((trade, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center gap-1 justify-center bg-[#E8F5E7] p-2 text-[#439F3F] rounded-full">
              <p>{trade.title}</p>
              <PiArrowUpRight style={iconSize} />
            </div>
            <p className="text-2xl font-medium">{trade.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trading;
