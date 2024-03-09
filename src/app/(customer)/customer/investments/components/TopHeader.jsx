"use client"

import React, { useState } from "react";
import { FaSort } from "react-icons/fa";

const buttonActive = {
  backgroundColor: "#FF0000",
  borderColor: "#FF0000",
  color: "white",
};

const TopHeader = () => {
  const [isActive, setIsActive] = useState(true)

  const handleTabOpen = (id, active) => {
    const contentInTab = document.getElementById(id);
    const allTabs = document.getElementsByClassName("bookletTab");
    for (let i = 0; i < allTabs.length; i++) {
      allTabs[i].style.display = "none";
    }
    contentInTab.style.display = "block";
    setIsActive(active)
  };
  return (
    <div>
      <div className="flex items-center justify-evenly gap-0">
        <button
          type="button"
          className="text-4xl font-bold text-black block w-full text-center px-8 py-4 rounded-l-lg bg-white border border-black"
          style={isActive ? buttonActive : {}}
          onClick={()=>handleTabOpen("saving-funds", true)}
        >
          Saving Funds
        </button>
        <button
          type="button"
          className="text-4xl font-bold text-black block w-full text-center px-8 py-4 rounded-r-lg bg-white border border-black"
          style={!isActive ? buttonActive : {}}
          onClick={()=>handleTabOpen("car-park", false)}
        >
          Car Park
        </button>
      </div>
      <div className="py-4 font-bold text-[#595959] flex items-center justify-between gap-8">
        <p>Category</p>
        <div className="flex items-center justify-end gap-2">
          <p className="flex items-center gap-2">
            Map Title <FaSort />
          </p>
          <p className="flex items-center gap-2">
            Period <FaSort />
          </p>
          <p className="flex items-center gap-2">
            Guarented <FaSort />
          </p>
          <p className="flex items-center gap-2">
            End Of Subscription <FaSort />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
