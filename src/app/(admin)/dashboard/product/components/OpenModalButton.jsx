"use client";

import React from "react";
import { PiPlusCircle } from "react-icons/pi";

const OpenModalButton = ({ id }) => {
  const handleOpenModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "block";
  };
  return (
    <button
      type="button"
      onClick={() => handleOpenModal(id)}
      className="w-max mb-4 flex items-center gap-4 px-4 py-2 text-[#39de5d] border border-[#39de5d] hover:bg-[#39de5d] hover:text-white rounded-lg"
    >
      <p className="text-lg font-bold">Add event</p>
      <PiPlusCircle style={{ width: 32, height: 32 }} />
    </button>
  );
};

export default OpenModalButton;
