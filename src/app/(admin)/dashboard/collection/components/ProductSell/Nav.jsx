import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <h1 className="text-[22px] font-semibold">Product Sell</h1>
      <div className="relative flex gap-x-5">
        <div>
          <input
            type="text"
            className="border outline-none p-3 pl-10 rounded-[10px]"
            placeholder="Search"
          />
          <CiSearch className="absolute top-3 left-2 h-[24px] w-[24px] text-gray-500" />
        </div>
        <input
          type="text"
          className="border outline-none p-3 rounded-[10px]"
          placeholder="last 30 days"
        />
        <FaAngleDown className="absolute top-3 right-2 h-[24px] w-[24px] text-gray-500" />
      </div>
    </nav>
  );
};

export default Nav;
