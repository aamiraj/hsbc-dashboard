"use client";

import React from "react";

const OpenModalButton = ({ id, children }) => {
  const handleOpenModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "block";
  };

  return (
    <button
      type="button"
      onClick={() => handleOpenModal(id)}
      className="flex justify-center items-center gap-x-2 bg-[#FF002E] rounded w-[121px] text-white h-[35px]"
    >
      {children}
    </button>
  );
};

export default OpenModalButton;
