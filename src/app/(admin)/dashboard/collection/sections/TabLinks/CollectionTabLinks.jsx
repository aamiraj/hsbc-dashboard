"use client";

import React from "react";
import TabButton from "../../../collection/components/TabButton/TabButton";

const CollectionTabLinks = ({ parentClass }) => {
  const handleClick = (e, id) => {
    const currentDiv = document.getElementById(id);

    const allDivs = document.getElementsByClassName(parentClass);
    const tabButtons = document.getElementsByClassName("tab_button");

    for (let i = 0; i < allDivs.length; i++) {
      allDivs[i].style.display = "none";
    }

    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].classList.remove("active");
    }

    currentDiv.style.display = "block";
    e.target.classList.add("active");
  };
  return (
    <div className="flex items-center justify-evenly border-b">
      <TabButton
        text={"Money Recieved"}
        id={"recieved"}
        isDefault={true}
        handleClick={handleClick}
      />
      <TabButton
        text={"Withdraw"}
        id={"withdraw"}
        isDefault={false}
        handleClick={handleClick}
      />
      <TabButton
        text={"Deposit"}
        id={"deposit"}
        isDefault={false}
        handleClick={handleClick}
      />
      <TabButton
        text={"Add/Modify a plan"}
        id={"modify"}
        isDefault={false}
        handleClick={handleClick}
      />
    </div>
  );
};

export default CollectionTabLinks;
