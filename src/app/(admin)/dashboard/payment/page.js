import React from "react";
import PaymentTabLinks from "./sections/PaymentTabLinks/PaymentTabLinks";
import { payments } from "@/dummydata/payments";
import PaymentList from "../components/PaymentList/PaymentList";
import InvestmentList from "./sections/InvestmentList/InvestmentList";

const Payment = () => {
  return (
    <div className="p-8">
      <PaymentTabLinks parentClass={"payment"} />
      <div>
        <div className="mt-8 flex items-center">
          <div className="bg-[#39DE5D] p-2 rounded-l-lg border border-[#39DE5D]">
            <p className="font-bold text-white">In Progress</p>
          </div>
          <div className="bg-white p-2 rounded-r-lg border border-black">
            <p className="font-bold text-[#595959]">Expired</p>
          </div>
        </div>
        <div
          id="investment"
          className="tabcontent payment"
          style={{ display: "block" }}
        >
          <InvestmentList />
        </div>
        <div
          id="park"
          className="tabcontent payment"
          style={{ display: "none" }}
        >
          <InvestmentList />
        </div>
        <div
          id="fund"
          className="tabcontent payment"
          style={{ display: "none" }}
        >
          <InvestmentList />
        </div>
        <div
          id="insurance"
          className="tabcontent payment"
          style={{ display: "none" }}
        >
          <InvestmentList />
        </div>
      </div>
    </div>
  );
};

export default Payment;
