import Link from "next/link";
import React from "react";
import PaymentTabLinks from "../payment/sections/PaymentTabLinks/PaymentTabLinks";
import SavingsFundList from "./components/SavingsFundList";

const Product = () => {
  return (
    <div className="p-8">
      <PaymentTabLinks parentClass={"product"} />
      <div>
        <div
          id="investment"
          className="tabcontent product"
          style={{ display: "block" }}
        >
          {/* <SavingsFundList /> */}
        </div>
        <div
          id="park"
          className="tabcontent product"
          style={{ display: "none" }}
        >
          {/* <SavingsFundList /> */}
        </div>
        <div
          id="fund"
          className="tabcontent product"
          style={{ display: "none" }}
        >
          <SavingsFundList />
        </div>
        <div
          id="insurance"
          className="tabcontent product"
          style={{ display: "none" }}
        >
          {/* <SavingsFundList /> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
