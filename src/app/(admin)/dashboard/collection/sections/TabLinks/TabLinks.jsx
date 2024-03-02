import React from "react";
import TabButton from "../../components/TabButton/TabButton";

const TabLinks = () => {
  return (
    <div className="flex items-center justify-evenly border-b">
      <TabButton text={"Money Recieved"} open={"recieved"} isDefault={true} />
      <TabButton text={"Withdraw"} open={"withdraw"} isDefault={false} />
      <TabButton text={"Deposit"} open={"deposit"} isDefault={false} />
      <TabButton text={"Add/Modify a plan"} open={"modify"} isDefault={false} />
    </div>
  );
};

export default TabLinks;
