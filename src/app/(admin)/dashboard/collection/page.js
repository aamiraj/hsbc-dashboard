import React from "react";
import PaymentList from "../components/PaymentList/PaymentList";
import { payments } from "@/dummydata/payments";
import CollectionTabLinks from "./sections/TabLinks/CollectionTabLinks";
import OrderList from "./sections/OrderList/OrderList";
import ProductSell from "./components/ProductSell";

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
          <ProductSell title={"Product Sell"}/>
          <PaymentList title={"Order in Progress"} payments={payments} />
        </div>
        <div
          id="withdraw"
          className="tabcontent collection"
          style={{ display: "none" }}
        >
          <OrderList />
        </div>
        <div
          id="deposit"
          className="tabcontent collection"
          style={{ display: "none" }}
        >
          <OrderList />
        </div>
        <div
          id="modify"
          className="tabcontent collection"
          style={{ display: "none" }}
        >
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default Collection;
