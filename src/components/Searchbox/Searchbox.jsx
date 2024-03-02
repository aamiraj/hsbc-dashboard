import React from "react";
import SearchGlass from "../Icons/SearchGlass";
import Command from "../Icons/Command";

const Searchbox = ({ withCommand }) => {
  return (
    <div className="w-48 rounded-lg flex items-center justify-between bg-[#1C1C1C0D] p-2 cursor-pointer border border-[#1C1C1C0D] hover:border">
      <div className="flex items-center">
        <SearchGlass w={24} h={24} />
        <span className="text-[#1C1C1C33]">Search</span>
      </div>
      {withCommand && (
        <div className="flex items-center">
          <Command w={24} h={24} />
          <span className="text-[#1C1C1C33]">/</span>
        </div>
      )}
    </div>
  );
};

export default Searchbox;
