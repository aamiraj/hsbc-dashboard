"use client"

import React from "react";
import { FaFolderOpen } from "react-icons/fa6";

const PopUpButton = ({id}) => {
  const handleOpenPopUp = () => {
    const popUp = document.getElementById(id);
    popUp.style.display = "block";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button type="button" onClick={handleOpenPopUp}>
      <FaFolderOpen style={{ width: 24, height: 24, color: "#39DE5D" }} />
    </button>
  );
};

export default PopUpButton;
