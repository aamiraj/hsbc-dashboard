"use client";

import React from "react";
import TransactionTabLinks from "./sections/TransactionTabLinks/TransactionTabLinks";
import PaymentList from "../components/PaymentList/PaymentList";
import { payments } from "@/dummydata/payments";
import Cryptocurrency from "./sections/Cryptocurrency/Cryptocurrency";

const Transaction = () => {
  return (
    <div className="p-8">
      <TransactionTabLinks parentClass={"transaction"} />
      <div>
        <div
          id="cryptocurrencies"
          className="tabcontent transaction"
          style={{ display: "block" }}
        >
          <Cryptocurrency />
        </div>
        <div
          id="stock_markets"
          className="tabcontent transaction"
          style={{ display: "none" }}
        >
          <Cryptocurrency />
        </div>
        <div
          id="bulk_transactions"
          className="tabcontent transaction"
          style={{ display: "none" }}
        >
          <Cryptocurrency />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
