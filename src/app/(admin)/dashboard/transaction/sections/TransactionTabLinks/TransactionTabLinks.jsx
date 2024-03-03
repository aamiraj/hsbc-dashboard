import React from "react";
import TabButton from "../../../collection/components/TabButton/TabButton";

const TransactionTabLinks = ({ parentClass }) => {
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
        text={"Cryptocurrencies"}
        id={"cryptocurrencies"}
        isDefault={true}
        handleClick={handleClick}
      />
      <TabButton
        text={"Stock Markets"}
        id={"stock_markets"}
        isDefault={false}
        handleClick={handleClick}
      />
      <TabButton
        text={"Bulk Transactions"}
        id={"bulk_transactions"}
        isDefault={false}
        handleClick={handleClick}
      />
    </div>
  );
};

export default TransactionTabLinks;
