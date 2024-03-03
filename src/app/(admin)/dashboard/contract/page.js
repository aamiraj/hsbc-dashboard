import React from "react";
import PaymentTabLinks from "../payment/sections/PaymentTabLinks/PaymentTabLinks";
import ContractList from "./sections/ContractList/ContractList";

const Contract = () => {
  return (
    <div className="p-8">
      <PaymentTabLinks parentClass={"payment"} />
      <div>
        <div
          id="investment"
          className="tabcontent payment"
          style={{ display: "block" }}
        >
          <ContractList />
        </div>
        <div
          id="park"
          className="tabcontent payment"
          style={{ display: "none" }}
        >
          <ContractList />
        </div>
        <div
          id="fund"
          className="tabcontent payment"
          style={{ display: "none" }}
        >
          <ContractList />
        </div>
        <div
          id="insurance"
          className="tabcontent payment"
          style={{ display: "none" }}
        >
          <ContractList />
        </div>
      </div>
    </div>
  );
};

export default Contract;
