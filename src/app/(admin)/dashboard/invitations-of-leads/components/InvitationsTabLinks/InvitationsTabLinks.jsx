"use client"

import React from "react";
import TabButton from "../../../collection/components/TabButton/TabButton";

const InvitationsTabLinks = ({parentClass}) => {
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
        text={"Lead Manager"}
        id={"lead_manager"}
        isDefault={true}
        handleClick={handleClick}
      />
      <TabButton
        text={"New Assignment"}
        id={"new_assignment"}
        isDefault={false}
        handleClick={handleClick}
      />
      <TabButton
        text={"Auto Pilot Lead Assignment"}
        id={"auto_pilot"}
        isDefault={false}
        handleClick={handleClick}
      />
      <TabButton
        text={"Archive"}
        id={"archive"}
        isDefault={false}
        handleClick={handleClick}
      />
    </div>
  );
};

export default InvitationsTabLinks;
