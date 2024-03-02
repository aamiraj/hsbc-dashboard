"use client";

import React from "react";

const TabButton = ({ text, open, isDefault }) => {
  const handleClick = (e, open) => {
    const currentDiv = document.getElementById(open);

    const allDivs = document.getElementsByClassName("tabcontent");
    const tabButtons = document.getElementsByClassName("tab_button");

    for (let i = 0; i < allDivs.length; i++) {
      allDivs[i].style.display = "none";
    }

    for (let i = 0; i < tabButtons.length; i++) {
      console.log(tabButtons[i].classList.value);
      tabButtons[i].classList.remove("active");
    }

    currentDiv.style.display = "block";
    e.target.classList.add("active");
  };
  return (
    <button
      type="button"
      onClick={(e) => handleClick(e, open)}
      className={`tab_button ${isDefault ? "active" : ""}`}
    >
      {text}
    </button>
  );
};

export default TabButton;
