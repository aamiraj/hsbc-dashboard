"use client"

import React from "react";
import { PiPlusCircle } from "react-icons/pi";

const PopUpButton = () => {
  const handleOpenPopUp = (id) => {
    const addUserPopUp = document.getElementById(id);
    addUserPopUp.style.display = "block";
  };
  return (
    <button
      type="button"
      onClick={() => handleOpenPopUp("addUserPopUp")}
      className="w-max mb-4 flex items-center gap-4 px-4 py-2 border border-[#39de5d] hover:bg-[#39de5d] text-[#39de5d] hover:text-white rounded-lg"
    >
      <p className="text-lg font-bold">Add User</p>
      <PiPlusCircle style={{ width: 32, height: 32 }} />
    </button>
  );
};

export default PopUpButton;
