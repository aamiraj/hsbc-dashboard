"use client"

import React from "react";
import TabButton from "../../../collection/components/TabButton/TabButton";

const PaymentTabLinks = ({ parentClass }) => {
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
        text={"Finencial Invesment"}
        id={"investment"}
        isDefault={true}
        handleClick={handleClick}
      />
      <TabButton
        text={"Car Park"}
        id={"park"}
        isDefault={false}
        handleClick={handleClick}
      />
      <TabButton
        text={"Saving Fund"}
        id={"fund"}
        isDefault={false}
        handleClick={handleClick}
      />
      <TabButton
        text={"Life Insurance"}
        id={"insurance"}
        isDefault={false}
        handleClick={handleClick}
      />
    </div>
  );
};

export default PaymentTabLinks;
