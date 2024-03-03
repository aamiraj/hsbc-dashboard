"use client";

import React from "react";
import TransactionTabLinks from "./sections/TransactionTabLinks/TransactionTabLinks";
import PaymentList from "../components/PaymentList/PaymentList";
import { payments } from "@/dummydata/payments";

const Transaction = () => {
  return (
    <div className="p-8">
      <TransactionTabLinks parentClass={"transaction"} />
      <div>
        <div
          id="investment"
          className="tabcontent transaction"
          style={{ display: "block" }}
        >
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
        <div
          id="park"
          className="tabcontent transaction"
          style={{ display: "none" }}
        >
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
        <div
          id="fund"
          className="tabcontent transaction"
          style={{ display: "none" }}
        >
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
        <div
          id="insurance"
          className="tabcontent transaction"
          style={{ display: "none" }}
        >
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
