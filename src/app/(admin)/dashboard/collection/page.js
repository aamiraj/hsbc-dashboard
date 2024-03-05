"use client";
import React from "react";
import PaymentList from "../components/PaymentList/PaymentList";
import { payments } from "@/dummydata/payments";
import CollectionTabLinks from "./sections/TabLinks/CollectionTabLinks";
import OrderList from "./sections/OrderList/OrderList";
import ProductSell from "./components/ProductSell";
import FundsPerClient from "./components/FundsPerClient";
import CurrentPlans from "./components/CurrentPlans";

const Collection = () => {
  return (
    <div className="p-8">
      <CollectionTabLinks parentClass={"collection"} />
      <div>
        <div
          id="recieved"
          className="tabcontent collection"
          style={{ display: "block" }}
        >
          <div className="flex ">
            <div className="text-2xl font-bold text-[#439F3F] px-8">
              Fund Per Client : $495.282,57
            </div>
            <div className="text-2xl font-bold text-[#439F3F]">
              Withdraw Amount : $495.282,57
            </div>
           
          </div>
          <ProductSell title={"Product Sell"} />
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
        <div
          id="withdraw"
          className="tabcontent collection"
          style={{ display: "none" }}
        >
          <div className="text-2xl font-bold text-[#439F3F] px-8">
            FUNDS PER CLIENT: €495,678.47
          </div>
          <FundsPerClient />
          <OrderList />
        </div>
        <div
          id="deposit"
          className="tabcontent collection"
          style={{ display: "none" }}
        >
           <div className="text-2xl font-bold text-[#439F3F] px-8">
            FUNDS PER CLIENT: €495,678.47
            </div>
          <FundsPerClient />
          <OrderList />
        </div>
        <div
          id="modify"
          className="tabcontent collection"
          style={{ display: "none" }}
        >
          <CurrentPlans/>
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default Collection;
